import React from 'react';
import Dropdown from './Dropdown.jsx';
import aboutIMG from '../assets/img/about.webp';

const dropdownFiabilité = {
  title: 'Fiabilité',
  content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
};

const dropdownRespect = {
  title: 'Respect',
  content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
};

const dropdownService = {
  title: 'Service',
  content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
};

const dropdownSécurité = {
  title: 'Sécurité',
  content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
};

/* Tableau contenant les objets définis ci-dessus */
const dropdowns = [dropdownFiabilité, dropdownRespect, dropdownService, dropdownSécurité];
export default function About() {
  return (
    <div>
      <div className="about-img">
        <img className="about-img-file" src={aboutIMG} alt="A landscape" />
      </div>
      <div className="about-content">
        {/* Pour chaque objet dans le tableau, on crée un composant Dropdown */}
        {dropdowns.map((dropdown) => (
          <Dropdown title={dropdown.title} content={dropdown.content} />
        ))}
      </div>
    </div>
  );
}
