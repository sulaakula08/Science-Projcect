import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import dark_arrow from "../../assets/arrow-down-sign-to-navigate.png";
import light_arrow from "../../assets/arrow-down-sign-to-navigate (3).png";

const Header = ({ handleTheme, isDark }) => {
    const [isClick, setIsClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Scroll event optimization
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // Close dropdown when clicking outside or changing routes
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest(".dropdown")) {
                setIsClick(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    // Close dropdown when route changes
    useEffect(() => {
        setIsClick(false);
    }, [location]);

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li
                            className={`dropdown ${isClick ? "active" : ""}`}
                            onClick={() => setIsClick(!isClick)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setIsClick(!isClick);
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-expanded={isClick}
                            aria-haspopup="true"
                        >
                            <span className="dropdown-toggle">
                                Data Collection
                                <img
                                    src={isDark ? light_arrow : dark_arrow}
                                    alt=""
                                    className={`arrow ${isClick ? "rotated" : ""}`}
                                    aria-hidden="true"
                                />
                            </span>
                            <ul
                                className={`dropdown-menu ${isClick ? "show" : ""}`}
                                role="menu"
                            >
                                <li>
                                    <Link to="/excel" className="nav-link">
                                        Excel Plan
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/graph" className="nav-link">
                                        Plotting the Graph
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/options" className="nav-link">
                                        Tutorial
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/analysis" className="nav-link">
                                Data Analysis
                            </Link>
                        </li>

                        <li>
                            <Link to="/comments" className="nav-link">
                                Comments
                            </Link>
                        </li>
                        <li>
                            <label className="switch" htmlFor="themeToggle">
                                <input
                                    id="themeToggle"
                                    type="checkbox"
                                    onChange={handleTheme}
                                    checked={isDark}
                                    aria-label="Toggle dark mode"
                                />
                                <span className="slider"></span>
                            </label>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
