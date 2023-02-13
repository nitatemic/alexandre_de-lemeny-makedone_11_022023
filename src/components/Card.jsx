import React, { useEffect } from 'react';

export default function Card(props) {
  useEffect(() => {
    /* Console.log to check if the data is correct */
    const { logement } = props;
  }, [props]);
  const { logement } = props;
  return (

    <div className="card">
      <a href={logement.id}>
        {/* TODO: Add link to the card */}
        <div className="card-content">
          <div className="card-content-img">
            <img src={logement.cover} alt={logement.title} className="card-content-img-file" />
          </div>
          <div className="card-content-container">
            <h3 className="card-content-container-title">{logement.title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
}
