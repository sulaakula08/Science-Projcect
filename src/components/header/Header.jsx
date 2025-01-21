import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo_main.png";
import arrow from "../../assets/arrow-down-sign-to-navigate.png";
import { Link } from "react-router-dom";
import sun from "../../assets/sun-svgrepo-com (4).svg";
import moon from "../../assets/moon-svgrepo-com (1).svg";

const Header = ({ handleTheme, isDark }) => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <li className="dropdown">
                        Criterion C <img src={arrow} alt="" className="arrow" />
                        <ul className="dropdown-menu">
                            <Link to="excel">
                                <li>Excel Plan</li>
                            </Link>
                            <Link to="graph">
                                <li>Plotting the Graph</li>
                            </Link>
                            <Link>
                                <li>Tutorial</li>
                            </Link>
                        </ul>
                    </li>
                    <li>Contacts</li>
                    <li>Comments</li>
                    <button onClick={handleTheme} className="dark-btn">
                        <img
                            src={isDark ? moon : sun}
                            className="dark-theme-img"
                            alt=""
                        />
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
