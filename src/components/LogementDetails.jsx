import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';

export default function LogementDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/logements.json');
      const logements = await response.json();
      const logement = logements.find((element) => element.id === id);
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
      <p>{id}</p>
    </div>
  );
}
