import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light px-4 shadow-sm">
      <Link to="/">
        <img 
          className="logostarwars navbar-logo" 
          src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" 
          alt="Star Wars Logo"
        />
      </Link>

      <div className="dropdown">
        <button 
          className="btn btn-primary dropdown-toggle d-flex align-items-center" 
          type="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
        >
          Favorites <span className="badge bg-secondary ms-2">{store.favorite.length || 0}</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end shadow">
          {store.favorite.length > 0 ? (
            store.favorite.map((item, index) => (
              <li 
                key={index} 
                className="dropdown-item d-flex justify-content-between align-items-center"
              >
                {item}
                <i 
                  className="fa fa-trash text-danger ms-3 delete-icon" 
                  onClick={() => actions.deleteFavorite(item)}
                ></i>
              </li>
            ))
          ) : (
            <li className="dropdown-item text-center text-muted">
              No favorites added
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
