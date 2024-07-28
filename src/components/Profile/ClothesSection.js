import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({
  currentWeather,
  onSelectCard,
  onCreateModal,
  clothingItems,
  onDeleteItem,
  onCardLike,
  currentUser,
  showSectionBar,
  isLoggedIn,
  className,
}) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {}, [clothingItems]);

  const handleSelectCard = (item) => {
    setSelectedItemId(item._id);
    onSelectCard && onSelectCard(item);
  };

  return (
    <div className="clothes__section">
      {showSectionBar && (
        <div className="clothes__section-bar">
          <p className="clothes__section-text"> Your Items</p>
          <button className="clothes__section-add" onClick={onCreateModal}>
            + Add New
          </button>
        </div>
      )}
      <ul className={`clothes__section-container ${className}`}>
        {clothingItems.length > 0 ? (
          clothingItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              currentWeather={currentWeather}
              onSelectCard={() => handleSelectCard(item)}
              onDeleteItem={onDeleteItem}
              onCardLike={onCardLike}
              currentUser={currentUser}
              isLoggedIn={isLoggedIn}
            />
          ))
        ) : (
          <p>No clothing items found.</p>
        )}
      </ul>
    </div>
  );
};

export default ClothesSection;
