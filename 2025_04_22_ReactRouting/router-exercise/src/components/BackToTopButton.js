import React, { useState, useEffect } from 'react';
import '../styles/BackToTopButton.css';

function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true); // Button anzeigen wenn 100px gescrollt
            } else {
                setVisible(false); // Button ausblenden wenn weniger als 100px gescrollt
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`backToTop ${visible ? 'visible' : ''}`}  // Dynamische Klasse basierend auf 'visible'
            onClick={scrollToTop}
        >
            ↑ Nach oben
        </button>
    );
}

export default BackToTopButton;
