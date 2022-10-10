import React from "react";
import "../style.css";

export default class CVSkills extends React.Component {
  render() {
    return (
      <div className="cvskills--area">
        <p className="cvskills--title">SKILLS</p>
        <p className="cvskills--c1">
          <strong>Languages:</strong> HTML, CSS, JavaScript, Ruby, C++
          <br />
          <br />
          <strong>Frameworks:</strong> React
        </p>
        <p className="cvskills--c2">
          <strong>Testing:</strong>Jest
          <br />
          <br />
          <strong>Soft Skills:</strong> Teacher/mentor, Board experience, public
          speaking and presentations
        </p>
      </div>
    );
  }
}
