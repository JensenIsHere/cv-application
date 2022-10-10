import React from "react";
import "../style.css";

export default class CVEducation extends React.Component {
  render() {
    return (
      <div className="cveducation--area">
        <p className="cveducation--title">EDUCATION</p>
        <div className="cveducation--flex">
          <p className="cveducation--degree">
            <strong>Associates in Engineering Science</strong>
          </p>
          <p className="cveducation--time">Jan 2003 - May 2008</p>
        </div>
        <p className="cveducation--school">William Rainey Harper College</p>
        <p className="cveducation--info">Spent too long messing around!</p>
      </div>
    );
  }
}
