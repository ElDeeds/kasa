import React from 'react';

function Card({ data }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${data.cover})` }}>
      <span className="cardText">{data.title}</span>
    </div>
  );
}

export default Card;
