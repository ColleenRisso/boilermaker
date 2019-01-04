import {combineReducers} from 'redux'
import firstReducer from './first';
import secondReducer from './second';

const rootReducer = combineReducers({
  firstState: firstReducer,
  secondState: secondReducer
})

export default rootReducer