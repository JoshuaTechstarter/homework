import React, { useState } from 'react';
import '../styles/PokedexEntry.css';

function PokedexEntry({ pokemon }) {
    const [isShiny, setIsShiny] = useState(false);

    if (!pokemon) {
        return <p>Lade Pokémon-Daten...</p>;
    }

    const handleToggleSprite = () => {
        setIsShiny(!isShiny);
    };

    return (
        <div className="pokedex-container">
            <div className="pokedex-screen">
                <div className="pokedex-header">
                    <span className="pokedex-id">#{pokemon.id}</span>
                    <h2 className="pokemon-name">{pokemon.name.toUpperCase()}</h2>
                </div>

                <img
                    className="pokemon-sprite"
                    src={isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default}
                    alt={pokemon.name}
                />

                <div className="button-container">
                    <button className="cry-button" onClick={() => {
                        const audio = new Audio(pokemon.cries.latest);
                        audio.volume = 0.2;
                        audio.play()
                    }}>
                        <span>▶</span> Play Cry
                    </button>
                    <button className="sprite-toggle-button" onClick={handleToggleSprite}>
                        {isShiny ? 'Normal Sprite' : 'Shiny Sprite'}
                    </button>
                </div>

                <div className="pokemon-info">
                    <p><strong>Height:</strong> {pokemon.height}</p>
                    <p><strong>Weight:</strong> {pokemon.weight}</p>
                    <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
                </div>
            </div>
        </div>
    );
}

export default PokedexEntry;
