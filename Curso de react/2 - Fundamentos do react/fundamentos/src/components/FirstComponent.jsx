import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div >
            {/*Só temos uma tag pai, geralmente uma div*/}
            <h1>Meu primeiro componente</h1>
            <MyComponent />
        </div >
    )
};

export default FirstComponent;