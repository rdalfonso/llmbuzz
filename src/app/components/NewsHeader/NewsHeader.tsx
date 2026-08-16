"use client";

import styles from "./NewsHeader.module.css";

interface NewsHeaderProps {
    count: number;
    headline: string;
}

export default function NewsHeader({
    count = 0,
    headline = "Top stories for August 14th, 2026",
}: NewsHeaderProps) {
    return (
        <>
            <h2 className={styles.header}>{headline}</h2>
            <p className={styles.result}>
                {count} result{count !== 1 ? "s" : ""}
            </p>
        </>
    );
}
