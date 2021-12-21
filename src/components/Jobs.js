import React, { useState } from 'react';
import JobCards from './JobCards';
import uniqid from 'uniqid';

const Jobs = () => {
  const [btnText, setBtnText] = useState('Add');
  const [fields, setFields] = useState({
    company: '',
    title: '',
    tasks: '',
    started: '',
    finished: ''
  });
  const [jobArray, setJobArray] = useState([]);

  const deleteCard = (e) => {
    setJobArray(jobArray.filter(card => card.id !== e.target.parentElement.id));
  }

  const handleView = () => {
    if (btnText === 'Submit') {
      return(
        <form className="edu-form">
          <label>Company</label>
          <input name="company" onChange={changeText}></input>
          <label>Title</label>
          <input name="title" onChange={changeText}></input>
          <label>Tasks</label>
          <input name="tasks" onChange={changeText}></input>
          <label>Started</label>
          <input name="started" onChange={changeText}></input>
          <label>Finished</label>
          <input name="finished" onChange={changeText}></input>
        </form>
      );
    }
    return(
      <JobCards deleteCard={deleteCard} cards={jobArray}/>
    );
  }

  const changeText = (e) => {
    setFields({
      [e.target.name]: e.target.value
    })
  }

  const addJob = () => {
    if (btnText === 'Submit') {
      const card = {
        id: uniqid(),
        company: fields.company,
        title: fields.title,
        tasks: fields.tasks,
        started: fields.started,
        finished: fields.finished
      };

      setBtnText('Add');
      setFields({        
        company: '',
        title: '',
        tasks: '',
        started: '',
        finished: ''
      });
      setJobArray(jobArray.concat(card));
    } else {
      setBtnText('Submit');
    }
  }

  return(
    <div className="job-container">
      <button onClick={addJob}>{btnText}</button>
      {handleView()}
    </div>
  );
}

export default Jobs;