import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        const user = {
            name,
            email,
            password
        }

        if (password !== passwordConfirm) {
            setError("As senhas precisam ser iguais");
            return;
        }

        const res = await createUser(user);

    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="name" required placeholder="Nome do usuário" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" required placeholder="Email do usuário" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder="Senha do usuário" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password" name="passwordConfirm" required placeholder="Confirmar senha do usuário" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                </label>
                {!loading && <button className="btn">Cadastrar</button>}
                {loading && <button className="btn" disabled>Aguarde...</button>}
                {error && <p className="error">{error}</p>}
            </form>
        </div >
    )
}

export default Register