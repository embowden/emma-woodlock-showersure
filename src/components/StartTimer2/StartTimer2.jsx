import React from "react";
import "./start-timer2.scss";
import Header from "../Header/Header";
import clock from "../../assets/icons/clock.svg";
import pounds from "../../assets/icons/pounds.svg";
import droplet from "../../assets/icons/droplet.svg";
import { Link } from "react-router-dom";
import play from "../../assets/icons/ci_play-arrow.svg";

const StartTimer2 = () => {
  return (
    <>
      <Header title="Shower Timer" />
      <section className="timer">
        <article className="timer__nums">
          <div className="timer__time">
            <img className="timer__icon" src={clock} alt="" />
            <p className="timer__text">00:00</p>
          </div>
          <div className="timer__cost">
            <img className="timer__icon" src={pounds} alt="" />
            <p className="timer__text">0.00</p>
          </div>
          <div className="timer__water">
            <img className="timer__icon" src={droplet} alt="" />
            <p className="timer__text">0.0 L</p>
          </div>
        </article>
        <div className="timer__box">
          <Link className="timer__link" to="/options/end-timer">
            <img className="timer__new-icon" src={play} alt="" /> Start
          </Link>
        </div>
      </section>
    </>
  );
};

export default StartTimer2;
