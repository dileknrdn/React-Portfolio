import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    return <nav ClassName={styles.navbar}>
        <a ClassName={styles.title} href="/">Portfolio</a>
        <div ClassName={styles.menu}>
            <ul ClassName={styles.menuItems}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>


        </div>
    </nav>;
};
