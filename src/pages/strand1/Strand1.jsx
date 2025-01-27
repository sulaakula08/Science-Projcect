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
                        •Trailing zeroes in a whole number are generally not
                        significant (these zeroes are used to keep the other
                        figures in their correct value places). ‒ 75000 m – the
                        7 and 5 are significant. There are 2 significant
                        figures. ‒ 75420 m – the 7, 5, 4 and 2 are significant.
                        There are 4 significant figures. There is less
                        uncertainty in this number.
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Strand1;
