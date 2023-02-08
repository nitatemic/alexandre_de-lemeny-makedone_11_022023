export default function Card() {

    return (
        <div className="card">
            <div className="card-content">
                <div className="card-content-img">
                    <img src="https://picsum.photos/340" alt="Image de la location" className="card-content-img-file"/>
                </div>
                <div className="card-content-container">
                    <h3 className="card-content-container-title">Titre de la location</h3>
                </div>
            </div>
        </div>
    )
}
