import React from 'react'

export const ResultItem = ({character}) => {

    const userStatusSymbol = 
    character.status === 'Alive' 
    ? 
    <i className="fas fa-user-alt"></i> 
    : 
    <i className="fas fa-skull-crossbones"></i>


    return (
        <div className="result-item">
            <div className='result-item-img-holder'>

            <img src={character.img} />
            </div>
            <div className="character-sub-heading" >
                <div className="name" >
                <h1> {character.name.toUpperCase()} </h1>

                </div>
                <div className={`status ${character.status === "Alive" ? '' : 'deceased'}`}>

                {userStatusSymbol}
                <h2>{character.status.toUpperCase()}</h2>
                </div>
                {/* <br/> */}
            </div>
        </div>
    )

}