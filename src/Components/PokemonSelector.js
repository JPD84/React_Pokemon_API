import React from 'react';

const PokemonSelector = (props) =>{

    const options = props.pokemons.map((pokemon, index)=>{
        return <option value={index+1} key={index}>{pokemon.name}</option>
    })

    function handleChange(event){
        props.handleSelected(event.target.value);

    }

    return(
        <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a pokemon</option>
        {options}
        </select>
    )
}

export default PokemonSelector;