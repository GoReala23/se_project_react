import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
import { fetchWeatherData, extractWeatherInfo } from "../../utils/ApiWeather";
import "./App.css";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import { addItem } from "../../utils/Api";
import { fetchItems } from "../../utils/Api";
import { deleteItem } from "../../utils/Api";
import DeleteConfirmationModal from "../ConfirmationModal/ConfirmationModal";

function App() {
  const [currentWeather, setCurrentWeather] = useState({
    city: "",
    temperature: { F: "", C: "" },
    type: "",
    day: true,
  });

  const username = "name";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  // const [temperatureUnit, setTemperatureUnit] = useState("imperial");
  const [clothingItems, setClothingItems] = useState([]);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    useState("imperial");
  console.log(currentWeather);

  useEffect(() => {
    async function getCurrentWeather() {
      const data = await fetchWeatherData(currentTemperatureUnit);
      if (data) {
        const weatherData = extractWeatherInfo(data);
        console.log(weatherData);
        setCurrentWeather(weatherData);
      }
    }
    getCurrentWeather();
  }, [currentTemperatureUnit]);

  useEffect(() => {}, [activeModal]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const fetchedItems = await fetchItems();
        if (fetchedItems) {
          console.log("Items fetched:", fetchedItems);
          setClothingItems(fetchedItems);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    loadItems();
  }, []);

  const handleConfirmDelete = async () => {
    if (cardToDelete) {
      try {
        await handleDeleteItem(cardToDelete._id);
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

  const handleDeleteItem = async (_id) => {
    const previousItems = [...clothingItems];
    setClothingItems(clothingItems.filter((item) => item._id !== _id));

    try {
      await deleteItem(_id);
    } catch (error) {
      console.error("Failed to delete the item:", error);
      setClothingItems(previousItems);
      alert("Failed to delete the item. It might have already been deleted.");
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
      const addedItem = await addItem(newItem);
      if (addedItem) {
        console.log("Item successfully added:", addedItem);
        setClothingItems([addedItem, ...clothingItems]);
        handleCloseModal();
      } else {
        console.error("Failed to add the item.");
      }
    } catch (error) {
      console.error("Error in adding item:", error);
    }
  };
  return (
    <Router>
      <CurrentTemperatureUnitContext.Provider
        value={{
          currentTemperatureUnit,
          setCurrentTemperatureUnit,
          handleToggleSwitchChange,
          currentWeather,
          handleToggleSwitchChange,
        }}
      >
        <div className="App">
          <Header
            currentWeather={currentWeather}
            onCreateModal={handleCreateModal}
            onUnitChange={handleToggleSwitchChange}
            temperatureUnit={currentTemperatureUnit}
            name={username}
          />

          <Switch>
            <Route path="/" exact>
              <Main
                currentWeather={currentWeather}
                onSelectCard={handleSelectedCard}
                onUnitChange={handleToggleSwitchChange}
                // temperatureUnit={temperatureUnit}
                clothingItems={clothingItems}
                onDeleteItem={openConfirmationModal}
              />
            </Route>
            <Route path="/profile" exact>
              <Profile
                currentWeather={currentWeather}
                username={username}
                onSelectCard={handleSelectedCard}
                onCreateModal={handleCreateModal}
                clothingItems={clothingItems}
              />
            </Route>
          </Switch>
          <Footer />

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
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </Router>
  );
}

export default App;
