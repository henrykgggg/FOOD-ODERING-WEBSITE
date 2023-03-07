import React, { Fragment } from "react";
import mealsImage from "../../ASSETS/meals.jpg";
import "./Header.modules.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>FOOD ORDER</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt=" meals" />
      </div>
    </Fragment>
  );
};
export default Header;
