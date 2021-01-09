import { combineReducers, createStore } from 'redux';
import progressReducer from './ducks/progress';

const reducer = combineReducers({
  progress: progressReducer
});

const store = createStore(reducer);

export default store;