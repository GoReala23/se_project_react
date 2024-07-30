import React from "react";
import WeatherCard from "../WeatherBar/WeatherCard";
import ClothesSection from "../Profile/ClothesSection";
import "./Main.css";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";

const Main = ({
  currentWeather,
  clothingItems,
  onSelectCard,
  onDeleteItem,
  onCardLike,
  currentUser,
  onCreateModal,
  isLoggedIn,
}) => {
  const { currentTemperatureUnit } = useCurrentTemperatureUnit();

  return (
    <main className="main">
      <section className="main__weather-section">
        <WeatherCard weather={currentWeather} />
      </section>
      <p className="main__weather-info">
        {currentWeather
          ? `Today is ${
              currentTemperatureUnit === "imperial"
                ? currentWeather.temperature.F
                : currentWeather.temperature.C
            } / You may want to wear: `
          : "Loading weather..."}
      </p>
      <section className="main__clothes-container">
        <ClothesSection
          className="clothes__section-container--4"
          clothingItems={clothingItems}
          currentWeather={currentWeather}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          onDeleteItem={onDeleteItem}
          onCardLike={onCardLike}
          currentUser={currentUser}
          showSectionBar={false}
          isMain={true}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </main>
  );
};

export default Main;
