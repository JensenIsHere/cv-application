import React from "react";
import "../style.css";

export default class Work extends React.Component {
  render() {
    return (
      <div className="sidebar--container personal">
        <p className="sidebar--title">Work Experience #1</p>
        <form>
          <div>
            <label for="company_1">Company:</label>
            <input type="text" name="company_1" id="company_1" />
          </div>
          <div>
            <label for="position_1">Position:</label>
            <input type="text" name="position_1" id="position_1" />
          </div>
          <div>
            <label for="date_from_work_1">From:</label>
            <input type="text" name="date_from_work_1" id="date_from_work_1" />
          </div>
          <div>
            <label for="date_t_worko_1">To:</label>
            <input type="text" name="date_to_work_1" id="date_to_work_1" />
          </div>
          <div>
            <label for="present_work_1">Present</label>
            <input type="checkbox" name="present_work_1" id="present_work_1" />
          </div>
          <div>
            <label for="description_1">Description:</label>
            <textarea name="description_1" id="description_1" />
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
