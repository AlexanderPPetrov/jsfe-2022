import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function setListView(value) {
    return {
        type: actionTypes.SET_LIST_VIEW,
        payload: value,
    }
}

export function setMovies(value) {
    return {
        type: actionTypes.SET_MOVIES,
        payload: value,
    }
}

export function getMovies(path, params) {
    return async (dispatch) => {
        try {
            axios.get(`${constants.baseUrl}${path}` , {
                params: {...params, api_key: constants.apiKey}
            })
            .then(response => {
                dispatch(setMovies(response.data.results));
            })
        } catch (error){
            console.log(error);
        }
    }
}