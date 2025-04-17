// DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import './darkmode.css';

const DarkModeToggle = ({ onToggle }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Toggle "dark" class auf dem <html>-Tag statt <body>
        document.documentElement.className = darkMode ? 'dark' : 'light';
        onToggle(darkMode);
    }, [darkMode, onToggle]);

    return (
        <button className="darkmode-button" onClick={() => setDarkMode(prev => !prev)}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
