import React from 'react';

const Hijouno = (props) => {
    const { temperatura, pais, maxTemp, minTemp, humedad } = props
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{temperatura}</h5>
                    <p className="card-text">{pais}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{maxTemp}</li>
                    <li className="list-group-item">{minTemp}</li>
                    <li className="list-group-item">{humedad}</li>
                </ul>
                <div className="card-body">
                    <button className="card-link">Card link</button>
                    <button className="card-link">Another link</button>
                </div>
            </div>
        </div>
    );
}

export default Hijouno;
