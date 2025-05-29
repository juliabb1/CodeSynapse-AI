import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component
 * Displays footer information and links
 * 
 * @returns {JSX.Element}
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3><span className="terminal-prefix">&gt;</span> CodeSynapse</h3>
                        <p>Understanding AI Agents Through Code</p>
                    </div>

                    <div className="footer-section">
                        <h4>Navigation</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/agents">AI Agents</Link></li>
                            <li><Link to="/patterns">Design Patterns</Link></li>
                            <li><Link to="/examples">Code Examples</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul className="footer-links">
                            <li><a href="https://python.langchain.com/" target="_blank" rel="noopener noreferrer">LangChain</a></li>
                            <li><a href="https://github.com/langchain-ai/langgraph" target="_blank" rel="noopener noreferrer">LangGraph</a></li>
                            <li><a href="https://python.org" target="_blank" rel="noopener noreferrer">Python</a></li>
                            <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} CodeSynapse | Fully AI Generated via Claude Sonnet 3.7 | <span className="terminal-prefix">&gt;</span> Understanding AI Agents Through Code</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
