'use client'
import React from "react";
import NavLink from "@/app/_common/NavLink";
import styles from './index.module.css';
import './index.css';


export default function Summary() {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.secondaryH}>
                Developer
            </h4>
            <h3 className={styles.primaryH}>
                John Doe
            </h3>
            <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
            </span>
            <NavLink href={'/feedback'} text={'Contact me'} type='button'/>
        </div>
    )
}
