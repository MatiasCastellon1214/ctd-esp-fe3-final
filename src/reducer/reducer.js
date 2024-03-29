export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LIST":
      return {...state, detailList: action.payload};
    case "GET_DETAIL":
      return {...state, detailSelected: action.payload};
    case "ADD_FAV":
      return {...state, favs: [...state.favs, action.payload]};
    case "DELETE_FAV":
      return {...state, favs: state.favs.filter(fav => fav.id !== action.payload)}
    case "CHANGE_THEME":
      return {...state, theme: action.payload};
  }
};
