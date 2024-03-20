import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import WeatherBar from "../Weather/WeatherBar";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

import ItemModal from "../ItemModal/ItemModal";
import { fetchWeatherData, extractWeatherInfo } from "../../utils/ApiWeather";
import defaultClothingItems from "../../utils/constants";
import AddItemForm from "../AddItemModal/AddItemForm";

function App() {
  const [currentWeather, setCurrentWeather] = useState({
    city: "",
    temperature: "",
    type: "",
    day: true,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperatureUnit, setTemperatureUnit] = useState("imperial");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

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

  const handleUnitChange = (unit) => {
    setTemperatureUnit(unit);
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddNewItem = (newItem) => {
    setClothingItems([...clothingItems, newItem]);
    handleCloseModal();
  };

  return (
    <div>
      <Header
        currentWeather={currentWeather}
        onCreateModal={handleCreateModal}
        onUnitChange={setTemperatureUnit}
        temperatureUnit={temperatureUnit}
      />
      <WeatherBar
        currentWeather={currentWeather}
        temperatureUnit={temperatureUnit}
      />
      <Main
        currentWeather={currentWeather}
        onSelectCard={handleSelectedCard}
        onUnitChange={setTemperatureUnit}
        temperatureUnit={temperatureUnit}
        clothingItems={clothingItems}
      />
      <Footer />
      {activeModal === "create" && (
        <AddItemForm
          title="New Garments"
          onClose={handleCloseModal}
          onAddNewItem={handleAddNewItem}
          buttonText={"Add Garments"}
        />
      )}
      {activeModal === "preview" && (
        <ItemModal
          currentWeather={currentWeather}
          selectedCard={selectedCard}
          onClose={handleCloseModal}
        >
          {" "}
          <img src={selectedCard.link} alt={selectedCard.name} />{" "}
        </ItemModal>
      )}
    </div>
  );
}

export default App;
