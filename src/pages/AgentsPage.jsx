import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import CodeBlock from '../components/common/CodeBlock';
import agentsData from '../data/agents.json';
import '../styles/pages/agents.css';

/**
 * AgentsPage component
 * Displays information about AI Agents
 * 
 * @returns {JSX.Element}
 */
const AgentsPage = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(false);
    const isNavigatingRef = useRef(false);

    // Scroll to section when activeSection changes
    useEffect(() => {
        const element = document.getElementById(activeSection);
        if (element) {
            isNavigatingRef.current = true;
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Reset navigation flag after scroll completes
            setTimeout(() => {
                isNavigatingRef.current = false;
            }, 1000);
        }
    }, [activeSection]);

    // Update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            // Don't update active section if we're currently navigating
            if (isNavigatingRef.current) return;

            const sections = agentsData.sections.map(section => section.id);

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle table of contents on mobile
    const toggleTableOfContents = () => {
        setIsTableOfContentsOpen(!isTableOfContentsOpen);
    };

    // Handle navigation to section
    const navigateToSection = (sectionId) => {
        setActiveSection(sectionId);
        setIsTableOfContentsOpen(false);
        console.log(`Navigating to section: ${sectionId}`);
    };

    // Render subsections
    const renderSubsections = (subsections, sectionId) => {
        if (!subsections) return null;

        return (
            <div className="subsections">
                {subsections.map((subsection, index) => (
                    <div key={index} className="subsection" id={`${sectionId}-sub-${index}`}>
                        <h3>{subsection.title}</h3>
                        <p>{subsection.content}</p>
                        {subsection.image && (
                            <img
                                src={subsection.image}
                                alt={subsection.imageAlt || subsection.title}
                                className="subsection-image"
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    };

    // Render code example as static content
    const renderCodeExample = (codeExample) => {
        if (!codeExample) return null;

        return (
            <div className="code-example">
                <h3>{codeExample.title}</h3>
                <CodeBlock
                    code={codeExample.code}
                    language={codeExample.language}
                    lineNumbers={true}
                />
                <div className="code-explanation">
                    <p>{codeExample.explanation}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <div className="page-header">
                <h1>{agentsData.pageTitle}</h1>
                <p className="page-description">{agentsData.pageDescription}</p>
                <button
                    className="toc-toggle"
                    onClick={toggleTableOfContents}
                    aria-label="Toggle table of contents"
                >
                    Table of Contents
                </button>
            </div>

            <div className="content-with-sidebar">
                {/* Sidebar / Table of Contents */}
                <aside className={`sidebar-toc ${isTableOfContentsOpen ? 'open' : ''}`}>
                    <div className="toc-header">
                        <h2>Table of Contents</h2>
                        <button
                            className="toc-close"
                            onClick={toggleTableOfContents}
                            aria-label="Close table of contents"
                        >
                            ×
                        </button>
                    </div>

                    <nav className="toc-nav">
                        <ul>
                            {agentsData.sections.map(section => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        className={activeSection === section.id ? 'active' : ''}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigateToSection(section.id);
                                        }}
                                    >
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main content */}
                <main className="main-content">
                    {agentsData.sections.map(section => (
                        <section key={section.id} id={section.id} className="content-section">
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                            {section.image && (
                                <img
                                    src={section.image}
                                    alt={section.imageAlt || section.title}
                                    className="section-image"
                                />
                            )}

                            {renderSubsections(section.subsections, section.id)}
                            {section.id === 'implementation' ?
                                <div className="static-content-notice">
                                    <h3>Code Example</h3>
                                    <p>This is a static code example for reference purposes. For interactive code execution, please use a local Python environment with the required libraries installed.</p>
                                </div> : null
                            }
                            {renderCodeExample(section.codeExample)}
                        </section>
                    ))}

                    {/* Related links */}
                    <section className="related-links">
                        <h2>Related Resources</h2>
                        <div className="grid">
                            {agentsData.relatedLinks.map((link, index) => (
                                <Card
                                    key={index}
                                    title={link.title}
                                    variant={link.variant || 'primary'}>
                                    <p>{link.description}</p>
                                    <Link to={link.url} className="button fancy">
                                        <span className="button-text">{link.title}</span>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default AgentsPage;