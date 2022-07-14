import React from "react";
import "../style.css";
import Personal from "./Personal";
import Education from "./Education";
import Work from "./Work";

export default class App extends React.Component {
  render() {
    return (
      <div className="cv">
        <Personal />
        <Education />
        <Work />
        <button className="cv--edit">Edit</button>
        <button className="cv--submit">Submit</button>
      </div>
    );
  }
}
