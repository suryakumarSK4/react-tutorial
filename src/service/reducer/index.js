// This is ROOT reducer
// Combine all the reducer in single reducer

import { combineReducers } from "redux";
import cartItems from './Reducer'


export default combineReducers({
     cartItems
})