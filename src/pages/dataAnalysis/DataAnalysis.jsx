import React from "react";
import "./DataAnalysis.css";

const DataAnalysis = () => {
    return (
        <div className="data-analysis-container">
            <h1>Data Analysis</h1>
            <p>
                This page doesn't work completely yet. Other feautures will be
                added later. 🚧
            </p>

            <div className="container-video">
                <div className="video1">
                    <h2>Video N1</h2>
                    <iframe
                        width="360"
                        height="180"
                        src="https://www.youtube.com/embed/vrl1kZl7Th4"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
                <div className="video2">
                    <h2>Video N2</h2>
                    <iframe
                        width="360"
                        height="180"
                        src="https://www.youtube.com/embed/wEQmmC_yqJE"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default DataAnalysis;
