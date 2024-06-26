import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import Resume from "../../../assets/contact/Resume.pdf";

export const Contact = () => {
    return <footer id="contact" className={styles.container}> 
        <div className={styles.text}> 
            <h2>Contact</h2>
            <p> Feel free to reach out! </p>
        </div>
        <ul className={styles.links}> 
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:dileknuredin@hotmail.com">E-mail</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/dilek-nuredin-3040182a2/">Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                <a href="https://github.com/dileknrdn">GitHub</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="RESUME" />
                <a href={ Resume }>RESUME</a>
            </li>
        </ul>
    </footer>;
        
        
}