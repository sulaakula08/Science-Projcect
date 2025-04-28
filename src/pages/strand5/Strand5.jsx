import React from "react";
import "./Strand5.css"

import pic1 from "../../assets/strand5/Снимок экрана 2025-03-02 175701.png";
import pic2 from "../../assets/strand5/Снимок экрана 2025-03-02 175719.png";
import pic3 from "../../assets/strand5/Снимок экрана 2025-03-02 175734.png";
import pic4 from "../../assets/strand5/Снимок экрана 2025-03-02 175751.png";
import pic5 from "../../assets/strand5/Снимок экрана 2025-03-02 175805.png";
import pic6 from "../../assets/strand5/Снимок экрана 2025-03-02 175822.png";
import pic7 from "../../assets/strand5/Снимок экрана 2025-03-02 175838.png";
import pic8 from "../../assets/strand5/Снимок экрана 2025-03-02 175920.png";
import pic9 from "../../assets/strand5/Снимок экрана 2025-03-02 175908.png";
import pic10 from "../../assets/strand5/Снимок экрана 2025-03-02 175936.png";
import pic11 from "../../assets/strand5/Снимок экрана 2025-03-02 175950.png";

const Strand5 = () => {
    return (
        <div className="strand5">
            <h1>5 – Using spreadsheets</h1>
            <p>
                Spreadsheets are a powerful tool to process and analyse large
                amounts of data. You can try the following example, which uses
                Google Sheets (Microsoft Excel does the same thing in very
                similar ways)
            </p>
            <h2>5.1 Entering data</h2>
            <p>
                Click on a cell to select it and begin typing. Start by entering
                some column headings, remembering to include units. Enter your
                data next.
            </p>
            <img src={pic1} alt="" />
            <h2>5.2 Performing calculations</h2>

            <p>
                Next, you can perform calculations. In this example, we want to
                find the average of the three trials. It is important to note
                that spreadsheets locate data by the grid reference of the cell
                where it is contained.
            </p>
            <br />

            <p>
                At the top of a new column, put a heading (in this example,
                “Average”). In the same row as the first set of trials, type:
            </p>

            <p>=AVERAGE(B3,C3,D3)</p>
            <br />
            <p>
                And then press <b>Enter.</b>
            </p>
            <img src={pic2} alt="" />
            <p>
                The equals sign (“=”) at the start of a formula tells the
                spreadsheet that the cell contains a calculation, and in this
                example, B3, C3 and D3 are the cells that we want to average.
                Hitting Enter after you type a formula in a cell commands the
                spreadsheet to execute your calculation.
            </p>
            <br />
            <p>Equivalently, we could have typed:</p>
            <br />
            <p>=AVERAGE(B3:D3)</p>
            <br />
            <p>
                Using a colon as in “B3:D3” indicates a contiguous range of
                cells – could be useful if the number of cells you are calling
                on is large.{" "}
            </p>
            <p>
                We do not want to keep typing a formula into the spreadsheet
                over and over again if we do not have to. Instead, we can just
                fill down a column with copies of the formula for its respective
                row.
            </p>
            <br />

            <p>
                Notice that there is a small square in the bottom right corner
                of a selected cell. When you hover your mouse pointer over this
                square, it turns into a crosshair. Click and drag this crosshair
                down to cover the rest of the empty cells in the Average column.
                When you release the mouse button, the formula fills into each
                cell and the averages for each row should automatically be
                computed.
            </p>

            <img src={pic3} alt="" />

            <p>
                Now, in this example, we want to run calculations to find the
                time for one period and also period squared. To do this, we will
                need to type some formulae into cells F3 and G3:
            </p>

            <ul>
                <li>
                    We want to compute a value for one period in cell F3. Since
                    cell E3 contains the time for ten periods we will divide
                    this by 10. Type into cell F3: <br />
                    <p>=E3/10</p>
                </li>
                <li>
                    We want to compute a value for period-squared in cell G3.
                    Since cell F3 now contains the time for one period, type
                    into cell G3: <br /> <p>=F3^2</p>
                </li>
            </ul>

            <br />
            <p>The completed table should look like the one below.</p>

            <img src={pic4} alt="" />

            <h2>5.3 Plotting a graph</h2>

            <p>
                Select the cells in the columns of your table that you wish to
                use for your graph. Click in the centre of the first cell
                (including the column header) and drag down until the cells are
                selected, and then release the mouse button.
            </p>
            <br />

            <p>
                In this example, the columns are not adjacent so they cannot be
                selected in one step. To select column cells that are not
                adjacent, you will need to click and drag to select the first
                column (as above), release, then while holding down the Ctrl
                key, click, drag and release when selecting the cells of the
                other column
            </p>

            <img src={pic5} alt="" />
            <br />

            <p>
                By default, Google Sheets will usually generate a column graph.
                To change this to a scatter graph, use the Chart type dropdown
                menu under the Setup tab in the Chart Editor and select Scatter.
            </p>
            <img src={pic6} alt="" />

            <p>
                If your dependent variable is in the left column of the table
                and the independent variable is in the right column, then the
                dependent and independent variables should be positioned and
                labelled on the appropriate axes.
            </p>
            <img src={pic7} alt="" />
            <p>
                To add a line of best fit, expand Series under the Customize tab
                in the Chart Editor pane (see right). Tick the Trendline box. We
                also want the equation of the line – from the Label dropdown
                menu, select Use Equation.
            </p>
            <br />
            <p>Your graph should now look like the one below.</p>

            <img src={pic8} alt="" />
            <img src={pic9} alt="" />

            <p>
                Notice that the equation of the line is now shown above the
                graph area; the gradient is 4.62 and the yintercept is –0.117.
            </p>

            <br />
            <h2>5.4 Obtaining the uncertainty in the slope</h2>

            <p>
                Remember that in section 2.2.4 Uncertainty in the slope of a
                line of best fit, we saw that there is inherent uncertainty in
                the calculated gradient of a line of best fit.
            </p>
            <br />

            <p>
                There is a function in Google Sheets (“=LINEST(Y_VALUES,
                X_VALUES, TRUE, TRUE)”) that easily allows you to compute the
                uncertainty in the line (the function is the same in Microsoft
                Excel, but it’s a bit trickier to get Excel to display the
                result). It should be noted that this method does not take the
                uncertainty in each data point into consideration – it is
                looking at the spread of datapoints from the trend line
            </p>
            <br />
            <p>
                Using our example, choose a cell below or to the right of your
                data (make sure this cell is clear for 5 rows down and another
                column right – it will fill these cells with data). Into this
                cell, type:
            </p>
            <br />

            <p>
                <i>=LINEST(G3:G12, A3:A12, TRUE, TRUE)</i>
            </p>

            <br />

            <p>
                where G3:G12 is the range of y-values and A3:A12 is the range of
                x-values.
            </p>
            <img src={pic10} alt="" />
            <p>
                When you press Enter, the function will output this array of
                data:
            </p>

            <img src={pic11} alt="" />
            <p>
                The ones we are interested in are the gradient, y-intercept, and
                uncertainty in the slope. The gradient can be quoted as 4.6 ±
                0.2. Notice that the gradient and y-intercept here are given to
                far more significant figures than that labelled on the graph.{" "}
            </p>

            <h2>5.5 Common spreadsheet symbols and functions</h2>
            <br />

            <h3>5.5.1 Calling on cells in functions</h3>
            <br />

            <p>
                Data in a cell can be called upon in a formula by their grid
                coordinate, for example, A1, B4, H27, and so on
            </p>
            <br />

            <p>
                If a contiguous range of adjacent cells in a row, column, or
                block is being called upon, then a colon “:” can be used. For
                example:
            </p>
            <ul>
                <li>
                    B4:B9 would call upon six cells in column B of the
                    spreadsheet.
                </li>
                <li>G2:K2 would call upon five cells in row 2.</li>
                <li>
                    B2:D5 would call on twelve cells in a rectangle between
                    columns B to D and rows 2 to 5.
                </li>
            </ul>
            <p>
                This is particularly useful when computing the average of a
                large number of cells, for example, =AVERAGE(D2:D99).
            </p>

            <h3>5.5.2 Orders of operations</h3>
            <br />

            <p>
                Use brackets to specify order of operations. It is better to be
                over cautious and use more brackets than fewer if you are unsure
                about the order in which the spreadsheet will compute a formula.
                For example:
            </p>
            <br />
            <p>An equation that looks like this: a = (v - u) / t</p>
            <br />
            <p>would need to be entered with brackets like this: =(B-A)/C</p>
            <br />

            <h3>5.5.3 Entering data</h3>

            <br />
            <p>Below are some special inputs for a spreadsheet.</p>

            <table>
                <tr>
                    <th>Case</th>
                    <th>Spreadsheet</th>
                    <th>Example (natural)</th>
                    <th>Example syntax</th>
                </tr>
                <tr>
                    <td>Pi, π</td>
                    <td>pi()</td>
                    <td>
                        <i>2πr</i>
                    </td>
                    <td>2*pi()*A1</td>
                </tr>
                <tr>
                    <td>Euler’s number</td>
                    <td>exp(A)</td>
                    <td>
                        <i>e²</i>
                    </td>
                    <td>exp(2)</td>
                </tr>
                <tr>
                    <td>Scientific notation</td>
                    <td>E</td>
                    <td>
                        <i>5.23 × 10³</i>
                    </td>
                    <td>5.23E+3</td>
                </tr>
            </table>
            <br />

            <h3>5.5.4 Common functions</h3>

            <br />
            <p>
                Below is a table of some commonly used spreadsheet functions,
                where A, B et cetera might be numbers or a cell references. This
                is by no means an exhaustive list of spreadsheet functions.
            </p>

            <p>
                Some functions use an argument placed inside brackets, such as
                for square root, SQRT(A). The argument can be a number, a
                reference to a cell containing a number, or it can even be
                another function. For example, √5x can be entered as SQRT(5*A1).
            </p>

            <p>Remember to begin any calculation with an equal sign “=”.</p>

            <table>
                <tr>
                    <th>Function</th>
                    <th>Example</th>
                    <th>Syntax</th>
                </tr>
                <tr>
                    <td>Addition</td>
                    <td>2 + x</td>
                    <td>=A+B</td>
                </tr>
                <tr>
                    <td>Subtraction</td>
                    <td>x - 3</td>
                    <td>=A-B</td>
                </tr>
                <tr>
                    <td>Multiplication</td>
                    <td>7 × x</td>
                    <td>=A*B</td>
                </tr>
                <tr>
                    <td>Division</td>
                    <td>
                        <i>x</i> / <i>4</i>
                    </td>
                    <td>=A/B</td>
                </tr>
                <tr>
                    <td>Indices</td>
                    <td>
                        <i>x³</i>
                    </td>
                    <td>=A^B</td>
                </tr>
                <tr>
                    <td>Square root</td>
                    <td>
                        <i>√x</i>
                    </td>
                    <td>=SQRT(A)</td>
                </tr>
                <tr>
                    <td>Logarithm</td>
                    <td>
                        <i>logₐx</i>
                    </td>
                    <td>=log(num, base)</td>
                </tr>
                <tr>
                    <td>Sine*</td>
                    <td>
                        <i>sin x</i>
                    </td>
                    <td>
                        =SIN(A) <br /> =SIN(RADIANS(A))
                    </td>
                </tr>
                <tr>
                    <td>Cosine*</td>
                    <td>
                        <i>cos x</i>
                    </td>
                    <td>=COS(A)</td>
                </tr>
                <tr>
                    <td>Tangent*</td>
                    <td>
                        <i>tan x</i>
                    </td>
                    <td>=TAN(A)</td>
                </tr>
                <tr>
                    <td>Arcsine*</td>
                    <td>
                        <i>sin⁻¹x</i>
                    </td>
                    <td>
                        =ASIN(A) <br /> =DEGREES(ASIN(A))
                    </td>
                </tr>
                <tr>
                    <td>Arccosine*</td>
                    <td>
                        <i>cos⁻¹x</i>
                    </td>
                    <td>=ACOS(A)</td>
                </tr>
                <tr>
                    <td>Arctangent*</td>
                    <td>
                        <i>tan⁻¹x</i>
                    </td>
                    <td>=ATAN(A)</td>
                </tr>
                <tr>
                    <td>Degrees to radians</td>
                    <td>
                        <i>x × π / 180</i>
                    </td>
                    <td>=RADIANS(A)</td>
                </tr>
                <tr>
                    <td>Radians to degrees</td>
                    <td>
                        <i>x × 180° / π</i>
                    </td>
                    <td>=DEGREES(A)</td>
                </tr>
                <tr>
                    <td>Average</td>
                    <td>
                        <i>Σx / n</i>
                    </td>
                    <td>
                        =AVERAGE(A, B, C) <br /> =AVERAGE(A:D)
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Strand5;
