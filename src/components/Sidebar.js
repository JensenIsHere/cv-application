import React from "react";
import "../style.css";
import Personal from "./Personal";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Personal />
        <Skills />
        <Education />
        <div>
          <button className="sidebar--ed_add">+ Add Education</button>
        </div>
        <Work />
        <div>
          <button className="sidebar--work_add">+ Add Work</button>
        </div>
      </div>
    );
  }
}
