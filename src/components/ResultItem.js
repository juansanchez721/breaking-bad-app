import React from 'react'

export const ResultItem = ({character}) => {




    return (
        <div class="result-item">
            <img src={character.img} />
            <h1> {character.name} </h1>
        </div>
    )

}