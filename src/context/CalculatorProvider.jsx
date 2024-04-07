import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [number, setNumber] = useState([]);
    const [result, setResult ] = useState("");

    const addNumbers = (num) => {
        setNumber([...number, num.toString()]);
    };

    const sumNumbers = () => {
        const sum = number.reduce((acc, curr) => acc + parseInt(curr), 0);
        setResult(sum.toString());
        return sum;
    }

    const resetCalculator = () => {
        setNumber([]);
        setResult("");
    };

    return (
        <CalculatorContext.Provider value={{
            number,
            result,
            addNumbers,
            sumNumbers,
            resetCalculator
        }}
        >
            {children}
        </CalculatorContext.Provider>
    );
};

export const useCalculator = () => useContext(CalculatorContext);