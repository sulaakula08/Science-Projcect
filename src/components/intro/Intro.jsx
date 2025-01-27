import React from "react";
import "./Intro.css";
import lab from "../../assets/doctor-working-in-laboratory-doing-research-with-microscope-2d-cartoon-animation-free-video.jpg";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <>
            <div className="intro">
                <div className="intro-text">
                    <h1>Having trouble with lab works?</h1>
                    <p>
                        This is for you! On this page, students will learn how
                        to write the first part of Criterion C, including table
                        and graph construction, uncertainty, data analysis, and
                        more! Watch and get an 8 out of 8!
                    </p>
                    <Link to="/options">
                        <button className="tutorial-btn ">Tutorial</button>
                    </Link>
                </div>
                <div className="intro-picture"></div>
            </div>
        </>
    );
};

export default Intro;
