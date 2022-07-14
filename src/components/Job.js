import React from "react";
import "../style.css";

export default class Education extends React.Component {
  render() {
    const { num } = this.props;
    return (
      <div>
        <label htmlFor={"checkbox_job_" + num}>Employer #{num}</label>
        <input id={"checkbox_job_" + num} type="checkbox" />
        <div className={"job_" + num}>
          <label htmlFor={"name_" + num}>Company:</label>
          <input id={"name_" + num} type="text" />
          <label htmlFor={"position_" + num}>position:</label>
          <input id={"position_" + num} type="text" />
          <label htmlFor={"duties_" + num}>Job Duties:</label>
          <textarea id={"duties_" + num}></textarea>
          <p>Date of Employment:</p>
          <label htmlFor={"date_" + num + "from"}>From</label>
          <input id={"date_" + num + "from"} type="text" />
          <label htmlFor={"date_" + num + "to"}>To</label>
          <input id={"date_" + num + "to"} type="text" />
        </div>
      </div>
    );
  }
}
