import React, { useState } from 'react';
import EduCards from './EduCards';
import uniqid from 'uniqid';

const Education = (props) => {
  const [btnText, setBtnText] = useState('Add');
  const [fields, setFields] = useState({
    school: '',
    title: '',
    started: '',
    finished: ''
  });
  const [eduArray, setEduArray] = useState([]);

  const addEdu = () => {
    if (btnText === 'Submit') {
      const card = {
        id: uniqid(),
        school: fields.school,
        title: fields.title,
        started: fields.started,
        finished: fields.finished
      }

      setBtnText('Add');
      setFields({
        school: '',
        title: '',
        started: '',
        finished: ''
      });
      setEduArray(eduArray.concat(card));

    } else {
      setBtnText('Submit');
    }
  }

  const changeText = (e) => {
    setFields({
      [e.target.name]: e.target.value
    })
  }

  const deleteCard = (e) => {
    setEduArray(eduArray.filter(card => card.id !== e.target.parentElement.id));
  }

  const handleView = () => {
    if (btnText === 'Submit') {
      return(
        <form className="edu-form">
          <label>School Name</label>
          <input name="school" onChange={changeText}></input>
          <label>Title of Study</label>
          <input name="title" onChange={changeText}></input>
          <label>Started</label>
          <input name="started" onChange={changeText}></input>
          <label>Finished</label>
          <input name="finished" onChange={changeText}></input>
        </form>
      );
    } 
    if (eduArray.length > 0) {
      return(
        <EduCards deleteCard={deleteCard} cards={eduArray} />
      );
    }
  }

  return(
    <div className="edu-container">
      <button onClick={addEdu}>{btnText}</button>
      {handleView()}
    </div>
  );
}

export default Education;