import { createStore } from "@reduxjs/toolkit";
import rootReducer from './reducer.js'

const store = createStore(rootReducer)

export default store