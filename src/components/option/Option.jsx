import React from "react";
import "./Option.css";

const Option = ({ title, description }) => {
    return (
        <div className="option">
            <h2 className="option-title">{title}</h2>
            {description && <p className="option-description">{description}</p>}
        </div>
    );
};

export default Option;
