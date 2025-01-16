import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Starship = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getStarship(params.uid);
    }, [actions, params.uid]);

    return (
        <div className="card mb-3 starship-card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`} 
                        className="img-fluid rounded-start starship-img" 
                        alt={`${store.starship?.properties?.name}`} 
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-primary">
                            {store.starship?.properties?.name || "Loading..."}
                        </h5>
                        <p className="card-text text-muted">
                            {store.starship?.description || "Description not available."}
                        </p>
                    </div>
                </div>
            </div>
            <div className="g-0 d-flex justify-content-around p-3 border-top starship-info">
                <div>
                    <strong>MGLT:</strong> {store.starship?.properties?.MGLT || "N/A"}
                </div>
                <div>
                    <strong>Cargo Capacity:</strong> {store.starship?.properties?.cargo_capacity || "N/A"}
                </div>
                <div>
                    <strong>Consumables:</strong> {store.starship?.properties?.consumables || "N/A"}
                </div>
                <div>
                    <strong>Crew:</strong> {store.starship?.properties?.crew || "N/A"}
                </div>
                <div>
                    <strong>Passengers:</strong> {store.starship?.properties?.passengers || "N/A"}
                </div>
            </div>
        </div>
    );
};
