import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (<section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
       <div className={styles.content}>
        <img 
        src={getImageUrl("about/aboutImg.png")}
       alt="Me with a laptop"
       className={styles.aboutImg}
       /> 
       <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}><
            img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
       <div className={styles.aboutItemText}>
        <h3>Frontend Developer</h3>
        <p>
            I'm a frontend developer with a passion for creating beautiful and responsive web applications and optimized sites.
        </p>
       </div>
       </li>
       <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
       <div className={styles.aboutItemText}> 
        <h3>Backend Developer</h3>
        <p>
            I have experience working with databases and server-side languages to create full-stack applications.
        </p>
       </div>
       </li >
       <li className={styles.aboutItem}>
        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon"/>
       <div className={styles.aboutItemText}>
        <h3>UI Designer</h3>
        <p>
            I have an eye for design and enjoy creating beautiful user interfaces for web applications.
        </p>
       </div>
       </li>
       </ul>
       </div>
    </section>
    );
};

