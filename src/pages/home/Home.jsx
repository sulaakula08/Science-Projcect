import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home page-enter">
            <section className="hero-section">
                <h1 className="hero-title animate-fade-in">
                    Welcome to Science BC
                </h1>
                <p className="hero-subtitle animate-fade-in delay-1">
                    Explore the fascinating world of science through interactive
                    lessons, experiments, and real-world applications.
                </p>
                <Link
                    to="/tutorial"
                    className="cta-button animate-fade-in delay-2 hover-scale"
                >
                    Get Started
                </Link>
            </section>

            <section className="features-section">
                <h2 className="section-title animate-slide-in">
                    Why Choose Science BC?
                </h2>
                <div className="features-grid">
                    <div className="feature-card animate-scale-in delay-1 hover-lift">
                        <div className="feature-icon animate-rotate-in">📝</div>
                        <h3 className="feature-title">
                            Comprehensive Guide to Writing Lab Reports
                        </h3>
                        <p className="feature-description">
                            A useful source of information based on how to
                            correctly write Lab reports, with comprehensive
                            guides and best practices.
                        </p>
                    </div>
                    <div className="feature-card animate-scale-in delay-2 hover-lift">
                        <div className="feature-icon animate-rotate-in">🤖</div>
                        <h3 className="feature-title">
                            AI-Powered Lab Report Assistant
                        </h3>
                        <p className="feature-description">
                            There is trained AI for Lab reports that helps you
                            structure and improve your scientific documentation.
                        </p>
                    </div>
                    <div className="feature-card animate-scale-in delay-3 hover-lift">
                        <div className="feature-icon animate-rotate-in">💬</div>
                        <h3 className="feature-title">
                            Interactive Client Feedback & Collaboration Platform
                        </h3>
                        <p className="feature-description">
                            Clients have opportunity to leave their opinions on
                            an interactive platform, share experiences and
                            collaborate.
                        </p>
                    </div>
                </div>
            </section>

            <section className="strands-section">
                <h2 className="section-title animate-slide-in">
                    Criterions Descriptors
                </h2>
                <div className="strands-grid">
                    <div className="strand-card animate-fade-in delay-2 hover-lift">
                        <h3 className="strand-title">Criterion B</h3>
                        <p className="strand-description">
                            Explore the laws of physics that govern movement and
                            forces.
                        </p>
                        <Link
                            to="/criterionB"
                            className="strand-link hover-scale"
                        >
                            Learn More
                        </Link>
                    </div>
                    <div className="strand-card animate-fade-in delay-3 hover-lift">
                        <h3 className="strand-title">Criterion C </h3>
                        <p className="strand-description">
                            Journey through our planet and beyond into the
                            cosmos.
                        </p>
                        <Link
                            to="/criterionC"
                            className="strand-link hover-scale"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
