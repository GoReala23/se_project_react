import React, { useEffect } from "react";
import WeatherCard from "../WeatherBar/WeatherCard";
import ClothesSection from "../Profile/ClothesSection";
import "./Main.css";

const Main = ({
  currentWeather,
  onSelectCard,
  onUnitChange,
  clothingItems,
  onDeleteItem,
  temperatureUnit,
  onCardLike,
  currentUser,
  onCreateModal,
}) => {
  useEffect(() => {
    console.log("clothingItems in Main:", clothingItems);
  }, [clothingItems]);

  return (
    <main className="main">
      <section className="main__weather-section">
        <WeatherCard weather={currentWeather} onUnitChange={onUnitChange} />
      </section>
      <section className="main__clothes-container">
        <ClothesSection
          className="main__clothes-section"
          clothingItems={clothingItems}
          currentWeather={currentWeather}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          onDeleteItem={onDeleteItem}
          onCardLike={onCardLike}
          currentUser={currentUser}
          showSectionBar={false}
          isMain={true}
        />
      </section>
    </main>
  );
};

export default Main;
