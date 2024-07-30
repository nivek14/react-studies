const Events = () => {

    const handleMyEvent = () => {
        console.log("evento ativado")
    }

    // utilizando uma função para retornar jsx fora do return
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando um h1</h1>
        }
        else return <h2>Renderizando um h2</h2>
    }

    return (
        <div>

            <div>
                {/*Chamando uma função externa*/}
                <button onClick={handleMyEvent}>clicar</button>
            </div>

            <div>
                {/*Fazendo uma função no próprio evento. Usar só quando for algo muito simples*/}
                <button onClick={() => console.log("clicou")}>clicar2</button>
            </div>

            {renderSomething(false)}

        </div>
    )
};

export default Events;