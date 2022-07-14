import React from "react";
import "../style.css";

export default class Education extends React.Component {
  render() {
    const { num } = this.props;
    return (
      <div className="job">
        <label htmlFor={"checkbox_job_" + num} className="label--checkbox">
          Employer #{num}
        </label>
        <input id={"checkbox_job_" + num} type="checkbox" />
        <div className={"job_" + num}>
          <label htmlFor={"name_" + num} className="job--label">
            Company:
          </label>
          <input id={"name_" + num} type="text" className="job--input" />
          <label htmlFor={"position_" + num} className="job--label">
            Position:
          </label>
          <input id={"position_" + num} type="text" className="job--input" />
          <label htmlFor={"duties_" + num} className="job--label">
            Job Duties:
          </label>
          <textarea id={"duties_" + num} className="job--duties"></textarea>
          <p className="job--label">Date:</p>
          <label htmlFor={"date_" + num + "from"} className="job--label_date">
            From
          </label>
          <input
            id={"date_" + num + "from"}
            type="date"
            className="job--input_date"
          />
          <label htmlFor={"date_" + num + "to"} className="job--label_date">
            To
          </label>
          <input
            id={"date_" + num + "to"}
            type="date"
            className="job--input_date"
          />
        </div>
      </div>
    );
  }
}
