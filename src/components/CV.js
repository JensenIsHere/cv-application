import React from "react";
import "../style.css";
import CVPersonal from "./CVPersonal";
import CVSkills from "./CVSkills";
import CVEducation from "./CVEducation";
import CVWork from "./CVWork";

export default class CV extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      fName,
      lName,
      title,
      phone,
      email,
      info,
      skillsC1,
      skillsC2,
      degree,
      school,
      schoolFrom,
      schoolTo,
      schoolExtra,
      company,
      position,
      workFrom,
      workTo,
      workExtra,
    } = this.props;

    return (
      <div className="cv--area">
        <div className="cv--paper">
          <CVPersonal
            fName={fName}
            lName={lName}
            title={title}
            phone={phone}
            email={email}
            info={info}
          />
          <CVSkills skillsC1={skillsC1} skillsC2={skillsC2} />
          <CVWork
            company={company}
            position={position}
            workFrom={workFrom}
            workTo={workTo}
            workExtra={workExtra}
          />
          <CVEducation
            degree={degree}
            school={school}
            schoolFrom={schoolFrom}
            schoolTo={schoolTo}
            schoolExtra={schoolExtra}
            info={info}
          />
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
