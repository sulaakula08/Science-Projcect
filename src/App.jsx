import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Excel from "./pages/excel/Excel";
import PlottingGraph from "./pages/plottingGraph/PlottingGraph";
import Home from "./pages/home/Home";
import ButtonUp from "./components/buttonUp/ButtonUp";
import { useState } from "react";
import Options from "./pages/options/Options";
import Strand1 from "./pages/strand1/Strand1";

function App() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [isDark, setIsDark] = useState(false);

    return (
        <div className="App" data-theme={isDark ? "light" : "dark"}>
            <Header isDark={isDark} handleTheme={() => setIsDark(!isDark)} />
            <ButtonUp handleClick={scrollToTop} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/excel" element={<Excel />} />
                <Route path="/graph" element={<PlottingGraph />} />
                <Route path="/options" element={<Options />} />
                <Route path="/strand1" element={<Strand1 />} />
            </Routes>
        </div>
    );
}

export default App;
