import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.navbar}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? styles.isActive : "")}>Home</NavLink>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? styles.isActive : "")}>Login</NavLink>
                    <NavLink to="/register" className={({ isActive }) => (isActive ? styles.isActive : "")}>Register</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.isActive : "")}>Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar