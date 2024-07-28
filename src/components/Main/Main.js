import React, { useEffect } from "react";
import WeatherCard from "../WeatherBar/WeatherCard";
import ClothesSection from "../Profile/ClothesSection";
import "./Main.css";

const Main = ({
  weather,
  currentWeather,
  onSelectCard,
  onUnitChange,
  clothingItems,
  onDeleteItem,
  temperatureUnit,
  onCardLike,
  currentUser,
  onCreateModal,
  isLoggedIn,
}) => {
  useEffect(() => {}, [clothingItems]);

  return (
    <main className="main">
      <section className="main__weather-section">
        <WeatherCard weather={currentWeather} onUnitChange={onUnitChange} />
      </section>
      <p className="main__weather-info">
        {" "}
        Today is {weather}/ You may want to wear:{" "}
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
