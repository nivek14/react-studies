import { NavLink } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

import styles from "./NavBar.module.css";

const NavBar = () => {

    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.navbar}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? styles.isActive : "")}>Home</NavLink>
                    {!user && (
                        <>
                            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.isActive : "")}>Login</NavLink>
                            <NavLink to="/register" className={({ isActive }) => (isActive ? styles.isActive : "")}>Register</NavLink>
                        </>
                    )}
                    {user && (
                        <>
                            <NavLink to="/post/create" className={({ isActive }) => (isActive ? styles.isActive : "")}>Criar post</NavLink>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.isActive : "")}>Dashboard</NavLink>
                        </>
                    )}
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.isActive : "")}>Sobre</NavLink>
                    {user && (
                        <li>
                            <button onClick={logout}>Sair</button>
                        </li>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar