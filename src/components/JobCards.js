import React from 'react';

const JobCards = (props) => {
  const { cards, deleteCard } = props; 
  return(
    <div>
      {cards.map((card, index) => {
        return( 
          <div className="card" key={index} id={card.id}>
            <div>School: {card.company}</div>
            <div>Title: {card.title}</div>
            <div>Tasks: {card.tasks}</div>
            <div>Started: {card.started}</div>
            <div>Finished: {card.finished}</div>
            <button onClick={deleteCard}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default JobCards;