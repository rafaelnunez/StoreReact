import { favoriteTypes } from '../types/favoriteTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case favoriteTypes.setFavorite:
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case favoriteTypes.deleteFavorite:
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    case favoriteTypes.loginRequest:
      return {
        ...state,
        user: action.payload,
      };
    case favoriteTypes.logoutRequest:
      return {
        ...state,
        user: action.payload,
      };
    case favoriteTypes.registerRequest:
      return {
        ...state,
        user: action.payload,
      };
    case favoriteTypes.getVideoSource:
      return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) ||
        state.originals.find(item => item.id === Number(action.payload)) ||
        []        
      };
    default:
      return state;
  }
};

export default reducer;
