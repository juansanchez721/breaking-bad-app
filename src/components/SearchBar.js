import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchResults, fetchAllUsers, removeResults } from '../actions/results_actions'
import '../stylesheets/SearchBar.css'

function SearchBar( {fetchResults, removeResults, fetchAllUsers, results})  {

    const [userInput, setInput] = useState('')

    useEffect(() => {
        debugger
         if(userInput.length > 0)fetchResults(userInput)
        debugger
         if(userInput.length === 0) fetchAllUsers()
debugger
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
            <div className="text-above-items" >

            <h2>there are {results.length} noted characters</h2>
            </div>

            {/* <h1> {userInput} </h1> */}
        </div>
    )

}



const MSTP = (state) => {
    return {
        results: state.results
    }
}

const MDTP = (dispatch) => {
    debugger
    return {
        fetchResults: (entity) =>  dispatch(fetchResults(entity)),
        removeResults: () => dispatch(removeResults()),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
}

export default connect(MSTP, MDTP)(SearchBar);