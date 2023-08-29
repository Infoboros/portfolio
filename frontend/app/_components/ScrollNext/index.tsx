import React from "react";


interface ScrollNextProps {
    className: string
}

export default function ScrollNext(props: ScrollNextProps) {
    const {className} = props
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 11L12 17L5 11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 7L12 13L5 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
