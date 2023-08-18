import { combineReducers } from '@reduxjs/toolkit';
import favoriteCarsReducer from './favoriteCars/favoriteCars-slice';
const RootReducer = combineReducers({
  favoriteCars: favoriteCarsReducer,
});
export default RootReducer;
