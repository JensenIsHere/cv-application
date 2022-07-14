import React from "react";
import School from "./School.js";
import "../style.css";

export default class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <p className="education heading">Educational Experience</p>
        <School num={1} />
        <School num={2} />
        <School num={3} />
      </div>
    );
  }
}
