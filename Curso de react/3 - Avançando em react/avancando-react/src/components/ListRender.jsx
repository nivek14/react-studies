import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["a", "b", "c"]);

    const [users, setUsers] = useState([
        { id: 1, name: "test1", age: 30 },
        { id: 2, name: "test2", age: 20 },
        { id: 3, name: "test3", age: 28 },
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })

    };

    return (
        <div>

            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>

            <button onClick={deleteRandom}>test</button>
        </div>
    )
};

export default ListRender;