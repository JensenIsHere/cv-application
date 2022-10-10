import React from "react";
import "../style.css";

export default class Education extends React.Component {
  render() {
    return (
      <div className="sidebar--container personal">
        <p className="sidebar--title">Education #1</p>
        <form>
          <div>
            <label for="degree_1">Degree:</label>
            <input type="text" name="degree_1" id="degree_1" />
          </div>
          <div>
            <label for="school_1">School:</label>
            <input type="text" name="school_1" id="school_1" />
          </div>
          <div>
            <label for="date_from_ed_1">From:</label>
            <input type="text" name="date_from_ed_1" id="date_from_ed_1" />
          </div>
          <div>
            <label for="date_to_ed_1">To:</label>
            <input type="text" name="date_to_ed_1" id="date_to_ed_1" />
          </div>
          <div>
            <label for="present_education_1">Present</label>
            <input
              type="checkbox"
              name="present_education_1"
              id="present_education_1"
            />
          </div>
          <div>
            <label for="extra_info_1">Extra Info:</label>
            <textarea name="extra_info_1" id="extra_info_1" />
          </div>
        </form>
        <div className="sidebar--delete">
          <button className="sidebar--button_delete">Delete</button>
        </div>
        {
          //stuff goes here
        }
      </div>
    );
  }
}
