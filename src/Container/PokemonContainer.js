import React from 'react';
import PokemonSelector from '../Components/PokemonSelector';
import PokemonDetail from '../Components/PokemonDetail';


class PokemonContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pokemons: [],
            selectedPokemon: null     
           };

           this.handlePokemonSelected = this.handlePokemonSelected.bind(this)
    }

    componentDidMount(){
        const url = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({pokemons: data.results}))
    }

    handlePokemonSelected(index){
        const pokemonSelector = this.state.pokemons[index];
        this.setState({selectedPokemon: pokemonSelector})
        const url = 'https://pokeapi.co/api/v2/pokemon/'+index+'/'
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({selectedPokemon: data}))
        

    }

    render(){
        return(
            <div>
                <h2>
                    Pokemon Container
                </h2>
                <PokemonSelector pokemons={this.state.pokemons}
                handleSelected={this.handlePokemonSelected} />
                <PokemonDetail pokemon={this.state.selectedPokemon} />

            </div>
        )
    }
}
export default PokemonContainer