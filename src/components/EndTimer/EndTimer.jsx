import React from "react";
import "./end-timer.scss";
import Header from "../Header/Header";
import clock from "../../assets/icons/clock.svg";
import pounds from "../../assets/icons/pounds.svg";
import droplet from "../../assets/icons/droplet.svg";
import { Link } from "react-router-dom";
import play from "../../assets/icons/ci_play-arrow.svg";
import restart from "../../assets/icons/restart.svg";
import pause from "../../assets/icons/pause.svg";

const EndTimer = () => {
  return (
    <>
      <Header title="Shower Timer" />
      <section className="timer">
        <article className="timer__nums">
          <div className="timer__time">
            <img className="timer__icon" src={clock} alt="" />
            <p className="timer__text">05:27</p>
          </div>
          <div className="timer__cost">
            <img className="timer__icon" src={pounds} alt="" />
            <p className="timer__text">0.20</p>
          </div>
          <div className="timer__water">
            <img className="timer__icon" src={droplet} alt="" />
            <p className="timer__text">52.0 L</p>
          </div>
        </article>
        <div className="timer__box">
          <div className="timer__circle">
            <img src={restart} alt="" />
          </div>
          <Link className="timer__link" to="/results">
            <img className="timer__new-icon" src={play} alt="" /> Finish
          </Link>
          <div className="timer__circle">
            <img src={pause} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default EndTimer;
