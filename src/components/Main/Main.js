import "./Main.css";
import React, { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherBar/WeatherCard";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
const Main = ({
  currentWeather,
  onSelectCard,
  onDeleteItem,
  clothingItems,
}) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const { currentTemperatureUnit } = useCurrentTemperatureUnit();
  console.log(clothingItems);
  const displayTemperature =
    currentTemperatureUnit === "imperial"
      ? currentWeather.temperature.F
      : currentWeather.temperature.C;

  const handleSelectCard = (item) => {
    onSelectCard(item);
    setSelectedItemId(item._id);
  };

  return (
    <main className="main">
      <WeatherCard
        currentWeather={currentWeather}
        temperatureUnit={currentTemperatureUnit}
      />
      <div className="card__weather-today">
        <p>
          Today is {displayTemperature} {currentWeather.type}/ You may want to
          wear:
        </p>
      </div>
      <section className="card__section">
        {
          (console.log(clothingItems),
          clothingItems.map((item, index) => (
            <ItemCard
              key={item._id}
              item={item}
              currentWeather={currentWeather}
              showWeatherInfo={selectedItemId === item._id}
              onSelectCard={() => handleSelectCard(item)}
              onDeleteItem={onDeleteItem}
            />
          )))
        }
      </section>
    </main>
  );
};

export default Main;
