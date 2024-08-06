import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.about}>
            <h2>Sobre o Mini <span>Blog</span></h2>
            <p>O projeto consiste de front com react e back com firebase</p>
            <Link to="/post/create" className="btn">Criar Post</Link>
        </div>
    )
}

export default About