import React from "react";
import "../style.css";
import logo from "../images/logo.svg";

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <img className="header--logo" src={logo}></img>
        <p className="header--title">Figment</p>
        <div className="header--menu">
          <p className="header--option">Home</p>
          <p className="header--option">Services</p>
          <p className="header--option">About Us</p>
          <p className="header--option selected">Apply</p>
        </div>
      </nav>
    );
  }
}
