import React, { useState, ChangeEvent } from 'react'

const State = () => {

    const [text, setText] = useState<String | null>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }


    return (
        <div>
            <p>{text}</p>
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default State