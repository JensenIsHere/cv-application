import React from "react";
import "../style.css";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skillsC1, skillsC2, handleChange } = this.props;

    return (
      <div className="sidebar--container personal">
        <p className="sidebar--title">Skills</p>
        <form>
          <div>
            <label for="skillsC1">Column 1:</label>
            <textarea
              name="skillsC1"
              id="skillsC1"
              value={skillsC1}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="skillsC2">Column 2:</label>
            <textarea
              name="skillsC2"
              id="skillsC2"
              value={skillsC2}
              onChange={handleChange}
            />
          </div>
        </form>
        {
          //stuff goes here
        }
      </div>
    );
  }
}
