import React, { useEffect } from "react";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
    actions.getVehicles();
    actions.getPlanets();
  }, [actions]);

  const renderSection = (title, data, type) => (
    <div className="section">
      <h1>{title}</h1>
      <div className="row flex-nowrap overflow-scroll">
        {data.map((item) => (
          <div className="col" key={item.uid}>
            <Card name={item.name} type={type} uid={item.uid} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mt-5">
      {renderSection("Characters", store.people, "characters")}
      {renderSection("Planets", store.planets, "planets")}
      {renderSection("Starships", store.starships, "starships")}
    </div>
  );
};
