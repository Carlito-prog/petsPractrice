import React from 'react';

const Pet = ({image, name, alt, breed, description}) => {
    return (
        <li>
            <img src={`${image}#=${name}`} alt={alt}/>
            <h3>{name}</h3>
            <p><span>Breed: </span>{breed}</p>
            <p><span>Description: </span>{description}</p>
            <ul class="buttons">
                <li class="btn edit"><a href="/edit">Change Info</a></li>
                <li class="btn delete"><a href="/delete">New Home</a></li>
            </ul>
        </li>
    )    
}

export default Pet