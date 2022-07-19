import React from "react";
import "../style.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Sidebar />
        {
          //Sidebar
          //CV
        }
        <Footer />
      </div>
    );
  }
}
