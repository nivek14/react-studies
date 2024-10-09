import React from 'react'

interface Props {
    text: string,
    number: number,
    isActive: boolean,
    category: Category
}

export enum Category {
    JS = "JS",
    TS = "TS",
    P = "P"
}

const SecondComponent = ({ text, number, isActive, category }: Props) => {
    return (
        <div>
            {isActive && (
                <>
                    <h1>Segundo componente</h1>
                    <p>{text}</p>
                    <p>{number}</p>
                </>
            )}
            <h4>{category}</h4>
        </div>
    )
}

export default SecondComponent