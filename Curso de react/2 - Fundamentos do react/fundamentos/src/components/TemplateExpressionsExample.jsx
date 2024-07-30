const TemplateExpressionsExample = () => {

    const x = 10;
    const y = 5;
    const data = {
        age: 26,
        job: "guitar player",
    };

    return (
        <div>
            <h1>Resultado: {x + y}</h1>
            <h1>Idade {data.age} anos e profissão {data.job}</h1>
        </div>
    )
};
export default TemplateExpressionsExample;