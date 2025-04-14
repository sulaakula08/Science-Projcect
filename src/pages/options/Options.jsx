import React from "react";
import "./Options.css";
import Option from "../../components/option/Option";
import { Link } from "react-router-dom";

const Options = () => {
    return (
        <div className="page options">
            <h1>Choose a suitable Strand:</h1>
            <div className="options-grid">
                <Link to="/strand1" className="option-link">
                    <Option 
                        title="1 - Recording data"
                        description="Learn about scientific notation, significant figures, and units"
                    />
                </Link>

                <Link to="/strand2" className="option-link">
                    <Option
                        title="2 – Accuracy, errors and uncertainties"
                        description="Understand measurement accuracy, errors, and uncertainty calculations"
                    />
                </Link>

                <Link to="/strand3" className="option-link">
                    <Option
                        title="3 – Reliability and validity"
                        description="Explore data reliability, validity, and experimental design"
                    />
                </Link>

                <Link to="/strand4" className="option-link">
                    <Option
                        title="4 – Analysing data"
                        description="Master data analysis techniques and statistical methods"
                    />
                </Link>

                <Link to="/strand5" className="option-link">
                    <Option
                        title="5 – Using spreadsheets"
                        description="Learn effective spreadsheet usage for data management"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Options;
