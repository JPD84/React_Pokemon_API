import React from 'react';

const PokemonDetail = (props) =>{
    if(!props.pokemon)return null;
    return(
        <div>
            <h3>
                Name: {props.pokemon.name}
            </h3>
        </div>
    )
}

export default PokemonDetail;
