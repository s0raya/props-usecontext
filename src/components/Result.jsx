import { useCalculator } from "../context/CalculatorProvider";
import { Link } from "react-router-dom";

function Result() {
    const {result, number, resetCalculator} = useCalculator();

    const handleReset = () => {
        resetCalculator();
    }

    return (
        <div className="content">
            <h2>Selected numbers: {number ? number.join('+') : ''}</h2>
            <h1>The result is: {result}</h1>
            <button onClick={resetCalculator}>Reset</button>
            <Link to="/">Go calculator</Link>
        </div>
    );
}

export default Result;