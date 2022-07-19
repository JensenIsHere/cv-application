import React from "react";
import "../style.css";
import Personal from "./Personal";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Personal />
        <Personal />
        <Personal />
        <Personal />
        {
          //Personal
          //Skills
          //Education #1
          //Work #1
        }
      </div>
    );
  }
}
