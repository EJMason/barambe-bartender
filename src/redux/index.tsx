import {
  applyMiddleware,
  createStore,
} from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './reducers';

/**
 *
 * @param initialState
 */
export const configureStore = (initialState?: any): Redux.Store<any> => {
  const middlewares: Redux.Middleware[] = [];

  if (process.env.NODE_ENV === 'development') {
    // Redux logger to see actions in development
    middlewares.push(logger);
  }

  return createStore(
    rootReducer,
    {},
    applyMiddleware(...middlewares)
  );
};
