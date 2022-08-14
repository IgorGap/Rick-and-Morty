import { combineReducers } from 'redux';
import favorReducer from './favor';
import heroReducer from './hero';

const rootReducer = combineReducers({
  hereos: heroReducer,
  favor: favorReducer,
});
export default rootReducer;
