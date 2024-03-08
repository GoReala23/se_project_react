import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header";
import WeatherBar from "../Weather/WeatherBar";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { fetchWeatherData, extractWeatherInfo } from "../Weather/ApiWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState({
    city: "",
    temperature: "",
    type: "",
    day: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchWeatherData();
  //       const weatherInfo = extractWeatherInfo(data);
  //       setCurrentWeather(weatherInfo);
  //     } catch (error) {
  //       console.error("Error fetching weather data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function getCurrentWeather() {
      const data = await fetchWeatherData();
      const weatherData = extractWeatherInfo(data);
      setCurrentWeather(weatherData);
    }

    getCurrentWeather();
  });

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
  console.log(selectedCard);
  return (
    <div>
      <Header
        currentWeather={currentWeather}
        onCreateModal={handleCreateModal}
      />
      <WeatherBar currentWeather={currentWeather} />
      <Main currentWeather={currentWeather} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garments" onClose={handleCloseModal}>
          <label>
            Name
            <input type="text" name="name" minLength="1" maxLength="30" />
          </label>
          <label>
            Image
            <input type="url" name="link" minLength="1" maxLength="30" />
          </label>
          <p> Select the weather type</p>
          <div>
            <input type="radio" id="hot" value="hot" />
            <label> Hot</label>
          </div>{" "}
          <div>
            <input type="radio" id="warm" value="warm" />
            <label> Warm</label>
          </div>{" "}
          <div>
            <input type="radio" id="Cold" value="cold" />
            <label> Cold</label>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
