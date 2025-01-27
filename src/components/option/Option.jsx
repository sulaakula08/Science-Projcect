import React from "react";
import "./Option.css";

const Option = ({ title, text }) => {
    return (
        <div className="option">
            <h1>{title}</h1>
            <p>{text}</p>
            <button>Open</button>
        </div>
    );
};

export default Option;
