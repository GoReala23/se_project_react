import "./Main.css";

import defaultClothingItems from "../Weather/WeatherImages/WeatherClothes/DefaultClothingItems";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";

const Main = ({
  currentWeather,
  onSelectCard,
  temperatureUnit,
  clothingItems,
}) => {
  const displayUnit = temperatureUnit === "imperial" ? " F°" : " C°";

  return (
    <main className="main">
      <div className="card__weather-today">
        <p>
          Today the weather is: {currentWeather.temperature} {displayUnit} You
          may want to wear:
        </p>
      </div>
      <section className="card__section">
        {clothingItems.map((item, index) => (
          <ItemCard
            key={item._id}
            item={item}
            currentWeather={currentWeather}
            showWeatherInfo={index === 0}
            onSelectCard={onSelectCard}
            temperatureUnit={temperatureUnit}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
