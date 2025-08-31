import React from "react";
import { Link } from "react-router-dom";
import "./AIButton.css";
import ailogo from "../../assets/artificial-intelligence_12475931.png";

const AIButton = () => {
    return (
        <Link to="/aikbot" className="aibtn" aria-label="Open AIKbot chat">
            <img src={ailogo} alt="AIKbot" />
        </Link>
    );
};

export default AIButton;
