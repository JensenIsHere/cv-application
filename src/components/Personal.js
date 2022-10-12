import React from "react";
import "../style.css";

export default class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fName, lName, title, phone, email, info, handleChange } =
      this.props;

    return (
      <div className="sidebar--container personal">
        <p className="sidebar--title">Personal Information</p>
        <form>
          <div>
            <label for="fname">First Name:</label>
            <input
              type="text"
              name="fName"
              id="fname"
              value={fName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="lname">Last Name:</label>
            <input
              type="text"
              name="lName"
              id="lname"
              value={lName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="phone">Phone #:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
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
