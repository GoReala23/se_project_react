import "./Main.css";

import defaultClothingItems from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";

const Main = ({
  currentWeather,
  onSelectCard,

  clothingItems,
}) => {
  const { temperatureUnit } = useCurrentTemperatureUnit();

  const displayTemperature =
    temperatureUnit === "imperial"
      ? currentWeather.temperature.F
      : currentWeather.temperature.C;

  return (
    <main className="main">
      <div className="card__weather-today">
        <p>Today is {displayTemperature}/ You may want to wear:</p>
      </div>
      <section className="card__section">
        {clothingItems.map((item, index) => (
          <ItemCard
            key={item._id}
            item={item}
            currentWeather={currentWeather}
            showWeatherInfo={index === 0}
            onSelectCard={onSelectCard}
            // temperatureUnit={temperatureUnit}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
