import React from "react";
import styles from './index.module.css'
import NavLink from "@/app/_common/NavLink";


export default function Toolbar() {

    return (
        <header className={styles.toolbar}>
            <NavLink href={'/'} text={'Home'} type='text'/>
            <div className={styles.actions}>
                <NavLink href={'/projects'} text={'Projects'} type='text'/>
                <NavLink href={'/feedback'} text={'Contact'} type='button'/>
            </div>
        </header>
    )
}
