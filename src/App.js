import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Comments from './pages/Comments';
import Contact from './pages/Contact';
import './App.css';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Router>
            <div className="App">
                <Header theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tutorial" element={<Tutorial />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 