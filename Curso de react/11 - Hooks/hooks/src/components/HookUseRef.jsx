import React from 'react'
import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {

    const numberRef = useRef(0);
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0);

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    })

    const inputRef = useRef();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setText("");
        inputRef.current.focus();
    }

    return (
        <div>
            <p>O componente renderizou: {numberRef.current} vezes.</p>
            <p>Counter 1: {counter}</p>
            <b onClick={() => setCounter(counter + 1)}>Contador A</b>
            <p>Counter 2: {counter}</p>
            <b onClick={() => setCounterB(counterB + 1)}>Contador B</b>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="enviar" />
            </form>
        </div>
    )
}

export default HookUseRef