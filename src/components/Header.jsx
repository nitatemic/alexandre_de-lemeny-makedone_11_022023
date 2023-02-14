import React from 'react';
import { useLocation } from 'react-router-dom';
import kasaLogo from '../assets/KasaLogo.svg';

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <a className="header-logo" href="#">
        <img src={kasaLogo} className="header-logo-img" alt="Kasa Logo" />
      </a>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-list-item">
            {location.pathname === '/' ? <a className="header-nav-list-item-link active" href="/">Accueil</a>
						  : <a className="header-nav-list-item-link" href="/">Accueil</a>}
          </li>
          <li className="header-nav-list-item">
            {location.pathname === '/about' ? <a className="header-nav-list-item-link active" href="/about">A propos</a>
						  : <a className="header-nav-list-item-link" href="/about">A propos</a>}
          </li>
        </ul>
      </nav>
    </header>
  );
}
