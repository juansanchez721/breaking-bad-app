

export const RECEIVE_RESULTS = 'RECEIVE_RESULTS'

const receiveResults = (results) =>{
    return {
        type: RECEIVE_RESULTS,
        results
    }
}

export const fetchResults = (entity) => dispatch => {
    debugger
    return fetch(`https://www.breakingbadapi.com/api/characters?name=${entity}`)
    .then((response) => response.json())
    .then((results) => dispatch(receiveResults(results)))
}