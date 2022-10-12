import React from "react";
import "../style.css";
import Personal from "./Personal";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";

export default class Sidebar extends React.Component {
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
      handleChange,
    } = this.props;

    return (
      <div className="sidebar">
        <Personal
          fName={fName}
          lName={lName}
          title={title}
          phone={phone}
          email={email}
          info={info}
        />
        <Skills
          skillsC1={skillsC1}
          skillsC2={skillsC2}
          handleChange={handleChange}
        />
        <Education
          degree={degree}
          school={school}
          schoolFrom={schoolFrom}
          schoolTo={schoolTo}
          schoolExtra={schoolExtra}
          handleChange={handleChange}
        />
        <div>
          <button className="sidebar--ed_add">+ Add Education</button>
        </div>
        <Work
          company={company}
          position={position}
          workFrom={workFrom}
          workTo={workTo}
          workExtra={workExtra}
          handleChange={handleChange}
        />
        <div>
          <button className="sidebar--work_add">+ Add Work</button>
        </div>
      </div>
    );
  }
}
