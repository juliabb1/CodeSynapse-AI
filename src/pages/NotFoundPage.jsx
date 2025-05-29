import React from 'react';
import { Link } from 'react-router-dom';
import TerminalWindow from '../components/common/TerminalWindow';

/**
 * NotFoundPage component
 * Displayed when a user navigates to a non-existent route
 * 
 * @returns {JSX.Element}
 */
const NotFoundPage = () => {
    return (
        <div className="container">
            <div className="not-found-page">
                <TerminalWindow title="Error 404">
                    <div className="terminal-content">
                        <div className="error-code">404</div>
                        <div className="error-message">
                            <span className="terminal-prefix">&gt;</span> Page not found
                        </div>
                        <div className="error-details">
                            The requested URL was not found on this server.
                        </div>
                        <div className="terminal-command">
                            <span className="terminal-prefix">&gt;</span> cd /home
                        </div>
                    </div>
                </TerminalWindow>

                <div className="not-found-actions">
                    <h2>Lost in the code?</h2>
                    <p>The page you're looking for doesn't exist or has been moved.</p>
                    <Link to="/" className="button primary">Return to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
