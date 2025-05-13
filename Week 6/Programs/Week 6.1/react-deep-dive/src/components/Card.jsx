import React from 'react';

// innerComponent is passed as a prop
function Card({ innerComponent }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      {innerComponent}
    </div>
  );
}

export default Card;

