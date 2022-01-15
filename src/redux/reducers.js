import actionTypes from "./action-types";
import {combineReducers} from "redux";

export function listView(state = true, action) {
    switch (action.type) {
      case actionTypes.SET_LIST_VIEW:
        return action.payload;
      default:
        return state
    }
}

export function movies(state = [], action) {
    switch (action.type) {
      case actionTypes.SET_MOVIES:
        return [...action.payload];
      default:
        return state
    }
}

export default combineReducers({ listView, movies })