import React from "react";
import "../style.css";

export default class Personal extends React.Component {
  render() {
    return (
      <div className="sidebar--container personal">
        <p className="sidebar--title">Personal Information</p>
        <form>
          <div>
            <label for="fname">First Name:</label>
            <input type="text" name="fname" id="fname" />
          </div>
          <div>
            <label for="lname">Last Name:</label>
            <input type="text" name="lname" id="lname" />
          </div>
          <div>
            <label for="title">Title:</label>
            <input type="text" name="title" id="title" />
          </div>
          <div>
            <label for="phone">Phone #:</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label for="info">Info:</label>
            <textarea name="info" id="info" />
          </div>
        </form>
        {
          //stuff goes here
        }
      </div>
    );
  }
}
