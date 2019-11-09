import React from 'react';

export const Player = ({name, country}) => {
    return (
       // need to add className="cards" in this div//
        <div> 
            <h2>Name: {name} </h2>
            <h3>Country: {country} </h3>
        </div>
    )
}