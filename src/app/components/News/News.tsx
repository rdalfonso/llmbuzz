"use client";

import { useState } from "react";
import styles from "./News.module.css";

interface SearchDocument {
    id: string;
    title: string;
    link: string;
    snippet?: string;
    source?: string;
    image?: string;
    model?: string;
    created_at?: string;
}

interface NewsProps {
    initialDocuments?: SearchDocument[];
    initialTotal?: number;
}

export default function News({
    initialDocuments = [],
    initialTotal = 0,
}: NewsProps) {
    const [documents, _] = useState<SearchDocument[]>(initialDocuments);


    const total = documents.length > 0 ? initialTotal : 0;

    return (
        <div className={styles.container}>
            <>
                <h2 className={styles.header}>Top stories for August 14th, 2026</h2>
                <p className={styles.result}>
                    {total} result{total !== 1 ? "s" : ""}
                </p>

                {documents.length === 0 ? (
                    <p className={styles.none}>No results found.</p>
                ) : (
                    <ul className={styles.list}>
                        {documents.map((doc: SearchDocument) => (
                            <li key={doc.id} className={styles.listItem}>
                                <a
                                    href={doc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.title}
                                >
                                    {doc.title}
                                </a>
                                {doc.snippet && (
                                    <p className={styles.snippet}>{doc.snippet}</p>
                                )}
                                <div className={styles.meta}>
                                    {doc.source && <span>{doc.source}</span>}
                                    {doc.created_at && <span>{doc.created_at}</span>}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        </div>
    );
}
