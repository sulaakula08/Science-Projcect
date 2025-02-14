import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo_main.png";
import dark_arrow from "../../assets/arrow-down-sign-to-navigate.png";
import light_arrow from "../../assets/arrow-down-sign-to-navigate (3).png";
import { Link } from "react-router-dom";
import sun from "../../assets/sun-svgrepo-com (4).svg";
import moon from "../../assets/moon-svgrepo-com (1).svg";

const Header = ({ handleTheme, isDark }) => {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick((prev) => !prev);
    };

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
                    <li className="dropdown" onClick={handleClick}>
                        Data Collection
                        <img
                            src={isDark ? dark_arrow : light_arrow}
                            alt=""
                            className="arrow"
                        />
                        <ul
                            className={`dropdown-menu ${isClick ? "show" : ""}`}
                        >
                            <Link to="excel">
                                <li>Excel Plan</li>
                            </Link>
                            <Link to="graph">
                                <li>Plotting the Graph</li>
                            </Link>
                            <Link to="/options">
                                <li>Tutorial</li>
                            </Link>
                        </ul>
                    </li>
                    <li>Data Analysis</li>
                    <li>Contacts</li>
                    <li>Comments</li>

                    <label class="switch">
                        <input type="checkbox" onClick={handleTheme} />
                        <span class="slider"></span>
                    </label>
                </ul>
            </div>
        </div>
    );
};

export default Header;
