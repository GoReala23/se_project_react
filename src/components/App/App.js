import "./App.css";

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import ItemModal from "../ItemModal/ItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import EditProfileModal from "../EditProfile/EditProfileModal";
import DeleteConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import CurrentUserContext from "../../context/CurrentUserContext";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
import { fetchWeatherData, extractWeatherInfo } from "../../utils/ApiWeather";
import { getUser, registerUser, loginUser, updateUser } from "../../auth";
import {
  fetchItems,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
} from "../../utils/Api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    useState("imperial");
  const [registerError, setRegisterError] = useState("");

  useEffect(() => {
    async function getCurrentWeather() {
      try {
        const data = await fetchWeatherData(currentTemperatureUnit);
        if (data) {
          const weatherData = extractWeatherInfo(data);
          setCurrentWeather(weatherData);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    getCurrentWeather();
  }, [currentTemperatureUnit]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const fetchedItems = await fetchItems();
        setClothingItems(fetchedItems.items || []);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    loadItems();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getUser(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err.message);
          localStorage.removeItem("jwt");
        });
    } else {
      console.log("No token found, user is not logged in.");
    }
  }, []);

  const handleConfirmDelete = async () => {
    if (cardToDelete) {
      try {
        await handleDeleteItem(cardToDelete);
        handleCloseModal();
        setCardToDelete(null);
      } catch (error) {
        console.error("Failed to delete the item:", error);
        alert("Failed to delete the item. Please try again.");
      }
    }
  };

  const openConfirmationModal = (card) => {
    setActiveModal("deleteConfirmation");
    setCardToDelete(card);
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setCardToDelete(null);
  };

  const handleDeleteItem = async (item) => {
    try {
      await deleteItem(item._id);
      setClothingItems((previousItems) =>
        previousItems.filter((currentItem) => currentItem._id !== item._id)
      );
    } catch (error) {
      console.error("Failed to delete the item:", error);
      if (error.message === "Default item cannot be deleted") {
        alert("This item is a default item and cannot be deleted.");
      } else {
        alert("Failed to delete the item. It might have already been deleted.");
      }
    }
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) =>
      prevUnit === "imperial" ? "metric" : "imperial"
    );
  };
  const handleAddNewItem = async (newItem) => {
    try {
      const response = await addItem(newItem);

      if (response) {
        setClothingItems((prevItems) => [response, ...prevItems]);
        handleCloseModal();
      } else {
        console.error("Failed to add the item.");
        alert("Failed to add the item. Please try again.");
      }
    } catch (error) {
      console.error("Error in adding item:", error);
      alert("An error occurred while adding the item. Please try again.");
    }
  };

  const handleRegister = async (formData) => {
    try {
      console.log("Registering user:", formData);
      const res = await registerUser(formData);
      if (res && res.token) {
        localStorage.setItem("jwt", res.token);
        setCurrentUser(res.user);
        setIsLoggedIn(true);
        setIsRegisterModalOpen(false);
        setRegisterError("");
        console.log("User registered successfully:", res.user);
      }
    } catch (err) {
      console.error("Registration failed:", err.message);
      setRegisterError("Registration failed. Please try again.");
    }
  };

  const handleLogin = async (formData) => {
    try {
      console.log("Logging in user:", formData);
      const res = await loginUser(formData);
      if (res && res.token) {
        localStorage.setItem("jwt", res.token);
        setCurrentUser(res.user);
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
        console.log("User logged in successfully:", res.user);
      }
    } catch (err) {
      console.error("Failed to login:", err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
    console.log("User logged out.");
  };

  const handleEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleUpdateUser = async (updatedData) => {
    try {
      console.log("Updating user:", updatedData);
      const token = localStorage.getItem("jwt");
      const updatedUser = await updateUser(token, updatedData);
      setCurrentUser(updatedUser);
      setIsEditProfileModalOpen(false);
      console.log("User updated successfully:", updatedUser);
    } catch (err) {
      console.error("Failed to update user:", err.message);
    }
  };

  const handleCardLike = async ({ _id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    try {
      let updatedItem;
      if (!isLiked) {
        updatedItem = await addCardLike(_id, token);
      } else {
        updatedItem = await removeCardLike(_id, token);
      }
      if (updatedItem) {
        setClothingItems((currentItems) =>
          currentItems.map((item) => (item._id === _id ? updatedItem : item))
        );
      }
    } catch (err) {
      console.error("Error liking/unliking item:", err);
    }
  };

  return (
    <Router>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{
            currentTemperatureUnit,
            setCurrentTemperatureUnit,
            handleToggleSwitchChange,
            currentWeather,
          }}
        >
          <div className="App">
            <Header
              currentWeather={currentWeather}
              onCreateModal={handleCreateModal}
              onUnitChange={handleToggleSwitchChange}
              temperatureUnit={currentTemperatureUnit}
              name={currentUser ? currentUser.name : "Guest"}
              onRegisterModal={() => setIsRegisterModalOpen(true)}
              onLoginModal={() => setIsLoginModalOpen(true)}
              onLogout={handleLogout}
              isLoggedIn={isLoggedIn}
              user={currentUser}
            />
            <Switch>
              <Route path="/" exact>
                <Main
                  currentWeather={currentWeather}
                  onSelectCard={handleSelectedCard}
                  onUnitChange={handleToggleSwitchChange}
                  clothingItems={clothingItems}
                  onDeleteItem={openConfirmationModal}
                  temperatureUnit={currentTemperatureUnit}
                  onCardLike={handleCardLike}
                  currentUser={currentUser}
                  onCreateModal={handleCreateModal}
                />
              </Route>
              <Route path="/profile" exact>
                {isLoggedIn ? (
                  <Profile
                    currentWeather={currentWeather}
                    onSelectCard={handleSelectedCard}
                    onCreateModal={handleCreateModal}
                    clothingItems={clothingItems}
                    onLogout={handleLogout}
                    onEditProfileModal={handleEditProfileModal}
                    onUpdateUser={handleUpdateUser}
                    onDeleteItem={openConfirmationModal}
                    currentUser={currentUser}
                    onCardLike={handleCardLike}
                  />
                ) : (
                  <Redirect to="/" />
                )}
              </Route>
              <Route path="/login" exact>
                {isLoggedIn ? (
                  <Redirect to="/" />
                ) : (
                  <LoginModal onLogin={handleLogin} />
                )}
              </Route>
              <Route path="/register" exact>
                {isLoggedIn ? (
                  <Redirect to="/" />
                ) : (
                  <RegisterModal onRegister={handleRegister} />
                )}
              </Route>
            </Switch>
            {activeModal === "create" && (
              <AddItemModal
                isOpen={activeModal === "create"}
                onCloseModal={handleCloseModal}
                onAddItem={handleAddNewItem}
              />
            )}
            {activeModal === "preview" && (
              <ItemModal
                isOpen={activeModal === "preview"}
                selectedCard={selectedCard}
                onDelete={openConfirmationModal}
                onClose={handleCloseModal}
                temperatureUnit={currentTemperatureUnit}
                currentWeather={currentWeather}
              />
            )}
            {activeModal === "deleteConfirmation" && (
              <DeleteConfirmationModal
                isOpen={activeModal === "deleteConfirmation"}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                item={cardToDelete}
              />
            )}
            {isRegisterModalOpen && (
              <RegisterModal
                isOpen={isRegisterModalOpen}
                onClose={() => setIsRegisterModalOpen(false)}
                onRegister={handleRegister}
                errorMessage={registerError}
              />
            )}
            {isLoginModalOpen && (
              <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLogin={handleLogin}
              />
            )}
            {isEditProfileModalOpen && (
              <EditProfileModal
                isOpen={isEditProfileModalOpen}
                onClose={() => setIsEditProfileModalOpen(false)}
                onUpdateUser={handleUpdateUser}
                currentUser={currentUser}
              />
            )}
            <Footer />
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </Router>
  );
}

export default App;
