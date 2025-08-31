import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AIButton.css";
import ailogo from "../../assets/artificial-intelligence_12475931.png";

const AIButton = () => {
    const [showFloatingText, setShowFloatingText] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);

    // Start the cycle when component mounts
    useEffect(() => {
        if (!hasClicked) {
            const startCycle = () => {
                setShowFloatingText(true);
                
                // Hide after 2.5 seconds
                setTimeout(() => {
                    setShowFloatingText(false);
                    
                    // Show again after 1.5 seconds (total cycle: 4 seconds)
                    if (!hasClicked) {
                        setTimeout(() => {
                            if (!hasClicked) {
                                startCycle(); // Continue the cycle
                            }
                        }, 1500);
                    }
                }, 2500);
            };
            
            startCycle();
        }
    }, [hasClicked]);

    const handleClick = () => {
        setHasClicked(true);
        setShowFloatingText(false); // Stop the cycle immediately
    };

    return (
        <>
            <Link 
                to="/aikbot" 
                className="aibtn" 
                aria-label="Open AIKbot chat"
                onClick={handleClick}
            >
                <img src={ailogo} alt="AIKbot" />
            </Link>
            
            {showFloatingText && (
                <div className="floating-text">
                    <span>✨ Experience AI Magic ✨</span>
                </div>
            )}
        </>
    );
};

export default AIButton;
