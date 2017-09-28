import {
  createReducer,
  createActions, } from 'reduxsauce';
import * as Im from 'seamless-immutable';
var Immutable = require('seamless-immutable').static;

interface ActionCreators {
  testRedux?: any;
}

// --------- DEFAULT STATE --------------- //
export const INITIAL_STATE = Immutable.from({
  test: 'one'
});

// ----------------- ACTIONS AND TYPES --------------- //
const actionsTypes = {
  // ! TEST_REDUX and testRedux() action creator
  testRedux: ['test']
};

const { Types, Creators } = createActions(actionsTypes);

// --------------- REDUCERS ---------------- //
export const tst = (state = INITIAL_STATE): Im.ImmutableObject<any> => {
  return Immutable.merge(state, { test: 'two' });
};

export const HANDLERS = {
  [Types.TEST_REDUX]: tst,
};

export const CREATORS: ActionCreators = Creators;
export const TYPES = Types;
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
