import React from "react";
import "../style.css";

export default class Personal extends React.Component {
  render() {
    return (
      <div className="personal">
        <p className="info--heading">Personal Information</p>
        <label htmlFor="first_name">First Name:</label>
        <input id="first_name" type="text" />
        <label htmlFor="last_name">Last Name:</label>
        <input id="last_name" type="text" />
        <label htmlFor="age">Age:</label>
        <input id="age" type="text" />
        <label htmlFor="gender">Gender:</label>
        <input id="gender" type="text" />
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" />
        <label htmlFor="phone_num">Phone #:</label>
        <input id="phone_num" type="text" />
      </div>
    );
  }
}
