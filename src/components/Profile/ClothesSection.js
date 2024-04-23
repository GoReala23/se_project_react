import React, { useEffect, useState } from "react";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { fetchItems } from "../../utils/Api";
import { useCurrentTemperatureUnit } from "../../context/CurrentTemperatureUnitContext";
import "./ClothesSection.css";

const ClothesSection = ({ currentWeather, onSelectCard, onCreateModal }) => {
  const [clothingItems, setClothingItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      const items = await fetchItems();
      if (items) {
        setClothingItems(items);
      }
    };

    loadItems();
  }, []);

  const filteredClothingItems = clothingItems.filter((item) =>
    item.types.includes(currentWeather.type)
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
