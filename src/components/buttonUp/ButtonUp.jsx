import React from "react";
import "./ButtonUp.css";
import arrow from "../../assets/arrow-down-sign-to-navigate.png";

const ButtonUp = ({ handleClick }) => {
    return (
        <div className="button-up">
            <button>
                <img src={arrow} onClick={handleClick} alt="" />
            </button>
        </div>
    );
};

export default ButtonUp;
