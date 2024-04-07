import { useState } from "react";
import { Link } from "react-router-dom";
import { useCalculator } from "../context/CalculatorProvider";

function Calculator() {
    const { sumNumbers, addNumbers } = useCalculator();
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    const [numberDisplay, setNumberDisplay] = useState('');

    const handleNumberClick = (num) => {
        addNumbers(num);
        setNumberDisplay(num);
    }
  
    return (
        <>
        <div className="content">
            <h1>Calculator</h1> 
                <div className="selectedNumber">Selected number: {numberDisplay}</div>
                <div className="calculator">
                    {numbers.map((number, index) => (
                        <span key={index} className="number" onClick={() => handleNumberClick(number)}>{number}</span>
                    ))}
                </div>
                <Link to='/result' onClick={sumNumbers}>Resultado</Link>
        </div>
        </>
    )
}

export default Calculator;