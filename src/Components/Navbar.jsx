import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {routes} from './utils/routes';
import { useDetailState } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useDetailState();

  const changeTheme = ()=>{
    const newTheme = state.theme === 'dark' ? '' : 'dark';
    dispatch({type: 'CHANGE_THEME', payload: newTheme})
  }

  return (
    <nav className={state.theme === 'dark' ? 'nav-dark' : ''}>
      
      <img src='../../public/DH.ico' alt="" style={{width:'30px', height:'auto'}}/>
      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <Link to={routes.home}>
          Home
        </Link>
        <Link to={routes.contact}>
          Contact
        </Link>
        <Link to={routes.favs}>
          Favs
        </Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={changeTheme} className='themeButton'>
          {state.theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar