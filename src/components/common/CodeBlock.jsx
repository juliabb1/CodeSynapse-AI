import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import '../../styles/components/code-block.css';

/**
 * CodeBlock component for displaying syntax-highlighted code
 * 
 * @param {Object} props Component props
 * @param {string} props.code The code to display
 * @param {string} props.language The programming language (python, javascript, etc.)
 * @param {boolean} props.lineNumbers Whether to show line numbers
 * @returns {JSX.Element}
 */
const CodeBlock = ({ code, language = 'python', lineNumbers = true }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Highlight code when component mounts or updates
        Prism.highlightAll();
    }, [code, language]);

    // Reset copied state after 2 seconds
    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
    };

    const className = `language-${language} ${lineNumbers ? 'line-numbers' : ''}`;

    return (
        <div className="code-block">
            <div className="code-header">
                <span className="language-label">{language}</span>
                <div className="code-actions">
                    <button
                        className={`copy-button ${copied ? 'copied' : ''}`}
                        onClick={handleCopy}
                        aria-label="Copy code to clipboard"
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <pre className={className}>
                <code className={`language-${language}`}>
                    {code}
                </code>
            </pre>
            <div className="code-footer">
                <p className="code-note">
                    <small>Note: This is a static code example for reference purposes only.</small>
                </p>
            </div>
        </div>
    );
};

export default CodeBlock;
