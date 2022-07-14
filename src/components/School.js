import React from "react";
import "../style.css";

export default class School extends React.Component {
  render() {
    const { num } = this.props;
    return (
      <div className="school">
        <label htmlFor={"checkbox_" + num} className="label--checkbox">
          Degree #{num}
        </label>
        <input id={"checkbox_" + num} type="checkbox" />
        <div className={"school_" + num}>
          <label htmlFor={"school_" + num} className="school--label">
            School Name:
          </label>
          <input id={"school_" + num} type="text" className="school--input" />
          <label htmlFor={"degree_" + num} className="school--label">
            Degree:
          </label>
          <input id={"degree_" + num} type="text" className="school--input" />
          <p className="school--label">Date:</p>
          <label
            htmlFor={"date_" + num + "from"}
            className="school--label_date"
          >
            From
          </label>
          <input
            id={"date_" + num + "from"}
            type="date"
            className="school--input_date"
          />
          <label htmlFor={"date_" + num + "to"} className="school--label_date">
            To
          </label>
          <input
            id={"date_" + num + "to"}
            type="date"
            className="school--input_date"
          />
        </div>
      </div>
    );
  }
}
