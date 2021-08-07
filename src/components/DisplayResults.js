import React, { useState } from 'react'
import { connect } from 'react-redux'
import  {ResultItem}  from './ResultItem'
export const DisplayResults = ({results}) => {

    debugger
    if(results) console.log(results.length)
    let list = !results.length ? null : results.map((char) => {
        return <ResultItem character={char} />
    })

    return (<div className="results-container" >
        {list}
    </div>
    )
}



const MSTP = (state) => {
    debugger
    return {
        results: state.results
    }
}

const MDTP = (dispatch) => {
    
    return {

    }
}

export default connect(MSTP, MDTP) (DisplayResults);