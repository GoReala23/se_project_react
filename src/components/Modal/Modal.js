import React, { useRef } from "react";
import { useEscape } from "../../hooks/useEscape";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children, name }) => {
  const modalRef = useRef();

  useEscape(onClose);
  useOutsideClick(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content" ref={modalRef}>
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
