import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchResults } from '../actions/results_actions'

function SearchBar( {fetchResults})  {

    const [userInput, setInput] = useState('')

    useEffect(() => {
        debugger
         if(userInput.length > 0)fetchResults(userInput)
        // return () => {
            // userInput
        // }
    }, [userInput])

    const update = (e) => {
        debugger
        // console.log(e.target.value)
        setInput( e.target.value)

    }

    return (
        <div>
            <h1>Search Character here
            </h1>
            <input type="text" onChange={update} />

            <h1> {userInput} </h1>
        </div>
    )

}



const MSTP = (state) => {
    return {
        // results: state.results
    }
}

const MDTP = (dispatch) => {
    debugger
    return {
        fetchResults: (entity) =>  dispatch(fetchResults(entity))
    }
}

export default connect(MSTP, MDTP)(SearchBar);