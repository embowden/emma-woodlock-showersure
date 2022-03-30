import React from "react";
import "./timer-results.scss";
import timer from "../../assets/icons/carbon_timer.svg";
import pounds from "../../assets/icons/pounds.svg";
import droplet from "../../assets/icons/droplet.svg";
import bulb from "../../assets/icons/light-bulb.svg";
import fire from "../../assets/icons/fire.svg";
import Header from "../Header/Header";

const TimerResults = () => {
  return (
    <>
      <Header title="Your shower time" />
      <div className="results__container">
        {/* <h1 className="results__title">Header</h1> */}
        <div className="results__timer-container-main">
          <div className="results__timer-container">
            <div className="results__timer">
              <div className="results__timer-top">
                <img src={timer} alt="timer" className="icon__timer" />
                <div className="results__time"> 5:27</div>
              </div>
              <div className="results__best">
                <img src={fire} alt="fire" />
                <div className="results__timer-top">New Best!</div>
              </div>
            </div>
          </div>
        </div>

        <div className="results__comment">
          Awesome! You're on fire in saving water.
        </div>
        <div className="results__saving-container">
          <div className="results__saving">
            <img src={pounds} alt="pounds" className="icon__pounds" />
            <div className="results__saving-figures"> 0.20 £ </div>
          </div>
          <div className="results__saving">
            <img src={droplet} alt="droplet" />
            <div className="results__saving-figures"> 52L </div>
          </div>
        </div>
        <div className="results__info-container">
          <img src={bulb} alt="light-bulb" />
          <div className="results__info">
            <h3 className="results__info-title">Did you know?</h3>
            <p className="results__info-text">
              Reducing your shower time by 2 minutes will save you £25 a year
              and 5000 litres of water.
            </p>
          </div>
        </div>

        <div className="results__bottom-space"></div>
      </div>
    </>
  );
};

export default TimerResults;
