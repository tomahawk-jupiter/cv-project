import React, { Component } from 'react';
import EduCards from './EduCards';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnText: 'Add',
      school: '',
      title: '',
      started: '',
      finished: '',
      eduArray: []
    }

    this.deleteCard = this.deleteCard.bind(this);
  }

  addEdu = () => {
    if (this.state.btnText === 'Submit') {
      const card = {
        id: uniqid(),
        school: this.state.school,
        title: this.state.title,
        started: this.state.started,
        finished: this.state.finished
      }

      this.setState({
        btnText: 'Add',
        school: '',
        title: '',
        started: '',
        finished: '',
        eduArray: this.state.eduArray.concat(card)
      });

    } else {
      this.setState({
        btnText: 'Submit'
      })
    }
  }

  changeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  deleteCard = (e) => {
    this.setState({
      eduArray: this.state.eduArray.filter(card => card.id !== e.target.parentElement.id)
    });
  }

  handleView = () => {
    if (this.state.btnText === 'Submit') {
      return(
        <form className="edu-form">
          <label>School Name</label>
          <input name="school" onChange={this.changeText}></input>
          <label>Title of Study</label>
          <input name="title" onChange={this.changeText}></input>
          <label>Started</label>
          <input name="started" onChange={this.changeText}></input>
          <label>Finished</label>
          <input name="finished" onChange={this.changeText}></input>
        </form>
      );
    } 
    if (this.state.eduArray.length > 0) {
      return(
        <EduCards deleteCard={this.deleteCard} cards={this.state.eduArray} />
      );
    }
  }

  render() {
    return(
      <div className="edu-container">
        <button onClick={this.addEdu}>{this.state.btnText}</button>
        {this.handleView()}
      </div>
    );
  };
}

export default Education;