import { createStore } from 'redux';
import rootReducer from './rootReducers';

// Redux DevTools Extension for Chrome and Firefox
const reduxDevTool = () => {
    return (typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;
};


export default function configureStore(initialState = {}) {
  return createStore(rootReducer, reduxDevTool());
}