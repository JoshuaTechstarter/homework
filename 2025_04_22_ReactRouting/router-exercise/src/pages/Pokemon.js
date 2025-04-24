import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import BackToTopButton from '../components/BackToTopButton';
import { Link } from "react-router-dom";


function Pokemon() {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 20;

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const data = await response.json();

            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    return await res.json();
                })
            );

            setPokemonList((prevList) => [...prevList, ...pokemonDetails]);
            setLoading(false);
        };

        if (!loading) {
            fetchPokemons();
        }
    }, [offset]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.scrollHeight;

            if (scrollTop + windowHeight >= fullHeight - 100) {
                setOffset((prev) => prev + limit);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <h1>PokéDex</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {pokemonList.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        pokemon={pokemon} />
                ))}
            </div>
            {loading && <p><strong>Pokémon werden geladen...</strong></p>}
            <BackToTopButton />
        </div>
    );
}

export default Pokemon;
