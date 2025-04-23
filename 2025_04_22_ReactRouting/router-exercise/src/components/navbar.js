import React from 'react'
import '../styles/navbar.css'
import { Link } from "react-router-dom";




function navbar() {
    return (
        <nav>
            <ul>
                <li><Link className="home" to="/">Home</Link></li>
                <li><Link className='patienten' to="patienten">Unsere Patienten</Link></li>
                <li><Link className='FAQ' to="FAQ">FAQ</Link></li>
                <li><Link className='pokemon' to="pokemon">Pokemon</Link></li>
                <li><Link className='contact' to="contact">Kontakt</Link></li>

            </ul></nav>
    );
}
export default navbar;