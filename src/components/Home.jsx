import TaglineBG from '../assets/img/TaglineBG.webp';
import Card from "./Card.jsx";

export default function Home() {
    return (
        <div className="home">
            <div className="home-tagline">
                <img className="home-tagline-img" src={TaglineBG} alt="Tagline Background"/>
                <div className="home-tagline-title">
                    <h1 className="home-tagline-title-text">Chez vous, partout et ailleurs</h1>
                </div>
            </div>
            <main className="home-main">
                <div className="home-main-content">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
            </main>
        </div>
    )
}
