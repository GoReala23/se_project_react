import "./Main.css";
import WeatherBar from "../Weather/WeatherBar";
import defaultClothingItems from "../Weather/WeatherImages/WeatherClothes/DefaultClothingItems";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";

const Main = ({ currentWeather, onSelectCard }) => {
  return (
    <main className="main">
      <WeatherBar weather={currentWeather}></WeatherBar>
      <div className="card__weather-today">
        <p>Today the weather is: {currentWeather}°F. You may want to wear:</p>
      </div>
      <section className="card__section">
        {defaultClothingItems.map((item, index) => (
          <ItemCard
            key={item._id}
            item={item}
            weather={currentWeather}
            showWeatherInfo={index === 0}
            onSelectCard={onSelectCard}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
