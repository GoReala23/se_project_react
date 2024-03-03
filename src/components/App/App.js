import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer/Footer";

import "./App.css";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [currentWeather, setCurrentWeather] = useState("Storm");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  console.log(selectedCard);
  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main currentWeather={currentWeather} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garments" onClose={handleCloseModal}>
          <label>
            Name
            <input type="text" name="name" minLength="1" maxLength="30" />
          </label>
          <label>
            Image
            <input type="url" name="link" minLength="1" maxLength="30" />s
          </label>
          <p> Select the weather type</p>
          <div>
            <input type="radio" id="hot" value="hot" />
            <label> Hot</label>
          </div>{" "}
          <div>
            <input type="radio" id="warm" value="warm" />
            <label> Warm</label>
          </div>{" "}
          <div>
            <input type="radio" id="Cold" value="cold" />
            <label> Cold</label>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
