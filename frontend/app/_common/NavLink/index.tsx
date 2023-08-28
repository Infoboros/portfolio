import React from "react";
import Link from "next/link";
import Button from "@/app/_common/Button";
import './index.css'
import styles from './index.module.css';


export enum NavLinkType {
    text = 'text',
    button = 'button'
}

export interface NavLinkProps {
    href: string
    text: string,
    type: NavLinkType
}

export default function NavLink(props: NavLinkProps) {
    const {href, text, type} = props

    if (type === NavLinkType.text)
        return (
            <Link href={href}>
                {text}
            </Link>
        )

    if (type === NavLinkType.button)
        return (
            <Button>
                <Link className={styles.buttonLink} href={href}>
                    {text}
                </Link>
            </Button>
        )
}
