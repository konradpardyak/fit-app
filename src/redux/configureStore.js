import { combineReducers, createStore } from 'redux';
import progressReducer from './ducks/progress';
import planReducer from './ducks/plan';

const reducer = combineReducers({
  progress: progressReducer,
  plan : planReducer
});

const store = createStore(reducer);

export default store;