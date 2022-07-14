import React from "react";
import "../style.css";

export default class Education extends React.Component {
  render() {
    const { num } = this.props;
    return (
      <div>
        <label htmlFor={"checkbox_" + num}>Degree #{num}</label>
        <input id={"checkbox_" + num} type="checkbox" />
        <div className={"school_" + num}>
          <label htmlFor={"school_" + num}>School Name:</label>
          <input id={"school_" + num} type="text" />
          <label htmlFor={"degree_" + num}>Degree:</label>
          <input id={"degree_" + num} type="text" />
          <p>Date of Study:</p>
          <label htmlFor={"date_" + num + "from"}>From</label>
          <input id={"date_" + num + "from"} type="text" />
          <label htmlFor={"date_" + num + "to"}>To</label>
          <input id={"date_" + num + "to"} type="text" />
        </div>
      </div>
    );
  }
}
