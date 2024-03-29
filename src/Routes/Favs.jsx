import React from "react";
import Card from "../Components/Card";
import { useDetailState } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useDetailState();
  const {favs} = state;

  return (
    < >
      <div className={state.theme === 'dark' ? 'dark' : ''}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
          {favs.map(fav =>(
            <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favs;
