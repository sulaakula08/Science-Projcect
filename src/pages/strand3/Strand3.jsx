import React from "react";
;

import pic1 from "../../assets/strand3/Снимок экрана 2025-03-02 164201.png";
import pic2 from "../../assets/strand3/Снимок экрана 2025-03-02 164321.png";

const Strand3 = () => {
    return (
        <div className="strand3">
            <h1>3 – Reliability and validity</h1>
            <br />
            <h2>3.1 Reliability</h2>
            <br />
            <p>
                Reliability refers to the consistency in results – repetition
                returns results that lie within a small margin of error. There
                are two ways of looking at reliability:
            </p>
            <ul>
                <li>
                    • Internal reliability is when repeated trials within an
                    experiment are consistent. This is sometimes also called
                    precision
                </li>
                <li>
                    External reliability is when the results from one experiment
                    are consistent with those from other experiments that are
                    conducted the same way.
                </li>
            </ul>
            <p>
                When assessing reliability, sometimes it is enough to make broad
                subjective judgements (for example, “overall, the results appear
                to be roughly consistent”) but it is preferable to fall back on
                some kind of quantitative basis.
            </p>
            <br />
            <h3>3.1.1 Evaluating and assessing reliability</h3>
            <br />
            <p>
                One way to assess reliability might be to quantify the spread of
                trials around an average – large spreads are unreliable, and
                smaller spreads are reliable.
            </p>
            <img src={pic1} alt="" />
            <p>Data from reliable trials are clustered closely.</p>
            <br />
            <img src={pic2} alt="" />
            <p>Data from unreliable trials are much more spread out.</p>
            <br />
            <p>
                We could judge a set of trials to be reliable if the relative
                uncertainty of the trials is less than some arbitrary limit,
                say, less than 5%.
            </p>
            <p>
                For example, the following measurements of the same resistor
                were collected. The average is shown and the uncertainty was
                calculated (cf. §2.2.6 – Uncertainty in the average from a
                series of repeated measurements):
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Trial 1</th>
                        <th>Trial 2</th>
                        <th>Trial 3</th>
                        <th>Average and Uncertainty</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>94.8 Ω</td>
                        <td>106.3 Ω</td>
                        <td>100.2 Ω</td>
                        <td>100 ± 6 Ω</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <p>
                The relative uncertainty of this data set is 6Ω / 100Ω or 6%.
                According to our arbitrary criteria, these trials are not
                reliable. Perhaps it might be better to say that they have low
                reliability.
            </p>
            <h3>3.1.2 Addressing the causes of unreliability</h3>
            <p>
                The opposite of reliability can be said to be variability.
                Recall that random errors cause repeated observations to vary
                randomly, so reducing the effects of random errors are a way to
                improve reliability
            </p>
            <br />
            <p>
                Note that simply repeating trials or experiments on their own
                does not improve reliability. Repetition can help to assess
                reliability, but unless the underlying causes are addressed,
                then repetition may only continue displaying variability.
            </p>
            <br />
            <h2>3.2 Validity</h2>
            <br />
            <p>
                A valid experiment is one that examines what is intended – the
                relationship between an independent variable and a dependent
                variable. There must be minimal interference in this
                relationship by other factors – these other factors might be the
                variables that we should control (hold constant), or the level
                of care with which we conduct the experiment and make
                measurements.
            </p>
            <br />
            <p>
                If we only vary the independent variable and keep all the other
                variables the same, then we can be confident that the effects
                that we observe are due only to the changes that we have made.
                We can say that the experiment is valid
            </p>
            <br />
            <p>
                However, if we do not keep the other variables the same, then we
                cannot be certain that our observations are only due to the
                independent variable. This would mean that the experiment would
                be invalid
            </p>{" "}
            <br />
            <p>
                If we are careless when we conduct experiments, make inaccurate
                measurements, or use inappropriate equipment, then his also
                invalidates the experiment.
            </p>{" "}
            <br />
            <h3>3.2.1 Assessing validity</h3>
            <br />
            <p>
                Remember that you should only vary the independent variable and
                make observations of the dependent variable.
            </p>
            <br />
            <p>
                Then you have to ask: have all the other variables been held
                constant?
            </p>
            <ul>
                <li>
                    • If yes, then you can be confident that the experiment and
                    its results are valid.
                </li>
                <li>
                    • If no, then there are doubts about the validity of the
                    experiment and its results.
                </li>
            </ul>
            <br />
            <h3>3.2.2 Examining the data for indicators of invalidity</h3>
            <br />
            <p>
                It might be difficult to account for absolutely all the
                variables that are present in the space where you are conducting
                your experiment. So we can look to the data to see if we have
                allowed any variables to go uncontrolled:
            </p>
            <div className="parent">
                <div>Unreliability in data</div>
                <div>
                    Uncontrolled variables can cause variability in repeated
                    measurements.
                </div>
                <div>Unreliable results → invalid experiment</div>
            </div>
            <div className="parent">
                <div>Inaccurate data</div>
                <div>
                    Random errors are indicated by variability in results, often
                    caused by uncontrolled variables.
                </div>
                <div>Inaccurate results → invalid experiment</div>
            </div>
            <br />
            <p>
                Note that an inaccurate and unreliable experiment is necessarily
                invalid, so efforts to improve accuracy and reliability will
                also improve validity.
            </p>
        </div>
    );
};

export default Strand3;
