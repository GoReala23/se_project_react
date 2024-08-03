import React, { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import WeatherCard from "../WeatherBar/WeatherCard";
import ClothesSection from "../Profile/ClothesSection";
import "./Main.css";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";

const Main = ({
  clothingItems,
  onSelectCard,
  onDeleteItem,
  onCardLike,

  onCreateModal,
  isLoggedIn,
}) => {
  const { currentTemperatureUnit, currentWeather } =
    useCurrentTemperatureUnit();
  // const currentUser = useContext(CurrentUserContext);

  const filteredItems = clothingItems.filter((item) =>
    item.weather.includes(currentWeather?.weather)
  );

  return (
    <main className="main">
      <section className="main__weather-section">
        <WeatherCard />
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
          clothingItems={filteredItems}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          onDeleteItem={onDeleteItem}
          onCardLike={onCardLike}
          showSectionBar={false}
          isMain={true}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </main>
  );
};

export default Main;
