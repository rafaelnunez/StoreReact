import { favoriteTypes } from '../types/favoriteTypes';

export const setFavorite = payload => ({
  type: favoriteTypes.setFavorite,
  payload,
});

export const deleteFavorite = payload => ({
  type: favoriteTypes.deleteFavorite,
  payload,
});

export const loginRequest = payload => ({
  type: favoriteTypes.loginRequest,
  payload,
});

export const logoutRequest = payload => ({
  type: favoriteTypes.logoutRequest,
  payload,
});

export const registerRequest = payload => ({
  type: favoriteTypes.registerRequest,
  payload,
});

export const getVideoSource = payload => ({
  type: favoriteTypes.getVideoSource,
  payload,
});
