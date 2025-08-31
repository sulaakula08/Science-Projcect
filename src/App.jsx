import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/animations.css";
import Header from "./components/header/Header";
import Excel from "./pages/excel/Excel";
import PlottingGraph from "./pages/plottingGraph/PlottingGraph";
import Home from "./pages/home/Home";
import ButtonUp from "./components/buttonUp/ButtonUp";
import { useState } from "react";
import Options from "./pages/options/Options";
import Strand1 from "./pages/strand1/Strand1";
import Strand2 from "./pages/strand2/Strand2";
import Strand3 from "./pages/strand3/Strand3";
import Strand4 from "./pages/strand4/Strand4";
import Strand5 from "./pages/strand5/Strand5";
import Comments from "./pages/comments/Comments";
import DataAnalysis from "./pages/dataAnalysis/DataAnalysis";
import Contacts from "./pages/contact/Contacts";
import AIButton from "./components/aibutton/AIButton";
import AIKbot from "./pages/aikbot/AIKbot";

function App() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [isDark, setIsDark] = useState(false);

    return (
        <div className="App" data-theme={isDark ? "dark" : "light"}>
            <Header isDark={isDark} handleTheme={() => setIsDark(!isDark)} />
            <ButtonUp handleClick={scrollToTop} />
            <AIButton />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/excel" element={<Excel />} />
                <Route path="/graph" element={<PlottingGraph />} />
                <Route path="/options" element={<Options />} />
                <Route path="/strand1" element={<Strand1 />} />
                <Route path="/strand2" element={<Strand2 />} />
                <Route path="/strand3" element={<Strand3 />} />
                <Route path="/strand4" element={<Strand4 />} />
                <Route path="/strand5" element={<Strand5 />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/analysis" element={<DataAnalysis />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="tutorial" element={<Options />} />
                <Route path="/aikbot" element={<AIKbot />} />
            </Routes>
        </div>
    );
}

export default App;
