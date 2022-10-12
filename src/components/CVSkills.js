import React from "react";
import "../style.css";

export default class CVSkills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skillsC1, skillsC2 } = this.props;
    return (
      <div className="cvskills--area">
        <p className="cvskills--title">SKILLS</p>
        <p className="cvskills--c1">{skillsC1}</p>
        <p className="cvskills--c2">{skillsC2}</p>
      </div>
    );
  }
}

/* 
<strong>Languages:</strong> HTML, CSS, JavaScript, Ruby, C++
<br />
<br />
<strong>Frameworks:</strong> React

  <strong>Testing:</strong>Jest
<br />
<br />
<strong>Soft Skills:</strong> Teacher/mentor, Board experience, public
speaking and presentations
*/
