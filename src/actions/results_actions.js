

export const RECEIVE_RESULTS = 'RECEIVE_RESULTS'
export const REMOVE_RESULTS = 'REMOVE_RESULTS'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'

const receiveResults = (results) =>{
    return {
        type: RECEIVE_RESULTS,
        results
    }
}

export const removeResults = () => {
    return {
        type: REMOVE_RESULTS
    }
}

export const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

export const fetchResults = (entity) => dispatch => {
    debugger
    return fetch(`https://www.breakingbadapi.com/api/characters?name=${entity}`)
    .then((response) => response.json())
    .then((results) => dispatch(receiveResults(results)))
}

export const fetchAllUsers = () => dispatch => {
    debugger
    return fetch(`https://www.breakingbadapi.com/api/characters`)
    .then((response) => response.json())
    .then((users) => dispatch(receiveResults(users)))
}