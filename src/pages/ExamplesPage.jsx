import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import CodeBlock from '../components/common/CodeBlock';
import examplesData from '../data/examples.json';
import '../styles/pages/examples.css';

/**
 * ExamplesPage component
 * Displays interactive code examples for AI Agents
 * 
 * @returns {JSX.Element}
 */
const ExamplesPage = () => {
    const [activeExample, setActiveExample] = useState(examplesData.examples[0].id);
    const [filterTag, setFilterTag] = useState('');
    const [filterDifficulty, setFilterDifficulty] = useState('');
    const [filteredExamples, setFilteredExamples] = useState(examplesData.examples);

    // Get all unique tags from examples
    const allTags = [...new Set(examplesData.examples.flatMap(example => example.tags))];

    // Get all unique difficulty levels
    const allDifficulties = [...new Set(examplesData.examples.map(example => example.difficulty))];

    // Filter examples when filter criteria change
    useEffect(() => {
        let filtered = examplesData.examples;

        if (filterTag) {
            filtered = filtered.filter(example => example.tags.includes(filterTag));
        }

        if (filterDifficulty) {
            filtered = filtered.filter(example => example.difficulty === filterDifficulty);
        }

        setFilteredExamples(filtered);

        // If the active example is no longer in the filtered list, set the first filtered example as active
        if (filtered.length > 0 && !filtered.some(example => example.id === activeExample)) {
            setActiveExample(filtered[0].id);
        }
    }, [filterTag, filterDifficulty, activeExample]);

    // Get the currently active example
    const currentExample = examplesData.examples.find(example => example.id === activeExample);

    // Handle filter changes
    const handleTagFilter = (tag) => {
        setFilterTag(tag === filterTag ? '' : tag);
    };

    const handleDifficultyFilter = (difficulty) => {
        setFilterDifficulty(difficulty === filterDifficulty ? '' : difficulty);
    };

    // Clear all filters
    const clearFilters = () => {
        setFilterTag('');
        setFilterDifficulty('');
    };

    return (
        <div className="container">
            <div className="page-header">
                <h1>{examplesData.pageTitle}</h1>
                <p className="page-description">{examplesData.pageDescription}</p>
            </div>

            <div className="filters-section">
                <div className="filter-group">
                    <h3>Filter by Tag</h3>
                    <div className="tag-filters">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                className={`tag-filter ${filterTag === tag ? 'active' : ''}`}
                                onClick={() => handleTagFilter(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="filter-group">
                    <h3>Filter by Difficulty</h3>
                    <div className="difficulty-filters">
                        {allDifficulties.map(difficulty => (
                            <button
                                key={difficulty}
                                className={`difficulty-filter ${filterDifficulty === difficulty ? 'active' : ''} ${difficulty.toLowerCase()}`}
                                onClick={() => handleDifficultyFilter(difficulty)}
                            >
                                {difficulty}
                            </button>
                        ))}
                    </div>
                </div>

                {(filterTag || filterDifficulty) && (
                    <button className="clear-filters" onClick={clearFilters}>
                        Clear Filters
                    </button>
                )}
            </div>

            <div className="examples-container">
                <div className="examples-sidebar">
                    <h2>Examples</h2>
                    <ul className="examples-list">
                        {filteredExamples.map(example => (
                            <li
                                key={example.id}
                                className={activeExample === example.id ? 'active' : ''}
                            >
                                <button onClick={() => setActiveExample(example.id)}>
                                    <h3>{example.title}</h3>
                                    <div className="example-meta">
                                        <span className={`difficulty ${example.difficulty.toLowerCase()}`}>
                                            {example.difficulty}
                                        </span>
                                        <div className="tags">
                                            {example.tags.map(tag => (
                                                <span key={tag} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="example-content">
                    {currentExample ? (
                        <>
                            <div className="example-header">
                                <h2>{currentExample.title}</h2>
                                <div className="example-meta">
                                    <span className={`difficulty ${currentExample.difficulty.toLowerCase()}`}>
                                        {currentExample.difficulty}
                                    </span>
                                    <div className="tags">
                                        {currentExample.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="example-description">{currentExample.description}</p>

                            <div className="static-content-notice">
                                <h3>Static Code Example</h3>
                                <p>This is a static code example for reference purposes. For interactive code execution, please use a local Python environment with the required libraries installed.</p>
                            </div>

                            <div className="code-section">
                                <h3>Code Example</h3>
                                <CodeBlock
                                    code={currentExample.code.content}
                                    language={currentExample.code.language}
                                    lineNumbers={true}
                                />
                                <div className="code-explanation">
                                    <h3>Explanation</h3>
                                    <p>{currentExample.code.explanation}</p>
                                </div>
                            </div>

                            <div className="output-section">
                                <h3>Example Output</h3>
                                <CodeBlock
                                    code={currentExample.output.content}
                                    language="plaintext"
                                    lineNumbers={false}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="no-example">
                            <h2>No examples match your filters</h2>
                            <p>Try adjusting your filter criteria or <button onClick={clearFilters}>clear all filters</button>.</p>
                        </div>
                    )}
                </div>
            </div>

            <section className="related-resources">
                <h2>Related Resources</h2>
                <div className="grid">
                    <Card title="AI Agent Patterns" variant="primary">
                        <p>Explore common design patterns used in AI agent development.</p>
                        <Link to="/patterns" className="button fancy">
                            <span className="button-text">View Patterns</span>
                        </Link>
                    </Card>
                    <Card title="What are AI Agents?" variant="primary">
                        <p>Learn the fundamentals of AI agents and how they work.</p>
                        <Link to="/agents" className="button fancy">
                            <span className="button-text">Learn More</span>
                        </Link>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default ExamplesPage;
