import { combineReducers } from "redux";
import goalsReducer from './features/Goals/goalsSlice'

const rootReducer = combineReducers({
    goals: goalsReducer
})

export default rootReducer