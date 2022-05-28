import React, { Component } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Jobs from "./components/Jobs";
import "./style.css";

const App = () => {
  return (
    <div className="App">
      <h1>CV App</h1>
      <h2>Contact Info</h2>
      <Contact />
      <hr />
      <h2>Education</h2>
      <Education />
      <hr />
      <h2>Jobs</h2>
      <Jobs />
      <hr />
    </div>
  );
};

export default App;
