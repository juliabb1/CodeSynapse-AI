import { useState, useCallback } from 'react';

/**
 * Custom hook for displaying Python code examples
 * 
 * Note: This hook no longer executes Python code and only displays code in a codeblock
 * 
 * @returns {Object} - Object containing state and functions
 * @property {boolean} isLoading - Always false (for backward compatibility)
 * @property {boolean} isReady - Always true (for backward compatibility)
 * @property {boolean} isExecuting - Always false (for backward compatibility)
 * @property {string} output - Static message about code execution being disabled
 * @property {Error|null} error - Always null (for backward compatibility)
 * @property {Function} executeCode - Function that displays a message about code execution being disabled
 * @property {Function} clearOutput - Function to clear the output
 */
const useCodeExecution = () => {
    const [output, setOutput] = useState('Code execution is disabled. Python code examples are for display purposes only.\n');

    // Mock execute function that doesn't actually execute code
    const executeCode = useCallback((code) => {
        setOutput('Code execution is disabled. Python code examples are for display purposes only.\n\n' +
            'The code you tried to run:\n\n' +
            code + '\n\n' +
            'To run this code, please copy it and use a local Python environment.');
    }, []);

    // Clear output
    const clearOutput = useCallback(() => {
        setOutput('Code execution is disabled. Python code examples are for display purposes only.\n');
    }, []);

    return {
        isLoading: false,
        isReady: true,
        isExecuting: false,
        output,
        error: null,
        executeCode,
        clearOutput,
    };
};

export default useCodeExecution;
