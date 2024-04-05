// ClothesSection.js

import React from "react";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
import "./ClothesSection.css";

const ClothesSection = ({ currentWeather }) => {
  const filteredClothingItems = defaultClothingItems.filter((item) =>
    item.types.includes(currentWeather.type)
  );

  return (
    <div className="clothes__section">
      {filteredClothingItems.length > 0 ? (
        filteredClothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            currentWeather={currentWeather}
          />
        ))
      ) : (
        <p>No suitable clothing items found for the current weather.</p>
      )}
    </div>
  );
};

export default ClothesSection;
