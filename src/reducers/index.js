import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import api from './api.reducer';
import app from './app.reducer';
import form from './form.reducer';

export const rootReducer = combineReducers({
  api,
  app,
  form,
  routing: routerReducer,
});
