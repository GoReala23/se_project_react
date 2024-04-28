import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({
  currentWeather,
  onSelectCard,
  onCreateModal,
  clothingItems,
}) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    console.log("clothing items in ClothesSection:", clothingItems);
  }, [clothingItems]);

  const handleSelectCard = (item) => {
    setSelectedItemId(item._id);
    onSelectCard && onSelectCard(item);
  };

  return (
    <>
      <div className="clothes__section">
        <div className="clothes__section-bar">
          <p className="clothes__section-text"> Your Items</p>
          <button className="clothes__section-add" onClick={onCreateModal}>
            + Add New
          </button>
        </div>

        <ul className="clothes__section-container">
          {clothingItems.length > 0 ? (
            clothingItems.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                currentWeather={currentWeather}
                onSelectCard={() => handleSelectCard(item)}
              />
            ))
          ) : (
            <p>No clothing items found.</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default ClothesSection;
