import React from "react";
import "../style.css";

export default class CVWork extends React.Component {
  render() {
    return (
      <div className="cvwork--area">
        <p className="cvwork--title">WORK EXPERIENCE</p>
        <div className="cvwork--flex">
          <p className="cvwork--position">
            <strong>High School Teacher - Math/Science</strong>
          </p>
          <p className="cvwork--time">Jan 2019 - Present</p>
        </div>
        <p className="cvwork--company">Ouachita Hills Academy</p>
        <p className="cvwork--info">
          * Math/science classes such as Algebra, Geometry, Chemistry
          <br />
          * One-on-one tutoring with struggling students
          <br />
          * Preparing and delivering public educational talks
          <br />
          * Student inservices
          <br />* Managing timecards and vocational grades via Excel and macros
        </p>
      </div>
    );
  }
}
