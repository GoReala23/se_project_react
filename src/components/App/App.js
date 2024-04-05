import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import WeatherBar from "../Weather/WeatherBar";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

import ItemModal from "../ItemModal/ItemModal";
import { CurrentTemperatureUnitProvider } from "../../context/CurrentTemperatureUnitContext";
import { fetchWeatherData, extractWeatherInfo } from "../../utils/ApiWeather";
import defaultClothingItems from "../../utils/constants";
import "./App.css";
import Profile from "../Profile/Profile";

import AddItemModal from "../AddItemModal/AddItemModal";

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

  const handleUnitChange = () => {
    setTemperatureUnit((prevUnit) =>
      prevUnit === "imperial" ? "metric" : "imperial"
    );
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
          <WeatherBar
            currentWeather={currentWeather}
            temperatureUnit={temperatureUnit}
          />

          <Switch>
            <Route path="/" exact>
              <Main
                currentWeather={currentWeather}
                onSelectCard={handleSelectedCard}
                onUnitChange={handleUnitChange}
                temperatureUnit={temperatureUnit}
                clothingItems={clothingItems}
              />
            </Route>
            <Route path="/profile" eaxct>
              <Profile currentWeather={currentWeather} username={username} />
            </Route>
            <Route path="/add-item" exact>
              {activeModal === "create" && (
                <AddItemModal
                  onClose={handleCloseModal}
                  onAddNewItem={handleAddNewItem}
                />
              )}
            </Route>
            <Route path="/preview-item" exact>
              {activeModal === "preview" && (
                <ItemModal
                  selectedCard={selectedCard}
                  onClose={handleCloseModal}
                />
              )}
            </Route>
          </Switch>
          <Footer />
        </div>
      </CurrentTemperatureUnitProvider>
    </Router>
  );
}

export default App;
