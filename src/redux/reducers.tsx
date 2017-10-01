import { combineReducers } from 'redux';
import {reducer as home } from '../containers/homepage/home.duck';

export const rootReducer = combineReducers({
  home,
});
