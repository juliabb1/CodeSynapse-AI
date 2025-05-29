import React from 'react';
import '../../styles/components/terminal.css';

/**
 * TerminalWindow component
 * Displays content in a terminal-like window with a header and buttons
 * 
 * @param {Object} props
 * @param {string} props.title - Title to display in the terminal header
 * @param {React.ReactNode} props.children - Content to display in the terminal
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element}
 */
const TerminalWindow = ({ title, children, className = '' }) => {
    return (
        <div className={`terminal-window ${className}`}>
            <div className="terminal-header">
                <span className="terminal-button"></span>
                <span className="terminal-button"></span>
                <span className="terminal-button"></span>
                <span className="terminal-title">{title}</span>
            </div>
            <div className="terminal-content">
                {children}
            </div>
        </div>
    );
};

export default TerminalWindow;
