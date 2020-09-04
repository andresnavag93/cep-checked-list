import React from "react";
import "../assets/styles/components/Header.scss";

import logo from "../assets/static/cep.png";

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="Platzi Video" />
  </header>
);

export default Header;
