import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import kasaLogo from '../assets/KasaLogo.svg';

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <Link className="header-logo" to="/">
        <img src={kasaLogo} className="header-logo-img" alt="Kasa Logo" />
      </Link>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-list-item">
            {location.pathname === '/' ? <Link className="header-nav-list-item-link active" to="/">Accueil</Link>
						  : <Link className="header-nav-list-item-link" to="/">Accueil</Link>}
          </li>
          <li className="header-nav-list-item">
            {location.pathname === '/about'
              ? <Link className="header-nav-list-item-link active" to="/about">A propos</Link>
						  : <Link className="header-nav-list-item-link" to="/about">A propos</Link>}
          </li>
        </ul>
      </nav>
    </header>
  );
}
