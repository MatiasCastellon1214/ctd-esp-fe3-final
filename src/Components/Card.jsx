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
      dispatch({type: 'ADD_FAV', payload: {id, name, username}})  
    } else {
      dispatch({type: 'DELETE_FAV', payload: parseInt(id)});
    }
    
  }


  return (
    <div className={`card ${state.theme === 'dark' ? 'card-dark' : ''}`}>
        
        <Link to={'/detail/' + id}>
          <h3>{name}</h3>
          <h3>{username}</h3>
          <h3>Id: {id}</h3>
          <img src="/public/images/doctor.jpg" alt="" style={{width:'100%'}}/>
          
          <button onClick={addOrDeleteFav} className="favButton">
            {isFav ? '❌' : '⭐'}
          </button>
        </Link>
        
    </div>
  );
};

export default Card;
