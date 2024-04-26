import React, { useEffect, useState } from "react";

import ItemCard from "../ItemCard/ItemCard";
import { fetchItems } from "../../utils/Api";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
import "./ClothesSection.css";

const ClothesSection = ({
  currentWeather,
  onSelectCard,
  onCreateModal,
  clothingItems,
}) => {
  const [clothes, setClothes] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    if (clothingItems) {
      console.log("clothing items in ClothesSection:", clothingItems);
      console.log(clothingItems);
      setClothes(clothingItems);
    }
  }, [clothingItems]);

  console.log("Current Weather Type: ", currentWeather?.type);
  console.log(
    "Clothing Items: ",
    clothingItems.map((item) => ({ name: item.name, types: item.types }))
  );

  const filteredClothingItems = clothingItems.filter(
    (item) =>
      currentWeather?.type &&
      item.types
        ?.map((type) => type.toLowerCase())
        .includes(currentWeather.type.toLowerCase())
  );

  const handleSelectCard = (item) => {
    setSelectedItemId(item._id);
    onSelectCard && onSelectCard(item);
  };

  return (
    <>
      {" "}
      <div className="clothes__section">
        <div className="clothes__section-bar">
          <p className="clothes__section-text"> Your Items</p>
          <button className="clothes__section-add" onClick={onCreateModal}>
            {" "}
            + Add New
          </button>
        </div>

        <ul className="clothes__section-container">
          {filteredClothingItems.length > 0 ? (
            filteredClothingItems.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                currentWeather={currentWeather}
                onSelectCard={() => handleSelectCard(item)}
              />
            ))
          ) : (
            <p>No suitable clothing items found for the current weather.</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default ClothesSection;
