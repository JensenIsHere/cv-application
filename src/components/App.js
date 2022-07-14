import React from "react";
import "../style.css";
import Header from "./Header";
import Hero from "./Hero";
import CV from "./CV.js";
import Footer from "./Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Hero />
        <CV />
        <Footer />
      </div>
    );
  }
}
