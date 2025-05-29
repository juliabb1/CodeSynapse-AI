import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../../styles/components/navigation.css';

/**
 * Header component
 * Main navigation header with logo, navigation links, and theme toggle
 * 
 * @returns {JSX.Element}
 */
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll event to add shadow to header when scrolled
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="main-nav">
                    <Link to="/" className="nav-logo">
                        <h1><span className="terminal-prefix">&gt;</span> CodeSynapse</h1>
                    </Link>

                    <button
                        className="mobile-nav-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                    >
                        ☰
                    </button>

                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/agents">AI Agents</Link></li>
                        <li><Link to="/patterns">Design Patterns</Link></li>
                        <li><Link to="/examples">Code Examples</Link></li>
                    </ul>

                    <ThemeToggle />
                </nav>
            </div>

            {/* Mobile sidebar navigation */}
            <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Menu</h2>
                    <button
                        className="sidebar-close"
                        onClick={toggleMobileMenu}
                        aria-label="Close navigation menu"
                    >
                        ×
                    </button>
                </div>

                <ul className="sidebar-nav">
                    <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
                    <li><Link to="/agents" onClick={toggleMobileMenu}>AI Agents</Link></li>
                    <li><Link to="/patterns" onClick={toggleMobileMenu}>Design Patterns</Link></li>
                    <li><Link to="/examples" onClick={toggleMobileMenu}>Code Examples</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
