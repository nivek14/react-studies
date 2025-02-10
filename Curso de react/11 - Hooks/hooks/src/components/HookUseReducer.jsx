import React from 'react'
import { useReducer, useState } from 'react'

const HookUseReducer = () => {

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    })

    const initialTask = [
        { id: 1, text: "fazer uma coisa" },
        { id: 2, text: "fazer outra coisa" }
    ];

    const taskReducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                }

                setTaskText("");

                return [...state, newTask];
        }
    }

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTask] = useReducer(taskReducer, initialTask);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTask({ type: "ADD" });
    }

    return (
        <div>
            <h1>UseReducer</h1>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar número</button>
            <h3>Tarefas</h3>
            <form onSubmit={handleSubmit}>
                <input typeof='text' onChange={(e) => setTaskText(e.target.value)} value={taskText} />
                <input type="submit" value="enviar" />
            </form>
            {tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
            ))}
        </div>
    )
}

export default HookUseReducer