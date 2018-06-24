import { combineReducers } from 'redux';
import sampleReducer from './sample-feature/reducer';

const rootReducer = combineReducers({
  sampleReducer,
});

export default rootReducer;
