import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ItemModal from "../Modals/ItemModal/ItemModal";
import { CurrentTemperatureUnitProvider } from "../../context/CurrentTemperatureUnitContext";
import { fetchWeatherData, extractWeatherInfo } from "../../utils/ApiWeather";

import "./App.css";
import Profile from "../Profile/Profile";
import AddItemModal from "../Modals/AddItemModal/AddItemModal";
import { fetchItems } from "../../utils/Api";
import { deleteItem } from "../../utils/Api";
import DeleteConfirmationModal from "../Modals/ConfirmationModal/ConfirmationModal";
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
  const [temperatureUnit, setTemperatureUnit] = useState("imperial");
  const [clothingItems, setClothingItems] = useState([]);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  useEffect(() => {
    async function getCurrentWeather() {
      const data = await fetchWeatherData(temperatureUnit);
      if (data) {
        const weatherData = extractWeatherInfo(data);
        setCurrentWeather(weatherData);
      }
    }
    getCurrentWeather();
  }, [temperatureUnit]);

  useEffect(() => {
    console.log("Active Modal State: ", activeModal);
  }, [activeModal]);

  useEffect(() => {
    const loadClothingItems = async () => {
      try {
        const items = await fetchItems();
        setClothingItems(items);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    loadClothingItems();
  }, []);
  const handleConfirmDelete = async () => {
    if (cardToDelete) {
      await handleDeleteItem(cardToDelete._id);
      setIsDeleteConfirmationOpen(false);
      setCardToDelete(null);
    }
  };
  const handleUnitChange = () => {
    setTemperatureUnit((prevUnit) =>
      prevUnit === "imperial" ? "metric" : "imperial"
    );
  };

  const openConfirmationModal = (card) => {
    setCardToDelete(card);
    setIsDeleteConfirmationOpen(true);
  };

  const handleCreateModal = () => {
    setActiveModal("create");
    console.log("click");
  };

  const handleCloseModal = () => {
    setActiveModal("");
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

  const handleAddNewItem = (newItem) => {
    if (!newItem.name || !newItem.imageUrl || !newItem.weather) {
      console.error("Invalid item structure:", newItem);
      return;
    }
    const newItemWithId = {
      ...newItem,
      _id: Date.now(),
    };
    setClothingItems([newItemWithId, ...clothingItems]);
    handleCloseModal();
  };

  return (
    <Router>
      <CurrentTemperatureUnitProvider
        value={{ temperatureUnit, setTemperatureUnit, currentWeather }}
      >
        <div className="App">
          <Header
            currentWeather={currentWeather}
            onCreateModal={handleCreateModal}
            onUnitChange={handleUnitChange}
            temperatureUnit={temperatureUnit}
            name={username}
          />

          <Switch>
            <Route path="/" exact>
              <Main
                currentWeather={currentWeather}
                onSelectCard={handleSelectedCard}
                onUnitChange={handleUnitChange}
                temperatureUnit={temperatureUnit}
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
              temperatureUnit={temperatureUnit}
              currentWeather={currentWeather}
            />
          )}

          <DeleteConfirmationModal
            isOpen={isDeleteConfirmationOpen}
            onClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
            item={cardToDelete}
          />
        </div>
      </CurrentTemperatureUnitProvider>
    </Router>
  );
}

export default App;
