import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PokedexEntry from '../components/PokedexEntry';

function Pokedex() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        async function fetchPokemon() {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            setPokemon(data);
        }

        fetchPokemon();
    }, [id]);

    if (!pokemon) {
        return <p></p>
    }


    return (
        <div>
            <PokedexEntry pokemon={pokemon} />
        </div>
    )
}

export default Pokedex