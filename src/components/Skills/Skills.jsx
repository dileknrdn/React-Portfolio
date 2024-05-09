import React from "react";
import skillsData from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css"; 

const Skills = () => {
    return (
        <section id="skills">
             <div className={styles.container}>
            <h2 className={styles.title}>Skills</h2>
            {skillsData.map((skill) => (
                <div key={skill.id} className={styles.skill}>
                    <div className={styles.skillIcon}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        <p>{skill.title}</p> 
                    </div>
                </div>
            ))}
        </div>
    </section>
    );
};

export { Skills }; 

