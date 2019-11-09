import React from 'react';

export const Player = ({name, country}) => {
    return (
        <div>
            <h2>Name: {name} </h2>
            <h3>Country: {country} </h3>
        </div>
    )
}