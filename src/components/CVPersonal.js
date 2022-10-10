import React from "react";
import "../style.css";
import phone from "../images/phone.svg";
import email from "../images/email_envelope.svg";

export default class CVPersonal extends React.Component {
  render() {
    return (
      <div className="cvpersonal--area">
        <p className="cvpersonal--name">{"Jensen Ruud".toUpperCase()}</p>
        <p className="cvpersonal--title">
          {"Full-Stack Developer".toUpperCase()}
        </p>
        <div className="cvpersonal--inline_img">
          <img src={phone} />
          <p className="cvpersonal--phone">+1 555-555-1234</p>
        </div>
        <div />
        <div className="cvpersonal--inline_img">
          <img src={email} />
          <p className="cvpersonal--email">
            {"jmr@mailinator.com".toUpperCase()}
          </p>
        </div>
      </div>
    );
  }
}
