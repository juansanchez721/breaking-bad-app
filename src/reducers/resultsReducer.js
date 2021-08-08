import { bindActionCreators } from "redux";
import { RECEIVE_RESULTS, REMOVE_RESULTS, RECEIVE_ALL_USERS } from "../actions/results_actions";


export const resultsReducer = (state = {}, action) => {
debugger
    switch (action.type) {
        case RECEIVE_RESULTS:
            debugger
            return action.results
        case RECEIVE_ALL_USERS:
            debugger
            return action.users
        case REMOVE_RESULTS:
            return {}
        default:
            return state;
    }


}