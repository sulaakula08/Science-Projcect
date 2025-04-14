import React from "react";
import "./Intro.css";

const Intro = () => {
    return (
        <>
            <div className="intro">
                <div className="intro-text">
                    <h1>
                        Having trouble with <span>Lab works?</span>
                    </h1>
                    <p>
                        This is for you! On this page, students will learn how
                        to write the first part of Criterion C, including table
                        and graph construction, uncertainty, data analysis, and
                        more! Watch and get an 8 out of 8!
                    </p>

                    <button className="button">
                        <svg
                            viewBox="0 0 16 16"
                            className="bi bi-lightning-charge-fill"
                            fill="currentColor"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
                        </svg>
                        Tutorial
                    </button>
                </div>

                <div className="intro-picture"></div>
            </div>
        </>
    );
};

export default Intro;
