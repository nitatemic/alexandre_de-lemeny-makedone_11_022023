import React, { useEffect, useState } from 'react';
import TaglineBG from '../assets/img/TaglineBG.webp';
import Card from './Card';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data/logements.json');
      const logements = await response.json();
      setData(logements);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="home">
        <div className="home-tagline">
          <img className="home-tagline-img" src={TaglineBG} alt="Tagline Background" />
          <div className="home-tagline-title">
            <h1 className="home-tagline-title-text">Chez vous, partout et ailleurs </h1>
          </div>
        </div>
        <main className="home-main">
          <div className="home-main-content" />
          <div className="card-container">
            {data.map((logement) => (
              <Card logement={logement} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
