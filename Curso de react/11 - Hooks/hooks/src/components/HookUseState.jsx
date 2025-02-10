import React from 'react'
import { useState } from 'react';

const HookUseState = () => {

    let userName = "name";
    const [name, setName] = useState("test name");

    const [age, setAge] = useState(18);

    const changeNames = () => {
        userName = "name name";
        setName("change state name");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(age);
    }

    return (
        <div>
            <h2>UseState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
            <form onSubmit={handleSubmit}>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value="enviar" />
            </form>
            <p>Você tem {age} anos!</p>
        </div>
    )
}

export default HookUseState