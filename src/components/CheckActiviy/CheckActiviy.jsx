import React from "react";
import { Link } from "react-router-dom";
import "./check-activiy.scss";
import clock from "../../assets/icons/whiteClock.svg";
import backArrow from "../../assets/icons/backArrow.svg";
import blueEdit from "../../assets/icons/blueEdit.svg";
import arrow from "../../assets/icons/whiteArrow2.svg";
import blueArrow from "../../assets/icons/blueArrow.svg";
import shower from "../../assets/icons/shower.svg";
import Header from "../Header/Header";

const CheckActiviy = () => {
  return (
    <>
      <Header title="Track Shower" />
      <section className="options">
        <section className="options__container">
          <Link to="/">
            <img className="options__backarrow" src={backArrow} alt="" />
          </Link>
          <div className="options__image-container">
            <img className="options__image" src={shower} alt="" />
          </div>
          <h1 className="options__text">
            Hi Daffy, how would you like to log your shower today?
          </h1>
          <div className="options__buttons">
            <Link className="options__timer" to="/options/timer">
              <img className="options__icon" src={clock} alt="" /> Timer
              <img className="options__icon-arrow" src={arrow} alt="" />
            </Link>
            <Link className="options__manual" to="/options/manual">
              <img className="options__icon" src={blueEdit} alt="" /> Enter
              manually
              <img className="options__icon-arrow" src={blueArrow} alt="" />
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default CheckActiviy;
