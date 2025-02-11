import React from 'react'
import { useState, useEffect, useMemo } from 'react'


const HookUseMemo = () => {

    const [number, setNumber] = useState();

    // desta forma o react entende que não precisa retornar este array a cada renderização
    const premiumNumbers = useMemo(() => {
        return ["0", "100", "666"];
    }, []);

    useEffect(() => {
        console.log("premium numbers foi alterado!");
    }, [premiumNumbers]);

    return (
        <div>
            <h2>useMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>acertou</p> : ""};
        </div>
    )
}

export default HookUseMemo