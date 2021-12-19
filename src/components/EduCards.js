import React from 'react';

const EduCards = (props) => {
  const { cards, deleteCard } = props; 
  return(
    <div>
      {cards.map((card, index) => {
        return( 
          <div className="card" key={index} id={card.id}>
            <div>School: {card.school}</div>
            <div>Title: {card.title}</div>
            <div>Started: {card.started}</div>
            <div>Finished: {card.finished}</div>
            <button onClick={deleteCard}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default EduCards;