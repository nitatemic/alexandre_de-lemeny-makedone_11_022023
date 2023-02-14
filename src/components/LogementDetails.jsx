import { useParams } from 'react-router-dom';

export default function LogementDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Logement Details</h1>
      <p>{id}</p>
    </div>
  );
}
