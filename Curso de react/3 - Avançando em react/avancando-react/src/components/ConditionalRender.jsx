import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState("test");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>se x for true, sim.</p>}
            {!x && <p>se x for false, sim.</p>}
            {name === "test" ? (
                <div>
                    <p>é test</p>
                </div>
            ) : (
                <div>
                    <p>não é test</p>
                </div>
            )}
            <button onClick={() => setName("test2")}>vefica nome</button>
        </div>
    )

};

export default ConditionalRender;