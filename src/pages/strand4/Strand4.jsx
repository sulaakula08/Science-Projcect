import React from "react";
import "../../styles/strands.css";

import pic1 from "../../assets/strand4/Снимок экрана 2025-03-02 170200.png";
import pic2 from "../../assets/strand4/Снимок экрана 2025-03-02 170222.png";
import pic3 from "../../assets/strand4/Снимок экрана 2025-03-02 170240.png";
import pic4 from "../../assets/strand4/Снимок экрана 2025-03-02 170252.png";
import pic5 from "../../assets/strand4/Снимок экрана 2025-03-02 170307.png";

const Strand4 = () => {
    return (
        <div className="strand4">
            <h1>4 – Analysing data</h1>
            <br />
            <h2>4.1 General principles</h2>
            <br />
            <p>
                Data is often analysed by means of linear regression, i.e.
                finding the gradient of a straight-line graph. Straight lines
                are used because proportional relationships between variables
                are easy to identify.
            </p>
            <br />
            <p>Recall that the equation for a straight line can be given as</p>
            <p>Y = AX + B</p>
            <br />
            <p>where A is the gradient of the line and B is the y-intercept.</p>
            p Taking a simple example, say, Newton’s second law F = ma, when the
            acceleration of an object was plotted against the force that was
            applied to it, a straight line would be obtained
            <img src={pic1} alt="" />
            <p>The equation could be linearized to:</p>
            <img src={pic2} alt="" />
            <p>
                where by correspondence, acceleration a is the y-variable and
                force F is the x-variable; the gradient is equal to 1 / m or 1 /
                mass.
            </p>
            <p>
                Using a line of best fit to determine a relationship is
                preferable to simply substituting data pairs and finding
                unknowns algebraically because:
            </p>
            <ul>
                <li>
                    • measuring the gradient examines the relative changes in
                    the variables, not the absolute values—this reduces
                    systematic uncertainties.
                </li>
                <li>
                    a gradient of a line of best fit is essentially an average
                    of the ratio between the independent and dependent
                    variables, reducing random uncertainties.
                </li>
            </ul>
            <br />
            <h2>4.2 Linearized equations</h2>
            <br />
            <p>
                Linear relationships are not always written in the form of the
                general straight line equation, and many other relationships in
                physics are not even linear. However, by careful manipulation of
                variables, many equations can be “made” to be linear. The table
                below shows some examples of how equations can be graphed to
                give a straight line.{" "}
            </p>{" "}
            <br />
            <p>
                The values for the y-variables and x-variables may need to be
                computed before being plotted on a graph. Values of interest can
                be computed by equating the gradient of the line with the terms
                in the “gradient” column
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Case</th>
                        <th>Equation</th>
                        <th>Linear form Y = AX + B</th>
                        <th>y-variable</th>
                        <th>x-variable</th>
                        <th>Gradient</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            The velocity of an object undergoing uniform
                            acceleration is measured over time
                        </td>
                        <td>v = u + at</td>
                        <td>v = at + u</td>
                        <td>Final velocity v</td>
                        <td>Time t</td>
                        <td>Acceleration a</td>
                    </tr>
                    <tr>
                        <td>
                            The acceleration of an object is measured when a
                            varying amount of force is applied
                        </td>
                        <td>a = F / m</td>
                        <td>a = (1/m) F</td>
                        <td>Acceleration a</td>
                        <td>Force F</td>
                        <td>Reciprocal of mass 1/m</td>
                    </tr>
                    <tr>
                        <td>
                            The period of a pendulum is measured when its length
                            is varied
                        </td>
                        <td>T = 2π√(l/g)</td>
                        <td>T² = (4π²/g) l</td>
                        <td>Period squared T²</td>
                        <td>Length l</td>
                        <td>4π²/g</td>
                    </tr>
                    <tr>
                        <td>
                            The vertical displacement of an object undergoing
                            acceleration due to gravity
                        </td>
                        <td>Δs = 1/2 g t²</td>
                        <td>Δs = (1/2 g) t²</td>
                        <td>Change in vertical displacement Δs</td>
                        <td>Time-squared t²</td>
                        <td>1/2 g</td>
                    </tr>
                    <tr>
                        <td>
                            The intensity of light is measured at varying
                            distances from its source
                        </td>
                        <td>I = I₀ / d²</td>
                        <td>I = I₀ (1/d²)</td>
                        <td>Intensity I</td>
                        <td>Reciprocal of distance squared 1/d²</td>
                        <td>Reference intensity I₀</td>
                    </tr>
                    <tr>
                        <td>
                            The angle of refraction is measured for every angle
                            of incidence
                        </td>
                        <td>n₁ sin i = n₂ sin r</td>
                        <td>sin r = (n₁/n₂) sin i</td>
                        <td>sin r</td>
                        <td>sin i</td>
                        <td>Ratio of refractive indices n₁/n₂</td>
                    </tr>
                </tbody>
            </table>
            <h2>4.3 Plotting graphs by hand</h2> <br />
            <p>
                Good practice when hand drawing graphs in Stage 6 Physics
                includes graphs that:
            </p>
            <ul>
                <li>• are drawn with a lead pencil</li>
                <li>• have axes labelled with appropriate labels and units</li>
                <li>• usually have the independent variable on the x-axis</li>
                <li>• usually have the dependent variable on the y-axis</li>
                <li>• have graduations marked evenly along each axis</li>
                <li>
                    provide a consistent linear scale which has been selected to
                    allow the range of data displayed to extend over most of the
                    available grid
                </li>
                <li>
                    have a descriptive title or caption (a good formula is for
                    this is “[dependent variable] versus [independent variable]
                    for [context]”)
                </li>
                <li>• plot points with small, sharp crosses (“×”)</li>
                <li>
                    • use a solid line of best fit that does not extend outside
                    the range of plotted data
                </li>
                <li>
                    • have extrapolations outside the range of the plotted data
                    as a dashed line
                </li>
                <li>
                    • display a large rise-over-run triangle drawn for
                    determining a gradient.
                </li>
            </ul>
            <br />
            <h3>4.3.1 Drawing lines of best fit</h3>
            <p>
                In Stage 6, it is sufficient to estimate a line of best fit by
                eye. There are two approaches to drawing a line of best fit.
            </p>
            <div className="parent">
                <div className="block1">
                    <p>
                        Using an ellipse Draw an ellipse around all the data
                        points, and then draw a line that bisects this ellipse,
                        lengthways.
                    </p>
                    <img src={pic3} alt="" />
                </div>
                <div className="block1">
                    <p>
                        Just eyeballing it Line up your ruler along the plotted
                        data points and wiggle it around until you have a line
                        that follows the trend down the middle. The data points
                        should be roughly evenly distributed either side of the
                        line.
                    </p>
                    <img src={pic4} alt="" />
                </div>
            </div>
            <br />
            <p>
                These two methods are fairly rough and ready. More accurate
                lines of best fit can be drawn using a spreadsheet (see the next
                section).
            </p>
            <p>
                It is important to note that the line of best fit does not need
                to pass through any particular data points nor must it be forced
                to pass through the origin.
            </p>
            <br />
            <p>
                <b>An example of a hand drawn graph.</b>
            </p>
            <img src={pic5} alt="" />
        </div>
    );
};

export default Strand4;
