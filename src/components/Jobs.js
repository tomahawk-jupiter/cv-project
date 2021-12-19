import React, { Component } from 'react';
import JobCards from './JobCards';
import uniqid from 'uniqid';

class Jobs extends Component {
  constructor() {
    super();

    this.state = {
      btnText: 'Add',
      company: '',
      title: '',
      tasks: '',
      started: '',
      finished: '',
      jobArray: []
    }

    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCard = (e) => {
    this.setState({
      jobArray: this.state.jobArray.filter(card => card.id !== e.target.parentElement.id)
    });
  }

  handleView = () => {
    if (this.state.btnText === 'Submit') {
      return(
        <form className="edu-form">
          <label>Company</label>
          <input name="company" onChange={this.changeText}></input>
          <label>Title</label>
          <input name="title" onChange={this.changeText}></input>
          <label>Tasks</label>
          <input name="tasks" onChange={this.changeText}></input>
          <label>Started</label>
          <input name="started" onChange={this.changeText}></input>
          <label>Finished</label>
          <input name="finished" onChange={this.changeText}></input>
        </form>
      );
    }
    return(
      <JobCards deleteCard={this.deleteCard} cards={this.state.jobArray}/>
    );
  }

  changeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addJob = () => {
    if (this.state.btnText === 'Submit') {
      const card = {
        id: uniqid(),
        company: this.state.company,
        title: this.state.title,
        tasks: this.state.tasks,
        started: this.state.started,
        finished: this.state.finished
      };

      this.setState({
        btnText: 'Add',
        company: '',
        title: '',
        tasks: '',
        started: '',
        finished: '',
        jobArray: this.state.jobArray.concat(card)
      });
    } else {
      this.setState({
        btnText: 'Submit'
      });
    }
  }

  render() {
    return(
      <div className="job-container">
        <button onClick={this.addJob}>{this.state.btnText}</button>
        {this.handleView()}
      </div>
    );
  };
}

export default Jobs;