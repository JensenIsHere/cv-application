import React from "react";
import "../style.css";
import phone_img from "../images/phone.svg";
import email_img from "../images/email_envelope.svg";

export default class CVPersonal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fName, lName, title, phone, email, info } = this.props;

    return (
      <div className="cvpersonal--area">
        <p className="cvpersonal--name">
          {fName.toUpperCase() + " " + lName.toUpperCase()}
        </p>
        <p className="cvpersonal--title">{title.toUpperCase()}</p>
        <div className="cvpersonal--inline_img">
          <img src={phone_img} />
          <p className="cvpersonal--phone">{phone}</p>
        </div>
        <div />
        <div className="cvpersonal--inline_img">
          <img src={email_img} />
          <p className="cvpersonal--email">{email.toUpperCase()}</p>
        </div>
      </div>
    );
  }
}
