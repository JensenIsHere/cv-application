import React from "react";
import "../style.css";
import CVPersonal from "./CVPersonal";
import CVSkills from "./CVSkills";
import CVEducation from "./CVEducation";
import CVWork from "./CVWork";

export default class CV extends React.Component {
  render() {
    return (
      <div className="cv--area">
        <div className="cv--paper">
          <CVPersonal />
          <CVSkills />
          <CVWork />
          <CVEducation />
          {
            //CVPersonal
            //CVSkills
            //CVEducation
            //CVWork
          }
        </div>
      </div>
    );
  }
}
