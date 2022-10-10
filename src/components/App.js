import React from "react";
import "../style.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import CV from "./CV";
import Footer from "./Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <CV />
        </div>
        <Footer />
      </div>
    );
  }
}
