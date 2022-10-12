import React from "react";
import "../style.css";

export default class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, position, workFrom, workTo, workExtra, handleChange } =
      this.props;

    return (
      <div className="sidebar--container personal">
        <p className="sidebar--title">Work Experience #1</p>
        <form>
          <div>
            <label for="company">Company:</label>
            <input
              type="text"
              name="company"
              id="company"
              value={company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="position">Position:</label>
            <input
              type="text"
              name="position"
              id="position"
              value={position}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="workFrom">From:</label>
            <input
              type="text"
              name="workFrom"
              id="workFrom"
              value={workFrom}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="workTo">To:</label>
            <input
              type="text"
              name="workTo"
              id="workTo"
              value={workTo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="workExtra">Description:</label>
            <textarea
              name="workExtra"
              id="workExtra"
              value={workExtra}
              onChange={handleChange}
            />
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
