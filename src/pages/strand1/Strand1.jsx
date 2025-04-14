import React from "react";
import "./Strand1.css";

const Strand1 = () => {
    return (
        <div className="strand1">
            <h1>Strand 1:</h1>
            <p>
                1.1.1 Scientific notation and orders of magnitude A neat way of
                recording very large or very small numbers is by using
                scientific notation. This is where numbers are written as a
                product of powers of ten, also called orders of magnitude. For
                example:–
            </p>
            <ul>
                <li>• 2 560 000 m can be written as 2.56 × 106 m</li>
                <li>• 0.0000183 m can be written as 1.83 × 10–5 m</li>
            </ul>
            <p>
                These numbers are 11 orders of magnitude apart, since there are
                11 powers of ten between 106 and 10–5 . Note that numbers like
                8.4 × 106 m have an order of magnitude of 7 because it rounds up
                to 107.
            </p>
            <h2>1.1.2 Significant figures</h2>
            <p>
                Significant figures are important because they signal the
                accuracy or uncertainty in a value. The last significant figure
                in a number suggests that it is accurate to ±½ of its place. For
                example, 5.3 km implies a distance with uncertainty of 5.30 ±
                0.05 km but 5.34 km implies 5.340 ± 0.005 km.
            </p>
            <div className="colored">
                <strong>
                    Rules for significant figures – what counts as a significant
                    figure?
                </strong>
                <ul>
                    <li>• Non-zero digits are significant.</li>
                    <li>
                        • Trailing zeroes in a whole number are generally not
                        significant (these zeroes are used to keep the other
                        figures in their correct value places). ‒ 75000 m – the
                        7 and 5 are significant. There are 2 significant
                        figures. ‒ 75420 m – the 7, 5, 4 and 2 are significant.
                        There are 4 significant figures. There is less
                        uncertainty in this number.
                    </li>
                    <li>
                        Sometimes trailing zeroes are significant. They may be
                        marked with an overbar or underlined. ‒ 5320"0 – 5, 3, 2
                        and one of the zeroes are significant. There are 4
                        significant figures. Leading zeroes are not significant
                        (these zeroes are used to keep the other figures in
                        their correct value places). ‒ 0.000832 kg – only 8, 3,
                        and 2 are significant. There are 3 significant figures.
                    </li>
                    <li>
                        The zeroes between non-zero digits are significant. ‒
                        90.04 s – each figure is significant. There are 4
                        significant figures
                    </li>
                    <li>
                        The trailing zeroes in a decimal are significant. ‒ 8.30
                        L – each figure is significant. There are 3 significant
                        figures. ‒ 3.200 J – each figure is significant. There
                        are 4 significant figures.
                    </li>
                </ul>
            </div>
            <p>
                The result of a calculation is only as accurate as the least
                accurate value used to compute it. So, when reporting the result
                of a calculation, the result must be rounded to the same as the
                smallest number of significant figures of any value used in the
                calculation. For example:
            </p>
            <p>Energy = 3.457 W × 5.60 s = 19.3292 J</p>
            <p></p>
            <div className="colored">
                <p>
                    <b>Note:</b> In calculations consisting of simple additions
                    and subtractions only, answers should be given with the same
                    number of decimal places as the term with the least number
                    of decimal places in the calculation. For example:
                </p>

                <p>ΔT = 137.45 °C – 37.8766 °C = 99.5734 °C</p>

                <p>
                    The accuracy implied by the additional decimal places in one
                    of the numbers is meaningless if the other number is more
                    uncertain.
                </p>
            </div>
            <h2>1.1.3 Units</h2>
            Units add important information to measurements because a numerical
            value means nothing on its own. <br />A unit has to be an agreed
            quantity of a thing to be measured, because when we say or write
            down a measurement, we are actually giving a number of multiples of
            that unit. For example, when you are told that the length of
            something is 3 metres, you are being told that its length is 3 × 1
            metre, and this will only be accurate if everyone agrees about what
            a single metre is. The agreed system of units used in science is the
            International System of units (SI units). The base units are:
            <ul>
                <li>Time – seconds (s)</li>
                <li>Length – metres (m)</li>
                <li>Mass – kilograms (kg)</li>
                <li>Electric current – amperes (A)</li>
                <li>Thermodynamic temperature – kelvin (K)</li>
                <li>Amount of substance – mole (mol)</li>
                <li>Luminous intensity – candela (cd)</li>
            </ul>
            <p>
                Some quantities are so special that their derived unit is given
                a name. For example, you might know the named unit for force –
                the newton (N). The unit for force is actually derived from the
                SI base units. Since force is determined by the equation
            </p>
            <p>F = m x a</p>
            <p>the unit for force derived from base units is</p>
            <p>
                newton = 1 kg × 1 m ∙ s <sup>-2</sup> = 1 kg ∙ m ∙ s{" "}
                <sup>-2</sup>
            </p>
            <p>Some other examples are:</p>
            <table>
                <tr>
                    <th>Quantity</th>
                    <th>Derived Unit (in terms of base units)</th>
                    <th>Named Unit and Symbol</th>
                </tr>
                <tr>
                    <td>Energy</td>
                    <td>kg ∙ m² ∙ s⁻²</td>
                    <td>joule (J)</td>
                </tr>
                <tr>
                    <td>Electric charge</td>
                    <td>A ∙ s</td>
                    <td>coulomb (C)</td>
                </tr>
                <tr>
                    <td>Frequency</td>
                    <td>s⁻¹</td>
                    <td>hertz (Hz)</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>kg ∙ m⁻¹ ∙ s⁻²</td>
                    <td>pascal (Pa)</td>
                </tr>
                <tr>
                    <td>Voltage</td>
                    <td>kg ∙ m² ∙ s⁻³ ∙ A⁻¹</td>
                    <td>volt (V)</td>
                </tr>
            </table>
            <p>
                Prefixes are sometimes used to convert units into forms that are
                more conveniently written or spoken. Some examples (and their
                multipliers, in scientific notation):
            </p>
            <table>
                <tr>
                    <th>Prefix</th>
                    <th>Symbol</th>
                    <th>Multiplier</th>
                    <th>Example</th>
                </tr>
                <tr>
                    <td>nano–</td>
                    <td>n</td>
                    <td>×10⁻⁹</td>
                    <td>nanometre (nm)</td>
                </tr>
                <tr>
                    <td>micro–</td>
                    <td>µ</td>
                    <td>×10⁻⁶</td>
                    <td>microampere (µA)</td>
                </tr>
                <tr>
                    <td>milli–</td>
                    <td>m</td>
                    <td>×10⁻³</td>
                    <td>millivolt (mV)</td>
                </tr>
                <tr>
                    <td>centi–</td>
                    <td>c</td>
                    <td>×10⁻²</td>
                    <td>centigram (cg)</td>
                </tr>
                <tr>
                    <td>deci–</td>
                    <td>d</td>
                    <td>×10⁻¹</td>
                    <td>decilitre (dL)</td>
                </tr>
                <tr>
                    <td>deca–</td>
                    <td>da</td>
                    <td>×10¹</td>
                    <td>decade</td>
                </tr>
                <tr>
                    <td>hecto–</td>
                    <td>h</td>
                    <td>×10²</td>
                    <td>hectopascal (hPa)</td>
                </tr>
                <tr>
                    <td>kilo–</td>
                    <td>k</td>
                    <td>×10³</td>
                    <td>kilometre (km)</td>
                </tr>
                <tr>
                    <td>mega–</td>
                    <td>M</td>
                    <td>×10⁶</td>
                    <td>megajoule (MJ)</td>
                </tr>
                <tr>
                    <td>giga–</td>
                    <td>G</td>
                    <td>×10⁹</td>
                    <td>gigawatt (GW)</td>
                </tr>
            </table>
            <h1>1.2 Tabulating data</h1>
            <p>
                Data should be recorded clearly in a table. Additional columns
                should be added for any processed data.
            </p>
            <p>Best practice for a table in Stage 6 Physics should include:</p>
            <ul>
                <li>a descriptive title or caption</li>
                <li>
                    columns that have headings that include units, where
                    appropriate; units are not included in the body of the table
                </li>
                <li>
                    the independent variable, usually towards the left, and the
                    dependent variable, towards the right
                </li>
                <li> figures aligned by decimal point</li>
                <li>uncertainties, if appropriate.</li>
            </ul>
            <br />
            <p>Example:</p>
            <br />
            <p id="center">
                Table: the variation in the period of a pendulum as its length
                increases
            </p>
            <table>
                <tr>
                    <th>Length (m)</th>
                    <th>Trial 1 (s)</th>
                    <th>Trial 2 (s)</th>
                    <th>Trial 3 (s)</th>
                    <th>Average (s)</th>
                    <th>± Uncertainty (s)</th>
                    <th>T² (s²)</th>
                </tr>
                <tr>
                    <td>0.50</td>
                    <td>14.34</td>
                    <td>14.30</td>
                    <td>14.53</td>
                    <td>14.39</td>
                    <td>0.11</td>
                    <td>2.07</td>
                </tr>
                <tr>
                    <td>0.60</td>
                    <td>16.35</td>
                    <td>15.93</td>
                    <td>16.23</td>
                    <td>16.17</td>
                    <td>0.21</td>
                    <td>2.61</td>
                </tr>
                <tr>
                    <td>0.70</td>
                    <td>17.23</td>
                    <td>17.04</td>
                    <td>17.74</td>
                    <td>17.33</td>
                    <td>0.35</td>
                    <td>3.00</td>
                </tr>
                <tr>
                    <td>0.80</td>
                    <td>19.63</td>
                    <td>19.41</td>
                    <td>19.24</td>
                    <td>19.43</td>
                    <td>0.20</td>
                    <td>3.77</td>
                </tr>
                <tr>
                    <td>0.90</td>
                    <td>20.47</td>
                    <td>20.73</td>
                    <td>20.19</td>
                    <td>20.47</td>
                    <td>0.27</td>
                    <td>4.19</td>
                </tr>
                <tr>
                    <td>1.00</td>
                    <td>21.20</td>
                    <td>20.33</td>
                    <td>22.01</td>
                    <td>21.78</td>
                    <td>0.84</td>
                    <td>4.49</td>
                </tr>
            </table>
        </div>
    );
};

export default Strand1;
