import React, {MouseEventHandler} from "react";
import './index.css';
import styles from './index.module.css';

interface ButtonProps {
    children: React.ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined
}


export default function Button(props: ButtonProps) {
    const {children, onClick} = props
    return <button
        className={styles.buttonPrimaryContained}
        onClick={onClick}
    >
        {children}
    </button>
}
