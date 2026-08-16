"use client";

import styles from "./Pagination.module.css";

interface PaginationProps {
    count: number;
}

export default function Pagination({
    count = 0,
}: PaginationProps) {


    return (
        <div className={styles.container}>
            Last week, we found <span className={styles.count}>{count}</span> result{count !== 1 ? "s" : ""}.
        </div >
    );
}
