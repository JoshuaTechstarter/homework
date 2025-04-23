import React from 'react'
import Listing from '../components/TierCard';
import { useState } from 'react'
import '../styles/patienten.css'

function Patienteliste() {
    const [anzahl, setAnzahl] = useState(1);
    const animals = [
        { Id: 1, name: "Rollo", art: "Katze", krankheit: "Fett", image: "https://www.hanse-haus.de/fileadmin/_processed_/8/b/csm_fertighaus-variant-25-192-hero_bc4464687c.jpg" },
        { Id: 2, name: "Hasso", art: "Hund", krankheit: "Guter-Junge-Syndrom", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp" },
        { Id: 3, name: "Koko", art: "Vogel", krankheit: "Höhenangst", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp" },
        { Id: 4, name: "Pupsmann", art: "Meerschwein", krankheit: "Glatze", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp" },
        { Id: 5, name: "Nemo", art: "Fisch", krankheit: "Seekrank", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp" },
        { Id: 6, name: "Roger", art: "Kaninchen", krankheit: "Leistenbruch", image: "https://www.tc.de/Resources/Public/_processed_/6/9/csm_ext-einfamilienhaus-flair-134-gardenview2-2024-01-31-131100-w1600-q70_acdd41d4ac.webp" },
    ]
    return (
        <div className="AnimalContainer">
            {animals.slice(0, anzahl).map((animal) =>
                <Listing key={animal.Id} name={animal.name} art={animal.art} krankheit={animal.krankheit} image={animal.image}> </Listing>
            )}
            <button onClick={() => setAnzahl(anzahl + 1)}>Mehr anzeigen</button>
        </div>
    );
}

export default Patienteliste