import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDetailState } from '../Components/utils/global.context';


const Detail = () => {
   
  const params = useParams()
  
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  const {state, dispatch} = useDetailState();
  const {detailSelected, favs} = state;
  const {id} = useParams();
  const isFav = favs.some((fav) =>  parseInt(fav.id) === parseInt(id));
  
  useEffect(()=>{
    axios(url)
    .then(res => dispatch({type: 'GET_DETAIL', payload: res.data}))
    
  }, [id, dispatch])
  
  const addOrDeleteFav = (e)=>{
    e.preventDefault();
    if(!isFav){
      dispatch({type: 'ADD_FAV', payload: detailSelected})  
    } else {
      dispatch({type: 'DELETE_FAV', payload: parseInt(id)});
    }
    
  }
  
  return (
    <>
      <h1>Detail Dentist id </h1>
      <div>
        <h2>{detailSelected.name}</h2>
        <h3>Email: {detailSelected.email}</h3>
        <h3>Phone: {detailSelected.phone}</h3>
        <h3>Website: {detailSelected.website}</h3>
        <button onClick={(addOrDeleteFav)}>
        {isFav ? '❌' : '⭐'}
        </button>
      </div>
    </>
  )
}

export default Detail