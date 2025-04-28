import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home page-enter">
            <section className="hero-section">
                <h1 className="hero-title animate-fade-in">Welcome to Science BC</h1>
                <p className="hero-subtitle animate-fade-in delay-1">
                    Explore the fascinating world of science through interactive lessons, experiments, and real-world applications.
                </p>
                <Link to="/tutorial" className="cta-button animate-fade-in delay-2 hover-scale">
                    Get Started
                </Link>
            </section>

            <section className="features-section">
                <h2 className="section-title animate-slide-in">Why Choose Science BC?</h2>
                <div className="features-grid">
                    <div className="feature-card animate-scale-in delay-1 hover-lift">
                        <div className="feature-icon animate-rotate-in">📚</div>
                        <h3 className="feature-title">Interactive Learning</h3>
                        <p className="feature-description">
                            Engage with interactive content designed to make learning science fun and effective.
                        </p>
                    </div>
                    <div className="feature-card animate-scale-in delay-2 hover-lift">
                        <div className="feature-icon animate-rotate-in">🔬</div>
                        <h3 className="feature-title">Hands-on Experience</h3>
                        <p className="feature-description">
                            Practice with real-world examples and experiments to deepen your understanding.
                        </p>
                    </div>
                    <div className="feature-card animate-scale-in delay-3 hover-lift">
                        <div className="feature-icon animate-rotate-in">🎯</div>
                        <h3 className="feature-title">Track Progress</h3>
                        <p className="feature-description">
                            Monitor your learning journey with detailed progress tracking and assessments.
                        </p>
                    </div>
                </div>
            </section>

            <section className="strands-section">
                <h2 className="section-title animate-slide-in">Explore Science Strands</h2>
                <div className="strands-grid">
                    <div className="strand-card animate-fade-in delay-1 hover-lift">
                        <h3 className="strand-title">Matter and Energy</h3>
                        <p className="strand-description">
                            Discover the fundamental principles of matter and energy in our universe.
                        </p>
                        <Link to="/strand1" className="strand-link hover-scale">
                            Learn More
                        </Link>
                    </div>
                    <div className="strand-card animate-fade-in delay-2 hover-lift">
                        <h3 className="strand-title">Force and Motion</h3>
                        <p className="strand-description">
                            Explore the laws of physics that govern movement and forces.
                        </p>
                        <Link to="/strand2" className="strand-link hover-scale">
                            Learn More
                        </Link>
                    </div>
                    <div className="strand-card animate-fade-in delay-3 hover-lift">
                        <h3 className="strand-title">Earth and Space</h3>
                        <p className="strand-description">
                            Journey through our planet and beyond into the cosmos.
                        </p>
                        <Link to="/strand3" className="strand-link hover-scale">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
