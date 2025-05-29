import React from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * ThemeToggle component
 * Toggles between dark and light themes
 * 
 * @returns {JSX.Element}
 */
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={`theme-toggle ${theme === 'light' ? 'light-active' : 'dark-active'}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <span className="toggle-icon">
                {theme === 'dark' ? '☀️' : '🌙'}
            </span>
            <span className="toggle-text">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
        </button>
    );
};

export default ThemeToggle;
