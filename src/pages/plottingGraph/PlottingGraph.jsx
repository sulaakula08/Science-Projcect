import React from "react";
import "./PlottingGraph.css";
import pic1 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193118.png";
import pic2 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193145.png";
import pic3 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193204.png";
import pic4 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193503.png";
import pic5 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193516.png";
import pic6 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193532.png";
import pic7 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193547.png";
import pic8 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193602.png";
import pic9 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193627.png";
import pic10 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193639.png";
import pic11 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193657.png";
import pic12 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193718.png";
import pic13 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193751.png";
import pic14 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193815.png";
import pic15 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193836.png";
import pic16 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193922.png";
import pic17 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193942.png";
import pic18 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 193959.png";
import pic19 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 194014.png";
import pic20 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 194030.png";
import pic21 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 194048.png";
import pic22 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 194102.png";
import pic23 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 194116.png";
import pic24 from "../../assets/plotting-graph/Снимок экрана 2025-01-18 194205.png";

const PlottingGraph = () => {
    return (
        <div className="plotting-graph">
            <h1>Poltting the Graph</h1>
            <p>Open the GVA</p>
            <img src={pic1} alt="" />
            <p>
                Click the free space to write a Title of Graph “Graph of DV
                against IDV”
            </p>
            <img src={pic2} alt="" />
            <p>Label columns for IDV (X) and DV (Y)</p>
            <p>To label both variables click twice X and Y in turn</p>
            <img src={pic3} alt="" />
            <p>
                *Write the full name, short name and unit for IDV and click
                Done.
            </p>
            <img src={pic4} alt="" />
            <p>Repeat these steps for DV and click Done.</p>
            <img src={pic5} alt="" />
            <p>Add New Data Set (New column) for Uncertainty</p>
            <img src={pic6} alt="" />
            <p>Double-click the third column for Rename of New Data Set</p>
            <img src={pic7} alt="" />
            <p>Rename and repeat Step* and click Done</p>
            <p>
                You need to create such a table and fill in the table by using
                data from Excel.doc
            </p>
            <img src={pic8} alt="" />
            <p>Before</p>
            <img src={pic9} alt="" />
            <p>After</p>
            <img src={pic10} alt="" />
            <p>Click Analyze and Choose Linear Fit to Draw the Best-fit line</p>
            <img src={pic11} alt="" />
            <p>Best-fit line and its characteristics in the box</p>
            <img src={pic12} alt="" />
            <p>
                Double-click the tsecond column (Volume of Plasticine) and
                choose Options to draw the Error Bars
            </p>
            <img src={pic13} alt="" />
            <p> and click Use Column and</p>
            <p>choose Volume of Plasticine </p>
            <img src={pic14} alt="" />
            <p>
                then tick Error Bar Calculation and click Use Column and choose
                Data Set 2 (Unc in Av V) and click Done.
            </p>
            <img src={pic15} alt="" />
            <p>
                Then you will get the following graph with Error Bars (Vertical
                Red Lines)
            </p>
            <img src={pic16} alt="" />
            <p>To include Max and Min Lines click Analyze and choose Model</p>
            <img src={pic17} alt="" />
            <p>
                After that choose the Linear function to Draw Manual Fit and
                click OK
            </p>
            <img src={pic18} alt="" />
            <p>Then you will get the following Manual Fit</p>
            <img src={pic19} alt="" />
            <p>
                Double-click to change the characteristics of Manual Fit and
                choose Appearance to change the colour
            </p>
            <img src={pic20} alt="" />
            <p>
                Choose Dark colours to highlight it (e.g. dark blue, dark pink,
                etc.)
            </p>
            <img src={pic21} alt="" />
            <p>Click Enable Line Drag to allow to move Manual Fit</p>
            <img src={pic22} alt="" />
            <p>
                And change the position of the Manual Fit by gray rhombus to the
                appropriate place (top of the first Error Bar and bottom of the
                last Error Bar)
            </p>
            <img src={pic23} alt="" />
            <p>
                Then add one more Manual Fit. Repeat the last FIVE Steps (choose
                different colour for the second Manual Fit)
            </p>
            <img src={pic24} alt="" />
            <p>
                Connect both Manual Fits and Best-fit Line in one intersection
            </p>
            <p>
                And you will get Max and Min Gradient from Max and Min Manual
                Fits
            </p>
            <p>
                Read the characteristics from Red and Blue Boxes and identify
                Max and Min Gradients (m1 (Slope))
            </p>
        </div>
    );
};

export default PlottingGraph;
