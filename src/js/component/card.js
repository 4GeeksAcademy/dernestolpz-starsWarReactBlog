import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Card = ({ name, uid, type }) => {
  const { store, actions } = useContext(Context);

  
  const getImageUrl = (uid, type) => {
    return uid && type
      ? `https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`
      : "https://via.placeholder.com/300x180?text=No+Image";
  };

  const imageUrl = getImageUrl(uid, type);

  return (
    <div className="card shadow-lg futuristic-card">
      <div className="card-img-container">
        <img
          src={imageUrl}
          alt={name || "Unknown"}
          className="card-img-top futuristic-img"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-truncate futuristic-title">
          {name || "Unknown"}
        </h5>
        <p className="card-text text-muted futuristic-text">
          {type ? `Type: ${type.charAt(0).toUpperCase() + type.slice(1)}` : "Type unavailable"}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <a
            href={`/views/${type}/${uid}`}
            className="btn futuristic-btn learn-more-btn"
          >
            Learn more!
          </a>
          <button
            className="btn futuristic-btn-outline favorite-btn"
            onClick={() => actions.addFavorite(name)}
          >
            <i className="fa fa-heart futuristic-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};


