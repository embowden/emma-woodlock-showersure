import React from "react";
import "./header.scss";

const Header = ({ title }) => {
  return (
    <section className="header">
      <article className="header__container">
        <p className="header__header">{title}</p>
      </article>
    </section>
  );
};

export default Header;
