import { combineReducers } from 'redux';
import {reducer as home } from '../components/homepage/home.duck';

export const rootReducer = combineReducers({
  home,
});
