import kasaLogo from '../assets/KasaLogo.svg';

export default function Header() {
    return (
        <header className="header">
            <a className="header-logo" href="#">
                <img src={kasaLogo} className="header-logo-img" alt="Kasa Logo"/>
            </a>

            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-list-item">
                        <a className="header-nav-list-item-link active" href="#">Accueil</a>
                    </li>
                    <li className="header-nav-list-item">
                        <a className="header-nav-list-item-link" href="#">A propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
