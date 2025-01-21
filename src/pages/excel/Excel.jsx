import React from "react";
import "./Excel.css";
import pic1 from "../../assets/excel/Снимок экрана 2025-01-08 145307.png";
import pic2 from "../../assets/excel/Снимок экрана 2025-01-08 153025.png";
import pic3 from "../../assets/excel/Снимок экрана 2025-01-08 145346.png";
import pic4 from "../../assets/excel/Снимок экрана 2025-01-08 145359.png";
import pic5 from "../../assets/excel/Снимок экрана 2025-01-08 145502.png";
import pic6 from "../../assets/excel/Снимок экрана 2025-01-08 145637.png";
import pic7 from "../../assets/excel/Снимок экрана 2025-01-08 145522.png";
import pic8 from "../../assets/excel/Снимок экрана 2025-01-08 145601.png";
import pic9 from "../../assets/excel/Снимок экрана 2025-01-08 145616.png";
import pic10 from "../../assets/excel/Снимок экрана 2025-01-08 145637.png";
import pic11 from "../../assets/excel/Снимок экрана 2025-01-18 185713.png";
import pic12 from "../../assets/excel/Снимок экрана 2025-01-18 185740.png";
import pic13 from "../../assets/excel/Снимок экрана 2025-01-18 185801.png";
import pic14 from "../../assets/excel/Снимок экрана 2025-01-18 185834.png";
import pic15 from "../../assets/excel/Снимок экрана 2025-01-18 185856.png";
import pic16 from "../../assets/excel/Снимок экрана 2025-01-18 185912.png";
import pic17 from "../../assets/excel/Снимок экрана 2025-01-18 185925.png";
import pic18 from "../../assets/excel/Снимок экрана 2025-01-18 185937.png";
import pic19 from "../../assets/excel/Снимок экрана 2025-01-18 185952.png";
import pic20 from "../../assets/excel/Снимок экрана 2025-01-18 190002.png";
import pic21 from "../../assets/excel/Снимок экрана 2025-01-18 190013.png";

import pic22 from "../../assets/excel/Снимок экрана 2025-01-18 190024.png";

import pic23 from "../../assets/excel/Снимок экрана 2025-01-18 190035.png";
import pic24 from "../../assets/excel/Снимок экрана 2025-01-18 190044.png";

const Excel = () => {
    return (
        <div className="excel">
            <h1>Excel Plan</h1>
            <p>
                1. Open Excel file <br />
                2. All work should be in one sheet <br />
                3. Create Table 1 for raw data. The title of the table should be
                “Table 1. Raw Data”. <br />
                4. Excel sheet consists of many cells, which have their own
                names, for example the first cell is A1
            </p>
            <img src={pic1} alt="" />
            <p>
                5. The first column will have Independent variable of the
                experiment. The top cell will contain the parameter’s name and
                the bottom cells will have the measured numbers. <br />
                6. Fill the first cell in the following way:
            </p>
            <img src={pic2} alt="" />
            <p>7. Symbol “±” can be found in “ВСТАВКА”→”Символ”.</p>

            <img src={pic3} alt="" />
            <img src={pic4} alt="" />
            <p>
                8. Combine two cells in order to make a general for the first
                two rows. Use “Объединить и переместить в центре” function.
            </p>
            <img src={pic5} alt="" />
            <p>
                9. Increase the height of cell two times (for example, from 15
                to 30)
            </p>
            <img src={pic6} alt="" />
            <img src={pic7} alt="" />
            <p>The result is shown below:</p>
            <img src={pic8} alt="" />
            <p>
                10. The text should not be one line, so we use wrapping, which
                called “Перенести текст”.
            </p>
            <img src={pic9} alt="" />
            <p>11. Increase the width of cell too</p>
            <img src={pic10} alt="" />
            <img src={pic11} alt="" />
            <p>12. The information should be at the center</p>
            <img src={pic12} alt="" />
            <p>
                13. The next columns will be used for Dependent variable of the
                experiment. The quantity of columns depends on the number of
                experiments. Usually, it is equal to 5
            </p>
            <p>
                14. The top cell will contain the parameter’s name and the
                serial number of the experiment will be indicated under this
                cell. For example, assume that we will make a 5 experiments.
            </p>
            <img src={pic13} alt="" />
            <p>
                15. If the number of experiments is equal to 5, then combine 5
                cells in the first row. You should use “Объединить и переместить
                в центре” function, as you did before.
            </p>
            <img src={pic14} alt="" />
            <p>16. Put the number of experiment for one IDV.</p>
            <img src={pic15} alt="" />
            <p>17. Create borders for cells.</p>
            <img src={pic16} alt="" />
            <img src={pic17} alt="" />
            <p>
                18. The next column will have an <b>Average DV</b> values.
            </p>
            <img src={pic18} alt="" />
            <p>
                19. Combine and put the text on the center by using the same
                procedure.
            </p>
            <img src={pic19} alt="" />
            <p>
                20. The next column will have an{" "}
                <b>Uncertainty in Average DV </b>values.
            </p>
            <img src={pic20} alt="" />
            <p>
                21. Combine and put the text on the center by using the same
                procedure.
            </p>
            <p>22. The ready Raw Data table</p>
            <img src={pic21} alt="" />
            <p>
                23. Use the formula of AVERAGE to find mean value of DV
                =СРЗНАЧ(B3:F3)
            </p>
            <img src={pic22} alt="" />
            <p>
                24. Use function: =(МАКС(B3:F3)-МИН(B3:F3))/2 to find
                Uncertainty in Average DV
            </p>
            <img src={pic23} alt="" />
            <p>
                25. Round of Average DV to the same number of decimal place as
                Uncertainty in Average DV
            </p>
            <img src={pic24} alt="" />
        </div>
    );
};

export default Excel;
