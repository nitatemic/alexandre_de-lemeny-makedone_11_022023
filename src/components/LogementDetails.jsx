import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';
import Dropdown from './Dropdown';

export default function LogementDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/logements.json');
      const logements = await response.json();
      const logement = logements.find((element) => element.id === id);
      /* Si on ne trouve pas de logement, on redirige vers la page d'404 */
      if (!logement) {
        window.location = '/404';
      }
      setData(logement);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Carousel arrayOfPictures={data.pictures} />
      <div className="logement-head">
        <div className="logement-head-container">
          <h1 className="logement-title">{data.title}</h1>
          <h2 className="logement-location">{data.location}</h2>
          <div className="logement-container-tags">
            {data.tags.map((tag) => (
              <span className="logement-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="logement-meta">
          <div className="logement-host">
            <h3 className="logement-host-name">{data.host.name}</h3>
            <img className="logement-host-img" alt={data.host.name} src={data.host.picture} />
          </div>
          <div className="logement-stars">
            {Array(Number(data.rating)).fill(0).map(() => (
              <i className="fa-solid fa-star logement-rating-stars-star-active" />
            ))}
            {Array(5 - Number(data.rating)).fill(0).map(() => (
              <i className="fa-solid fa-star logement-rating-stars-star" />
            ))}
          </div>
        </div>
      </div>
      <div className="logement-about">
        <div className="logement-about-description">
          <Dropdown title="Description" content={data.description} />
        </div>
        <div className="logement-about-equipments">
          <Dropdown title="Équipements" content={data.equipments} />
        </div>
      </div>
    </div>
  );
}
