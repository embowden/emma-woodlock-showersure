import React from "react";
import "./start-timer.scss";
import Header from "../Header/Header";
import pound from "../../assets/icons/pounds.svg";
import carbontimer from "../../assets/icons/carbon_timer.svg";
import raindrop from "../../assets/icons/carbon_rain-drop.svg";
import poundsign from "../../assets/icons/frame-20.svg";
import { Link } from "react-router-dom";
import pause from "../../assets/icons/ant-design_pause-outlined.svg";
import play from "../../assets/icons/ci_play-arrow-1.svg";
import stop from "../../assets/icons/ci_play-arrow.svg";
import refresh from "../../assets/icons/codicon_debug-restart.svg";

const StartTimer = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <>
      <div className="">
        <Header title="Shower Timer" />
        <div className="shower-timer__wrapper">
          <div className="timers">
            <section className="timers__clock">
              <img className="timer__icon" src={carbontimer} alt="timer icon" />
              <h1 className="times__watch">00.00</h1>
            </section>
            <section className="timers__money">
              <img className="pound__icon" src={poundsign} alt="pound icon" />
              <h1 className="times__pound">0.00</h1>
            </section>
            <section className="timers__water">
              <img className="drop__icon" src={raindrop} alt="drop icon" />
              <h1 className="times__litres">0.0 L</h1>
            </section>
          </div>
        </div>
        <div className="timer__buttons">
          <div className="button-bottom__finish">
            <img src={stop} alt="playbutton" />
            <div className="finish">Start</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartTimer;
