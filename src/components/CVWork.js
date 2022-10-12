import React from "react";
import "../style.css";

export default class CVWork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, position, workFrom, workTo, workExtra } = this.props;

    return (
      <div className="cvwork--area">
        <p className="cvwork--title">WORK EXPERIENCE</p>
        <div className="cvwork--flex">
          <p className="cvwork--position">{position}</p>
          <p className="cvwork--time">{workFrom + " - " + workTo}</p>
        </div>
        <p className="cvwork--company">{company}</p>
        <p className="cvwork--info">{workExtra}</p>
      </div>
    );
  }
}

/*

* Math/science classes such as Algebra, Geometry, Chemistry
<br />
* One-on-one tutoring with struggling students
<br />
* Preparing and delivering public educational talks
<br />
* Student inservices
<br />* Managing timecards and vocational grades via Excel and macros
        
*/
