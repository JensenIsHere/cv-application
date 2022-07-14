import React from "react";
import "../style.css";
import background from "../images/background.png";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero--img"></div>
        <p className="hero--tagline">Join us and you’ll never be a ghost.</p>
        <p className="hero--text">
          At Figment, you’ll stand out in the crowd and rise to your potential
          as you complete challenging projects in a fast-paced environment, with
          great compensation. Apply to our elite team today by filling out the
          form below.
        </p>
      </div>
    );
  }
}
