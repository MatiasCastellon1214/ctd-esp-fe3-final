import React from "react";
import { Link } from "react-router-dom";
import { useDetailState} from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const {state, dispatch} = useDetailState();
  const {favs} = state;
  const isFav = favs.some((fav) =>  parseInt(fav.id) === parseInt(id));

  const addOrDeleteFav = (e)=>{
    e.preventDefault();
    if(!isFav){
      // Aqui iria la logica para agregar la Card en el localStorage
      dispatch({type: 'ADD_FAV', payload: {id, name, username}})  
    } else {
      dispatch({type: 'DELETE_FAV', payload: parseInt(id)});
    }
    
  }


  return (
    <div className={`card ${state.theme === 'dark' ? 'card-dark' : ''}`}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={'/detail/' + id}>
          <h3>{name}</h3>
          <h3>{username}</h3>
          <h3>Id: {id}</h3>
          <img src="/public/images/doctor.jpg" alt="" style={{width:'100%'}}/>
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addOrDeleteFav} className="favButton">
            {isFav ? '❌' : '⭐'}
          </button>
        </Link>
        
    </div>
  );
};

export default Card;
