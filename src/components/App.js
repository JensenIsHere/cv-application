import React from "react";
import "../style.css";
import Header from "./Header";
import Hero from "./Hero";
import Personal from "./Personal";
import Education from "./Education";
import Work from "./Work";
import Footer from "./Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Hero />
        <div className="cv_area">
          <Personal />
          <Education />
          <Work />
        </div>
        <Footer />
      </div>
    );
  }
}
