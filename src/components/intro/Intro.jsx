import React from "react";
import "./Intro.css";
import lab from "../../assets/doctor-working-in-laboratory-doing-research-with-microscope-2d-cartoon-animation-free-video.jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/4816904.webp";

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

                    <button class="button">
                        <svg
                            viewBox="0 0 16 16"
                            class="bi bi-lightning-charge-fill"
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
                <div className="intro-picture">
                    <img className="intro-logo" src={logo} alt="" />
                </div>
            </div>
        </>
    );
};

export default Intro;
