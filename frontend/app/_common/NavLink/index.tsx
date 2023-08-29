import React from "react";
import Link from "next/link";
import Button from "@/app/_common/Button";
import './index.css'
import styles from './index.module.css';
import {usePathname} from "next/navigation";


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
    const pathname = usePathname()

    if (type === NavLinkType.text)
        return (
            <Link
                href={href}
                className={pathname === href && styles.simpleLinkActive}
            >
                {text}
            </Link>
        )

    if (type === NavLinkType.button)
        return (
            <Link href={href}>
                <Button>
                    {text}
                </Button>
            </Link>
        )
}
