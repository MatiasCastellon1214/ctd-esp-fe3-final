import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducer/reducer";
import axios from "axios";

export const initialState = {
  theme: "",
  detailList: [],
  detailSelected: {},
  favs:JSON.parse(localStorage.getItem('favs')) || []
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(()=>{
    
    axios(url)
    .then(res => dispatch({type: 'GET_LIST', payload: res.data}));
  }, []);

  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])
  
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useDetailState = () => useContext(ContextGlobal);
