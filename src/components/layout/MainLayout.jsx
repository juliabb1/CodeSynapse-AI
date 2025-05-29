import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../styles/global.css';
import '../../styles/components/footer.css';

/**
 * MainLayout component
 * Wraps the application with header, footer, and handles scroll progress
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to display
 * @returns {JSX.Element}
 */
const MainLayout = ({ children }) => {
    const location = useLocation();
    const [scrollProgress, setScrollProgress] = useState(0);

    // Reset scroll position when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Handle scroll progress
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Scroll progress indicator */}
            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>

            <Header />

            <main>
                {children}
            </main>

            <Footer />
        </>
    );
};

export default MainLayout;
