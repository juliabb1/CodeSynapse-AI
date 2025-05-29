import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import TerminalWindow from '../components/common/TerminalWindow';
import CodeBlock from '../components/common/CodeBlock';
import '../styles/pages/home.css';

/**
 * HomePage component
 * Landing page of the application
 * 
 * @returns {JSX.Element}
 */
const HomePage = () => {
    // Sample Python code for LangChain
    const sampleCode = `from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

# Initialize the LLM
llm = OpenAI(temperature=0.7)

# Create a prompt template
prompt = PromptTemplate(
    input_variables=["topic"],
    template="Write a short introduction about {topic}."
)

# Create a chain
chain = LLMChain(llm=llm, prompt=prompt)

# Run the chain
result = chain.run(topic="AI Agents")
print(result)`;

    return (
        <div className="container">
            <section className="hero">
                <div className="hero-content">
                    <h2>Understanding AI Agents Through Code</h2>
                    <p className="hero-description">
                        Explore the world of AI Agents with interactive code examples, design patterns, and practical implementations using LangChain, LangGraph, and Python.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/agents" className="button primary">Explore AI Agents</Link>
                        <Link to="/examples" className="button primary">View Code Examples</Link>
                    </div>
                </div>
                <div className="hero-terminal">
                    <TerminalWindow title="AI Agent Example">
                        <CodeBlock
                            code={sampleCode}
                            language="python"
                            executable={false}
                        />
                    </TerminalWindow>
                </div>
            </section>

            <section className="features">
                <h2>What You'll Learn</h2>
                <div className="grid">
                    <Card
                        title="AI Agents Fundamentals"
                        variant="primary"
                        image="/images/ai_agents.png"
                    >
                        <p>Understand what AI Agents are, how they work, and why they're revolutionizing software development.</p>
                    </Card>

                    <Card
                        title="Design Patterns"
                        variant="primary"
                        image="/images/design_patterns.png"
                    >
                        <p>Learn common design patterns for building effective AI Agents with LangChain and LangGraph.</p>
                    </Card>


                    <Card
                        title="Practical Applications"
                        variant="primary"
                        image="/images/practical_applications.png"
                    >
                        <p>Discover practical applications and use cases for AI Agents in various domains.</p>
                    </Card>
                </div>
            </section>

            <section className="getting-started">
                <h2>Getting Started</h2>
                <div className="steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Explore AI Agents</h3>
                        <p>Learn the fundamentals of AI Agents and how they're changing software development.</p>
                        <Link to="/agents" className="button small">Start Learning</Link>
                    </div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Study Design Patterns</h3>
                        <p>Understand common patterns and architectures for building effective AI Agents.</p>
                        <Link to="/patterns" className="button small">View Patterns</Link>
                    </div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Try Code Examples</h3>
                        <p>Experiment with interactive code examples to see AI Agents in action.</p>
                        <Link to="/examples" className="button small">See Examples</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
