import React from "react";
import "../style.css";

export default class Personal extends React.Component {
  render() {
    return (
      <div className="personal">
        <p className="personal heading">Personal Information</p>
        <label htmlFor="first_name" className="personal--label">
          First Name:
        </label>
        <input id="first_name" type="text" className="personal--input" />
        <label htmlFor="last_name" className="personal--label">
          Last Name:
        </label>
        <input id="last_name" type="text" className="personal--input" />
        <label htmlFor="age" className="personal--label">
          Age:
        </label>
        <input id="age" type="text" className="personal--input" />
        <label htmlFor="gender" className="personal--label">
          Gender:
        </label>
        <input id="gender" type="text" className="personal--input" />
        <label htmlFor="email" className="personal--label">
          Email:
        </label>
        <input id="email" type="text" className="personal--input" />
        <label htmlFor="phone_num" className="personal--label">
          Phone #:
        </label>
        <input id="phone_num" type="text" className="personal--input" />
      </div>
    );
  }
}
