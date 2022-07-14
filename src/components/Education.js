import React from "react";
import "../style.css";

export default class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <p className="education heading">Educational Experience</p>
        <label htmlFor="checkbox_1">Degree #1</label>
        <input id="checkbox_1" type="checkbox" />
        <label htmlFor="school_1">School Name:</label>
        <input id="school_1" type="text" />
        <label htmlFor="degree_1">Degree:</label>
        <input id="degree_1" type="text" />
        <p>Date of Study:</p>
        <label htmlFor="date_1_from">From</label>
        <input id="date_1_from" type="text" />
        <label htmlFor="date_1_to">To</label>
        <input id="date_1_to" type="text" />
        <label htmlFor="checkbox_2">Degree #2</label>
        <input id="checkbox_2" type="checkbox" />
        <label htmlFor="school_2">School Name:</label>
        <input id="school_2" type="text" />
        <label htmlFor="degree_2">Degree:</label>
        <input id="degree_2" type="text" />
        <p>Date of Study:</p>
        <label htmlFor="date_2_from">From</label>
        <input id="date_2_from" type="text" />
        <label htmlFor="date_2_to">To</label>
        <input id="date_2_to" type="text" />
        <label htmlFor="checkbox_3">Degree #3</label>
        <input id="checkbox_3" type="checkbox" />
        <label htmlFor="school_3">School Name:</label>
        <input id="school_3" type="text" />
        <label htmlFor="degree_3">Degree:</label>
        <input id="degree_3" type="text" />
        <p>Date of Study:</p>
        <label htmlFor="date_3_from">From</label>
        <input id="date_3_from" type="text" />
        <label htmlFor="date_3_to">To</label>
        <input id="date_3_to" type="text" />
      </div>
    );
  }
}
