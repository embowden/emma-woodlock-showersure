import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./home.scss";
import pound from "../../assets/icons/pounds.svg";
import clock from "../../assets/icons/clock.svg";
import droplet from "../../assets/icons/droplet.svg";
import whiteArrow from "../../assets/icons/whiteArrow.svg";
import returnArrow from "../../assets/icons/returnArrow.svg";
import Modal from "../Modal/Modal";

const delay = 3;

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return show ? (
    <>
      <Header title="Overview" />
      <section className="home">
        <article className="home__container">
          <h3 className="home__header">
            <img className="home__return" src={returnArrow} alt="" />
            March
          </h3>
          <div className="home__money">
            <div className="home__money-title">
              <img className="home__icon" src={pound} alt="" />
              <p className="home__subheader">Cost</p>
            </div>
            <div className="home__money-container">
              <div className="home__money-month">
                <h2 className="home__stats">£6.72</h2>
                <p className="home__label">this month</p>
              </div>
              <div className="home__money-shower">
                <h2 className="home__stats">£0.28</h2>
                <p className="home__label">per shower</p>
              </div>
            </div>
          </div>
          <div className="home__money">
            <div className="home__money-title">
              <img className="home__icon" src={clock} alt="" />
              <p className="home__subheader">Time</p>
            </div>
            <div className="home__money-container">
              <div className="home__money-month">
                <h2 className="home__stats">2.64 hrs</h2>
                <p className="home__label">this month</p>
              </div>
              <div className="home__money-shower">
                <h2 className="home__stats">6 min 37 sec</h2>
                <p className="home__label">per shower</p>
              </div>
            </div>
          </div>
          <div className="home__money">
            <div className="home__money-title">
              <img className="home__icon" src={droplet} alt="" />
              <p className="home__subheader">Water</p>
            </div>
            <div className="home__money-container">
              <div className="home__money-month">
                <h2 className="home__stats">1,785 litres</h2>
                <p className="home__label">this month</p>
              </div>
              <div className="home__money-shower">
                <h2 className="home__stats">74 litres</h2>
                <p className="home__label">per shower</p>
              </div>
            </div>
          </div>
          <div>
            <p className="home__see">See 12 months</p>
          </div>
          <Link to="/options" className="home__options">
            Track showers
            <img className="home__arrow" src={whiteArrow} alt="" />
          </Link>
        </article>
      </section>
    </>
  ) : (
    <Modal />
  );
};

export default Home;
