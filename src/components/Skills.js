import React from "react";
import "../style.css";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="sidebar--container personal">
        <p className="sidebar--title">Skills</p>
        <form>
          <div>
            <label for="column_1">Column 1:</label>
            <textarea name="column_1" id="column_1" />
          </div>
          <div>
            <label for="column_2">Column 2:</label>
            <textarea name="column_2" id="column_2" />
          </div>
        </form>
        {
          //stuff goes here
        }
      </div>
    );
  }
}
