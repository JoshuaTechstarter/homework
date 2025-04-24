import React from 'react';
import '../styles/PokemonCard.css';
import { Link } from 'react-router-dom'

const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};


function PokemonCard({ pokemon }) {
    const primaryType = pokemon.types[0].type.name;
    const backgroundColor = typeColors[primaryType] || '#777';

    return (
        <Link style={{ textDecoration: "none" }} to={`/pokedex/${pokemon.id}`}>
            <div className="pokemon-card" style={{ borderColor: backgroundColor }}>
                <div className="card-header" style={{ backgroundColor }}>
                    <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                </div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className="card-body">
                    <p>Type: {pokemon.types.map(t => t.type.name).join(', ')}</p>
                </div>
            </div>
        </Link>
    );
}

export default PokemonCard;