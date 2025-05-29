import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/layout/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AgentsPage from './pages/AgentsPage';
import PatternsPage from './pages/PatternsPage';
import ExamplesPage from './pages/ExamplesPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * App component
 * Main application component with routing
 * 
 * @returns {JSX.Element}
 */
const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/agents" element={<AgentsPage />} />
                        <Route path="/patterns" element={<PatternsPage />} />
                        <Route path="/examples" element={<ExamplesPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </MainLayout>
            </Router>
        </ThemeProvider>
    );
};

export default App;
