import { RECEIVE_RESULTS } from "../actions/results_actions";


export const resultsReducer = (state = {}, action) => {
debugger
    switch (action.type) {
        case RECEIVE_RESULTS:
            debugger
            return action.results
        default:
            return state;
    }


}