import React from "react";
import "../style.css";

export default class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { degree, school, schoolFrom, schoolTo, schoolExtra, handleChange } =
      this.props;

    return (
      <div className="sidebar--container personal">
        <p className="sidebar--title">Education #1</p>
        <form>
          <div>
            <label for="degree">Degree:</label>
            <input
              type="text"
              name="degree"
              id="degree"
              value={degree}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="school">School:</label>
            <input
              type="text"
              name="school"
              id="school"
              value={school}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="schoolFrom">From:</label>
            <input
              type="text"
              name="schoolFrom"
              id="schoolFrom"
              value={schoolFrom}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="schoolTo">To:</label>
            <input
              type="text"
              name="schoolTo"
              id="schoolTo"
              value={schoolTo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="schoolExtra">Extra Info:</label>
            <textarea
              name="schoolExtra"
              id="schoolExtra"
              value={schoolExtra}
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
