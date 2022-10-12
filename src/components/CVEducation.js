import React from "react";
import "../style.css";

export default class CVEducation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { degree, school, schoolFrom, schoolTo, schoolExtra } = this.props;

    return (
      <div className="cveducation--area">
        <p className="cveducation--title">EDUCATION</p>
        <div className="cveducation--flex">
          <p className="cveducation--degree">{degree}</p>
          <p className="cveducation--time">{schoolFrom + " - " + schoolTo}</p>
        </div>
        <p className="cveducation--school">{school}</p>
        <p className="cveducation--info">{schoolExtra}</p>
      </div>
    );
  }
}
