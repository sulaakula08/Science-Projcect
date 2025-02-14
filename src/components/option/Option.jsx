import React from "react";
import "./Option.css";
import { Link } from "react-router";

const Option = ({ title, text }) => {
    return (
        <div class="card">
            {" "}
            <div className="option">
                <h1>{title}</h1>
                <p>{text}</p>
                <Link to="">
                    <button>Open</button>
                </Link>
            </div>
        </div>
    );
};

export default Option;
