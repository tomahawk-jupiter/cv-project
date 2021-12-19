import React, { Component } from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Jobs from './components/Jobs';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   editMode: true
    // };
  }

  render() {
    return (
      <div className="App">
        <h1>CV App</h1>
        <h2>Contact Info</h2>
        <Contact />
        <h2>Education</h2>
        <Education />
        <h2>Jobs</h2>
        <Jobs />
      </div>
    );
  }
}

export default App;
