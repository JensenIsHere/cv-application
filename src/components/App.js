import React from "react";
import "../style.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import CV from "./CV";
import Footer from "./Footer";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "Jensen",
      lName: "Ruud",
      title: "Full-Stack Developer",
      phone: "1-555-555-1234",
      email: "jmr@mailinator.com",
      info: "",
      skillsC1:
        "Languages: HTML, CSS, JavaScript, Ruby, C++; Frameworks: React",
      skillsC2:
        "Testing: Jest; Soft Skills: Teacher/mentor, Board experience, public speaking and presentations",
      degree: "Associates in Engineering Science",
      school: "William Rainey Harper College",
      schoolFrom: "Jan 2003",
      schoolTo: "May 2008",
      schoolExtra: "Spent too long messing around!",
      company: "Ouachita Hills Academy",
      position: "High School Teacher - Math/Science",
      workFrom: "Jan 2019",
      workTo: "Present",
      workExtra:
        "* Math/science classes such as Algebra, Geometry, Chemistry; One-on-one tutoring with struggling students; Preparing and delivering public educational talks; Student inservices; Managing timecards and vocational grades via Excel and macros",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log(`Working! Name is ${name} and value is ${value}`);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar
            fName={this.state.fName}
            lName={this.state.lName}
            title={this.state.title}
            phone={this.state.phone}
            email={this.state.email}
            info={this.state.info}
            skillsC1={this.state.skillsC1}
            skillsC2={this.state.skillsC2}
            degree={this.state.degree}
            school={this.state.school}
            schoolFrom={this.state.schoolFrom}
            schoolTo={this.state.schoolTo}
            schoolExtra={this.state.schoolExtra}
            company={this.state.company}
            position={this.state.position}
            workFrom={this.state.workFrom}
            workTo={this.state.workTo}
            workExtra={this.state.workExtra}
            handleChange={this.handleChange}
          />
          <CV
            fName={this.state.fName}
            lName={this.state.lName}
            title={this.state.title}
            phone={this.state.phone}
            email={this.state.email}
            info={this.state.info}
            skillsC1={this.state.skillsC1}
            skillsC2={this.state.skillsC2}
            degree={this.state.degree}
            school={this.state.school}
            schoolFrom={this.state.schoolFrom}
            schoolTo={this.state.schoolTo}
            schoolExtra={this.state.schoolExtra}
            company={this.state.company}
            position={this.state.position}
            workFrom={this.state.workFrom}
            workTo={this.state.workTo}
            workExtra={this.state.workExtra}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
