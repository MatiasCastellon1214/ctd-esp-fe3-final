import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';
import { useDetailState } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useDetailState();
  
  return (
    <main className={state.theme === 'dark' ? 'dark' : ''} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.detailList.map(({name, username, id}) => <Card key={id} name={name} username={username} id= {id}/>)}
      </div>
    </main>
  )
} 

export default Home