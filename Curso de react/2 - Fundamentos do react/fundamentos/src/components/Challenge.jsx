const Challenge = () => {

    const x = 15;
    const y = 20;

    const calculator = (x, y) => {
        console.log(x + y);
        console.log(x - y);
        console.log(x * y);
        console.log(x / y);
        console.log(x % y);
    }

    return (
        <div>
            <h1>Valor de x: {x}</h1>
            <h1>Valor de y: {y}</h1>
            <button onClick={() => console.log(x + y)}>Calcular</button>
            {calculator(x, y)}
        </div>
    )
};

export default Challenge;