import React from "react";
import "./Options.css";
import Option from "../../components/option/Option";

const Options = () => {
    return (
        <div className="options">
            <h1>Choose a suitable Strand:</h1>
            <Option title="Recording data"></Option>
            <Option
                title="2 – Accuracy, errors and uncertainties 7
"
            ></Option>

            <Option
                title="3 – Reliability and validity 15
"
            ></Option>

            <Option
                title="4 – Analysing data 17
"
            ></Option>
            <Option
                title="5 – Using spreadsheets 21
"
            ></Option>
        </div>
    );
};

export default Options;
