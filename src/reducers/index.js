import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import api from './api.reducer';
import app from './app.reducer';

export const rootReducer = combineReducers({
  // api,
  app,
  routing: routerReducer,
});
