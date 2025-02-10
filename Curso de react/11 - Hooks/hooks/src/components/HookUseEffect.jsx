import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {

    useEffect(() => {
        console.log("executando");
    })

    useEffect(() => {
        console.log("executando");
    }, [])

    const [number, setNumber] = useState(1);
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        console.log("executando");
    }, [anotherNumber])

    const changeSomething = () => {
        setNumber(number + 1);
    }

    return (
        <div>
            <h2>UseEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>executa</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>executa</button>
        </div>
    )
}

export default HookUseEffect