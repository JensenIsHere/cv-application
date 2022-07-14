import React from "react";
import Job from "./Job.js";
import "../style.css";

export default class Work extends React.Component {
  render() {
    return (
      <div className="work">
        <p className="work heading">Work Experience</p>
        <Job num={1} />
        <Job num={2} />
        <Job num={3} />
      </div>
    );
  }
}
