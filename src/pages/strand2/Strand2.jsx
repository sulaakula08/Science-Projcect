import React from "react";
import "../../styles/strands.css";

import pic1 from "../../assets/strand2/Снимок экрана 2025-02-22 203814.png";
import pic2 from "../../assets/strand2/Снимок экрана 2025-02-22 203828.png";
import pic3 from "../../assets/strand2/Снимок экрана 2025-02-22 204351.png";
import pic4 from "../../assets/strand2/Снимок экрана 2025-02-22 205215.png";
import pic5 from "../../assets/strand2/Снимок экрана 2025-03-02 150444.png";
import pic6 from "../../assets/strand2/Снимок экрана 2025-03-02 150458.png";
import pic7 from "../../assets/strand2/Снимок экрана 2025-03-02 152840.png";
import pic8 from "../../assets/strand2/Снимок экрана 2025-03-02 153746.png";
import pic9 from "../../assets/strand2/Снимок экрана 2025-03-02 153908.png";
import pic10 from "../../assets/strand2/Снимок экрана 2025-03-02 154453.png";
import pic11 from "../../assets/strand2/Снимок экрана 2025-03-02 154511.png";
import pic12 from "../../assets/strand2/Снимок экрана 2025-03-02 154522.png";

const Strand2 = () => {
    return (
        <div className="strand2">
            <h1>2 – Accuracy, Errors, and Uncertainties</h1>
            <h2>2.1 Error</h2>
            <h3>2.1.1 Quantifying Error</h3>
            <p>
                Accuracy is the closeness of an observed value to its “true”
                value (a true value could be some theoretical value, or a value
                accepted by physicists and tabulated in secondary sources).
            </p>
            <p>
                On some level, every measurement is an approximation. One reason
                is that there are limitations in the instruments we use for
                measuring – they may lack sensitivity, or the graduations on
                them (their resolution) might not be fine enough.
            </p>
            <p>
                Environmental factors can also interfere with making
                measurements, and we as humans have our limitations in making
                and reading measurements, too.
            </p>
            <p>
                The difference between an observed value and its true value is
                called <b>error</b> (for us, it does not mean “mistake”, as is
                its common meaning).
            </p>
            <p>
                The following equations can be used to quantify error and
                accuracy:
            </p>
            <p>
                <b>Absolute error:</b> |true value − observed value|
            </p>
            <p>
                <b>Relative error</b> (also called percentage error when
                expressed as %):
            </p>
            <p>
                Relative Error = (|true value − observed value| / true value) ×
                100%
            </p>
            <p>
                <b>Accuracy:</b> 100% − percentage error
            </p>
            <h3>Example Calculation</h3>
            <p>
                For example, the “true” value of gravitational field strength on
                Earth’s surface is 9.8 N kg<sup>–1</sup>. In an experiment
                carried out by a student, the value observed was 8.5 N kg
                <sup>–1</sup>.
            </p>
            <p>
                <b>Absolute error:</b>
            </p>
            <p>
                |9.8 N kg<sup>–1</sup> − 8.5 N kg<sup>–1</sup>| = 1.3 N kg
                <sup>–1</sup>
            </p>
            <p>
                <b>Relative error:</b>
            </p>
            <p>
                (|9.8 N kg<sup>–1</sup> − 8.5 N kg<sup>–1</sup>| / 9.8 N kg
                <sup>–1</sup>) × 100% = 13%
            </p>
            <p>
                <b>Accuracy:</b>
            </p>
            <p>100% − 13% = 87%</p>
            <br />
            <h3>2.1.2 Using error to assess accuracy</h3>
            <br />
            <p>
                An arbitrary limit can be set as a benchmark for accuracy, for
                example, 5% or 10% error.
            </p>
            <br />
            <p>
                An alternative might be to set “error bands” for a graduated
                scale of accuracy. For example, 0-5% for high accuracy, 5-15%
                error for modest accuracy, more than 15% for low accuracy
            </p>
            <br />
            <h3>2.1.3 Systematic and random errors</h3>
            <br />
            <p>
                When you make multiple measurements and compute the errors, you
                might start to recognise patterns in how and when they occur.
                Because of this, errors can be put into one of two categories
                depending on how they behave:
            </p>
            <ul>
                <li>
                    <b>Systematic errors </b>–When repeated, observed values are
                    displaced in same direction from the true value. That is,
                    the observed values might read consistently higher or
                    consistently lower than the true value. These types of
                    errors are often caused by improperly calibrated measuring
                    instruments, or “zero” errors (such as when an electronic
                    balance shows a non-zero reading when there is nothing on
                    its pan – every reading will be higher than it should be).
                </li>
                <li>
                    <b>Random errors </b>– When repeated, observed values are
                    scattered randomly above and below the true value. These
                    types of errors are often caused by random fluctuations in
                    the ambient conditions or uncontrolled variables.
                </li>
            </ul>
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
            <h3>2.1.4 Improving accuracy – reducing errors</h3>
            <br />
            <p>
                To increase accuracy, we need to reduce error. We can do that by
                modifying experimental techniques or procedures to make the
                error absolutely smaller, or by making the error smaller
                relative to the value we are measuring. Here are some ways to
                reduce error:
            </p>
            <ul>
                <li>
                    To reduce absolute error ‒ Use measuring instruments with
                    appropriate resolution (graduations fine enough for the
                    quantity you are measuring). ‒ Read analogue instruments
                    directly front-on to reduce parallax.
                </li>
                <li>
                    To reduce relative error ‒ Design experiments to increase
                    the size of measurements being made. For example, if we were
                    to measure the swinging time of a short pendulum, it might
                    have a period of about 1.0 seconds; timing error with a
                    stopwatch might be 0.5 seconds, so relative error is
                    »0.5/1.0 = 50%. A longer pendulum’s period might be 10.0
                    seconds, so the relative error is »0.5/10.0 = 5%.
                </li>
                <li>
                    To reduce systematic error ‒ Ensure that measuring
                    instruments are properly calibrated and zeroed.
                </li>
                <li>
                    To reduce random error ‒ Hold controlled variables constant
                    (such as keeping ambient conditions stable) so that they do
                    not add fluctuations to a set of trials. ‒ Conduct repeated
                    trials of a measurement and compute an average. (An average
                    seeks to find the centre of a set of values – remember that
                    random error causes data to scatter randomly around the true
                    value.)
                </li>
            </ul>
            <br />
            <h2>2.2 Uncertainty</h2>
            <br />
            <h3>2.2.1 Uncertainty versus error</h3>
            <br />
            <p>
                While the concept of error compares measurements against values
                assumed to be “true”, there are many more values (particularly
                direct measurements) that cannot be compared to known or
                accepted values
            </p>
            <br />
            <p>
                Additionally, it is possible that a result close to an accepted
                value comes about purely by chance anyway. Calculating the error
                in cases like this does not tell us about the confidence we
                should have in the techniques used to make the measurement.
            </p>
            <br />
            <p>
                What we should also do is report our measurements with some
                indication of the certainty we have in it. Remember, every
                measurement we make is, on some level, an approximation. To
                communicate how precise we think our measurement is, we can cite
                the possible margin of error which we call uncertainty.
            </p>
            <img src={pic3} alt="" />
            <p>
                How do we know how big the uncertainty in our measurements are?
                In sections 2.2.3–2.2.7, we discuss how to estimate
                uncertainties.
            </p>
            <h3>2.2.2 Using uncertainty to assess the quality of a value</h3>
            <p>
                A measurement agrees with an accepted value if the accepted
                value falls within the measurement’s uncertainty bounds. For
                example, when comparing the generally accepted value of
                acceleration due to gravity at Earth’s surface (g = 9.8 m.s
                <sup>-2</sup> ), a measurement of:
            </p>
            <ul>
                <li>
                    9.6 ± 0.3 m.s–2 agrees, because 9.8 m.s <sup>–2</sup> lies
                    inside the range of 9.3 and 9.9 m.s <sup>–2</sup>
                </li>
                <li>
                    9.2 ± 0.3 m.s–2 does not agree, because 9.8 m.s{" "}
                    <sup>-2</sup> lies outside the range of 8.9 and 9.5 m.s{" "}
                    <sup>-2</sup>
                </li>
            </ul>
            <img src={pic4} />
            <p>
                Of course, you can make an accepted value can fall inside any
                uncertainty bounds if you make the uncertainty large enough. So
                for the measurement to be precise, the uncertainties also have
                to be reasonably small.
            </p>
            <h3>2.2.3 Reporting uncertainties</h3>
            <p>
                Any value that has been observed or estimated has an associated
                uncertainty. Values that have been recorded should be quoted
                with an associated uncertainty.
            </p>
            <br />
            <p>
                Absolute uncertainty is expressed in the same dimensions as the
                value. For example, 5.4 ± 0.2 m could be a length where the true
                value might lie 0.2 m above or below the estimation of 5.4 m.
            </p>
            <br />
            <p>
                Relative uncertainty is the size of the uncertainty as a
                fraction of the observed or estimated value and is usually
                presented as a percentage.
            </p>
            <table>
                <tr>
                    <td>
                        Absolute uncertainty <br />
                        (has the same units as the measurement)
                    </td>
                    <td>Δx</td>
                </tr>
                <tr>
                    <td>
                        Relative uncertainty <br />
                        (also called percentage uncertainty when expressed as %)
                    </td>
                    <td>Δx / x</td>
                </tr>
            </table>
            <p>
                For example, for the estimation 5.4 ± 0.2 m, the relative
                uncertainty is 0.2 / 5.4 = 4%
            </p>
            <p>
                Uncertainty should be given to one significant figure*; the
                observed or estimated value should be rounded to same number of
                decimal places as the uncertainty (any more decimal places than
                the uncertainty would be meaningless).
            </p>
            <p>
                For example, the height of a building might be 14.7 ± 0.5 m, not
                14.691 ± 0.53 m.
            </p>
            <p
                className="coloredIf the first significant figure of the uncertainty is a “1”, then a second significant figure is sometimes given. The
number of decimal places must still match. For example, 12.67 ± 0.12 m."
            ></p>
            <h3>
                2.2.4 Uncertainty in values read directly from a measuring
                device
            </h3>
            <p>
                The minimum uncertainty in an observation made directly from a
                measuring device is equal to half of the smallest readable
                graduation on the scale of the device:
            </p>
            <div className="parent">
                <div className="colored">
                    <p>Uncertainty due to measuring instrument</p>
                    <img src={pic5} alt="" />
                    <p>Analogue devices</p>
                    <br />
                    <p>
                        This ammeter has graduations in milliamperes. Any
                        observation made with this device will have an
                        uncertainty of ±0.5 mA.
                    </p>
                </div>
                <div className="colored">
                    <p>± 1 / 2 × (instrument graduation)</p>
                    <img src={pic6} alt="" />
                    <p>Digital devices</p>
                    <br />
                    <p>
                        This digital multimeter in 20VDC mode measures in
                        increments of 0.01 V. Any observation made with this
                        device in this mode will have an uncertainty of ±0.005 V
                    </p>
                </div>
            </div>
            <br />
            <h3>2.2.5 Uncertainties due to environmental or human factors</h3>
            <br />
            <p>
                Some uncertainties may be due to the physical conditions or
                idiosyncrasies in the equipment you are using, for example:
                parallax, unstable oscillations, or noise
            </p>
            <br />
            <p>
                The following are some ways to estimate and quantify these
                uncertainties:
            </p>
            <br />
            <ul>
                <li>
                    Sometimes the smallest graduation on a scale is not
                    necessarily readable. For example, you may be using a metre
                    rule marked in millimetres to measure the bounce height of a
                    ball, but because the ball moves so quickly, you may only be
                    able to measure it to the nearest 5 centimetres. In this
                    case, your measurements would have an uncertainty of ±2.5
                    cm.
                </li>
                <li>
                    • In the case of an unstable, fluctuating reading from a
                    device – make a measurement of the highest value and the
                    lowest value it fluctuates between. Determine the range
                    between these values and divide it by two
                </li>
                <li>
                    In the case of parallax – estimate the maximum probable
                    observation you could make and the minimum probable
                    observation, find the range between them and divide by two.
                </li>
            </ul>
            <br />
            <p>
                For example, a light meter reading fluctuates between 979 lux
                and 1057 lux. The measurement would be halfway between the two
                numbers (1020 lux) and the uncertainty would be
            </p>
            <p>∆I = ± (1057 − 979) / 2 = ±39 lux</p>
            <br />
            <p>It would be reported as 1020 ± 40 lux.</p>
            <h3>
                2.2.6 Uncertainty in the average from a series of repeated
                measurements
            </h3>
            <br />
            <p>
                When an average is calculated from repeated observations in a
                series of trials, the uncertainty in the average can be
                calculated as half the range between the highest and lowest
                measurement.
            </p>
            <br />
            <p>
                For example, in the series of observations 21.20 s, 20.33 s and
                22.01 s, the average and its uncertainty is 21.8 ± 0.2 s
                (remember, the uncertainty should be given to one significant
                figure, and the average should be to the same decimal place.).
            </p>
            <br />
            <p>
                This method is appropriate for when the number of repeated
                trials is small (i.e. 3 to 5 trials). More sophisticated
                techniques to calculate uncertainty can be used if the number of
                trials is sufficiently large (e.g. standard deviations).
            </p>
            <div className="parent">
                <div className="colored">
                    Uncertainty in average (when there are many trials)
                </div>
                <div className="colored">±1 standard deviation</div>
                <div className="colored">
                    Uncertainty in average (when there are only few trials)
                </div>
                <div className="colored">
                    ± (highest trial − lowest trial) / 2
                </div>
                <br />

                <h3>2.2.7 Uncertainty in the slope of a line of best fit</h3>

                <p>
                    There is uncertainty associated with the gradient of a line
                    of best fit (LOBF).
                </p>
                <br />
                <p>
                    To estimate its uncertainty, the data points should be
                    plotted with their respective error bars (the length of an
                    error bar is the uncertainty in each data point).
                </p>
                <br />

                <p>
                    Two lines of worst fit (LOWF) should then be drawn. One line
                    of worst fit is the shallowest straight line that can be
                    drawn yet passing through the error bars of as many data
                    points as possible. Similarly, the other line of worst fit
                    is the steepest straight line that can be drawn.
                </p>

                <p>
                    The uncertainty in the gradient of a line of best fit is
                    then half of the difference between the gradients of the
                    maximum and minimum lines of worst fit
                </p>
            </div>
            <div className="parent">
                <div className="colored">
                    Uncertainty in line of best fit (LOBF) gradient
                </div>
                <div className="colored">
                    ± (max LOWF gradient − min LOWF fit gradient) / 2
                </div>
            </div>
            <img src={pic7} alt="" />
            <p>
                If a value of interest is extracted from the gradient using
                mathematical operations, then the value’s uncertainty can be
                determined using the method for when uncertain values are
                multiplied or divided (see 2.2.9 Combining uncertainties – when
                values are multiplied or divided).
            </p>
            <br />
            <p>
                Usually, the relative uncertainty in the LOBF gradient is the
                same as the relative uncertainty in the value of interest that
                you are extracting from it.
            </p>
            <p>∆a / a = ∆LOBF gradient / LOBF gradient</p>
            <br />
            <p>
                For example, if we are to use the data from a pendulum’s T2 vs l
                graph to determine the acceleration due to gravity g, we can
                infer that g = 4π<sup>2</sup> / LOBF gradient (see 4.2
                Linearized equations). Note how we have conducted a division
                operation here. Since 4 is an integer and π is a constant, they
                do not have uncertainties. Thus the relative uncertainty in g is{" "}
                <br />
                ∆g / g = ∆LOBF gradient / LOBF gradient <br />
                If the other values in the term that we have equated with the
                gradient had uncertainties, then we would just add their
                relative uncertainties, as in section 2.2.9.
            </p>
            <h3>2.2.9 Combining uncertainties</h3>
            <br />
            <p>
                When uncertain quantities are used in calculations, then the
                results are more uncertain.
            </p>
            <br />
            <b>—Uncertainties when values are added or subtracted</b>
            <p>
                Consider the bars below. The black lines are the approximate
                sizes of the bars and the shaded areas are the uncertainties.
            </p>
            <br />
            <img src={pic8} alt="" />
            <p>When we combine them into a longer bar, we can determine: </p>
            <ul>
                <li>
                    • the approximate length <sup>approx</sup> = 6.0 cm + 4.0 cm
                    = 10.0 cm
                </li>
            </ul>
            <p>
                but also because of the uncertainties of each bar, we can infer:
            </p>
            <ul>
                <li>
                    • a minimum possible length, L <sup>min</sup> = 5.5 cm + 3.5
                    cm = 9.0 cm
                </li>
                <li>
                    • a maximum possible length, L <sup>max</sup> = 6.5 cm + 4.5
                    cm = 11.0 cm
                </li>
            </ul>

            <img src={pic9} alt="" />

            <p>
                We can then report the length of the combined bar as 10 ± 1 cm.
                This demonstrates that that the uncertainties (0.5 cm and 0.5
                cm) have simply been added together. So when{" "}
                <b>adding or subtracting values</b>, their{" "}
                <b>absolute uncertainties add</b> together.{" "}
            </p>

            <div className="parent">
                <div className="colored">When you do these</div>
                <div className="colored">Do this</div>
                <div className="colored">
                    a = b + c + ... <br />a = b -c ...{" "}
                </div>
                <div className="colored">∆a = ∆b + ∆c + ...</div>
            </div>

            <p>Further example:</p>
            <br />
            <p>
                If a can of Milo initially has a mass of 151 ± 2 g and a week
                later has a mass of 98 ± 2 g, then the mass difference is
            </p>

            <div className="center">
                <p>mass difference = 151 g − 98 g = 53 g</p>
                <p>uncertainty in mass difference = 2 g + 2 g = 4 g</p>
            </div>

            <p>Thus the mass difference and uncertainty is 53 ± 4 g.</p>
            <br />

            <b>—Uncertainties when values are multiplied or divided</b>
            <br />
            <p>
                Consider the rectangle below. The black line is the approximate
                size of the rectangle and the shaded area is the uncertainty.{" "}
            </p>
            <img src={pic10} alt="" />
            <p>
                We can multiply the approximate lengths of the sides to
                determine:
            </p>

            <ul>
                <li>
                    the approximate area of the rectangle, A <sub>approx</sub> =
                    6 cm × 4 cm = 24 cm <sup>2</sup>
                </li>
            </ul>

            <p>but because of the uncertainties, we can infer:</p>

            <ul>
                <li>
                    a minimum possible area, A <sub>min</sub> = 5.5 cm × 3.5 cm
                    = 19 cm <sup>2</sup>
                </li>
                <li>
                    {" "}
                    a maximum possible area, A <sub>max</sub> = 6.5 cm × 4.5 cm
                    = 29 cm <sup>2</sup>
                </li>
            </ul>

            <p>
                So we can report the area of the rectangle as 24 ± 5 cm
                <sup>2</sup>
            </p>

            <p>
                It’s a bit harder to see here, but when you
                <b>multiply or divide </b>values,
                <b>
                    their relative uncertainties add together to give the
                    relative uncertainty in the result.
                </b>
            </p>

            <div className="parent">
                <div className="colored">When you do these</div>
                <div className="colored">Do this</div>
                <div className="colored">
                    a = b * c * ... <br /> a = b / c / ...
                </div>
                <div className="colored">
                    ∆a / a = (∆b / b) + (∆c / c) + ...
                </div>
            </div>

            <p>Let’s try this for the uncertainty for our rectangle example.</p>

            <img src={pic11} alt="" />
            <p>
                which is what we found geometrically. Further example
                (uncertainty in a squared value)
            </p>
            <br />
            <p>
                • Given that the period of a pendulum T = 2.35 ± 0.03 s, then T2
                (=T×T) and its uncertainty:
            </p>
            <br />
            <p>
                T <sup>2</sup> = (2.35 s) <sup>2</sup> = 5.52 s <sup>2</sup>
            </p>
            <img src={pic12} alt="" />
            <br />
            <p>
                Thus T <sup>2</sup> = 5.5 ± 0.1 s <sup>2</sup>
            </p>
        </div>
    );
};

export default Strand2;
