import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import React from 'react'

const ChangeCounter = () => {

    const { counter, setCounter } = useContext(CounterContext)

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}> clica aqui</button>
        </div>
    )
}

export default ChangeCounter