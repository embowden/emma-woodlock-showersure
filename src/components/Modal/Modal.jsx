import React from "react";
import waterdrop from "../../assets/icons/waterdrop.svg";
import "./modal.scss";

const Modal = () => {
  return (
    <>
      <section className="modal">
        <img className="modal__image" src={waterdrop} alt="" />
        <h1 className="modal__logo-one">Shower</h1>
        <h1 className="modal__logo-two">Sure</h1>
      </section>
    </>
  );
};

export default Modal;
