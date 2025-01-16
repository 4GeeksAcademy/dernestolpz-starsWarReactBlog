import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Planet = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanet(params.uid);
    }, [actions, params.uid]);

    return (
        <div className="card mb-3 planet-card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} 
                        className="img-fluid rounded-start planet-img" 
                        alt={`${store.planet?.properties?.name}`} 
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-primary">
                            {store.planet?.properties?.name || "Loading..."}
                        </h5>
                        <p className="card-text text-muted">
                            {store.planet?.description || "Description not available."}
                        </p>
                    </div>
                </div>
            </div>
            <div className="g-0 d-flex justify-content-around p-3 border-top planet-info">
                <div>
                    <strong>Population:</strong> {store.planet?.properties?.population || "N/A"}
                </div>
                <div>
                    <strong>Diameter:</strong> {store.planet?.properties?.diameter || "N/A"}
                </div>
                <div>
                    <strong>Rotation Period:</strong> {store.planet?.properties?.rotation_period || "N/A"}
                </div>
                <div>
                    <strong>Orbital Period:</strong> {store.planet?.properties?.orbital_period || "N/A"}
                </div>
                <div>
                    <strong>Gravity:</strong> {store.planet?.properties?.gravity || "N/A"}
                </div>
            </div>
        </div>
    );
};
