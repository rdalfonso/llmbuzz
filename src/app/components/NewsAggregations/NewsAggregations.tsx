"use client";

import { useState } from "react";
import styles from "./NewsAggregations.module.css";

interface Aggregations {
    key: string;
    count: number;
}

interface NewsAggregationsProps {
    initialAggregations?: Aggregations[];
}

export default function NewsAggregations({
    initialAggregations = [],
}: NewsAggregationsProps) {
    const [aggregations, _] = useState<Aggregations[]>(initialAggregations);

    if (!aggregations || aggregations.length === 0) {
        return (
            <div className={styles.container}>
                <h2 className={styles.header}>Filter By</h2>
                <p className={styles.header}>No results found.</p>
            </div>
        );
    }

    const companies = aggregations['by_company'];
    const models = aggregations["by_model"];


    return (
        <div className={styles.container}>
            <>
                <h2 className={styles.header}>Filter By</h2>

                <p className={styles.section}>Companies</p>
                <ul className={styles.list}>
                    {companies?.map((agg: Aggregations) => (
                        <li key={agg.key} className={styles.listItem}>
                            <span className={styles.title}>{agg.key}</span>
                            <span className={styles.count}> ({agg.count})</span>
                        </li>
                    ))}
                </ul>

                <p className={styles.section}>Models</p>
                <ul className={styles.list}>
                    {models?.map((agg: Aggregations) => (
                        <li key={agg.key} className={styles.listItem}>
                            <span className={styles.title}>{agg.key}</span>
                            <span className={styles.count}> ({agg.count})</span>
                        </li>
                    ))}
                </ul>
            </>
        </div >
    );

}
