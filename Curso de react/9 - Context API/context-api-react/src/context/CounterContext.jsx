// criando o contexto
import { createContext, useState } from "react";
export const CounterContext = createContext();

// criando o provider
export const CounterContextProvider = ({ children }) => {

    const [counter, setCounter] = useState();

    return (
        <CounterContextProvider.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContextProvider.Provider>
    );
};