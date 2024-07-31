import { useState } from 'react'
import './MyForms.css'

function MyForms({ user }) {

    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviando form");
        console.log(name, email, bio, role);
        setName("");
        setEmail("");
        setBio("");
    };

    console.log(name);
    console.log(email);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name} />
                </div>
                <label>
                    <span>Email</span>
                    <input type="email" name='email' placeholder='Seu email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                <label>
                    <span>Bio: </span>
                    <textarea name="bio" placeholder="descrição do user" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                <label>
                    <span>Função: </span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForms