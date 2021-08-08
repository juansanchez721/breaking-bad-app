import React from 'react'

export const ResultItem = ({character}) => {




    return (
        <div className="result-item">
            <div className='result-item-img-holder'>

            <img src={character.img} />
            </div>
            <h1> {character.name} </h1>
        </div>
    )

}