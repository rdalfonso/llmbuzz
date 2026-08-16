"use client";

import styles from "./Search.module.css";

interface SearchProps {
    term: string;
}

export default function Search({
    term = "",
}: SearchProps) {


    return (
        <div className={styles.search} >
            <form>
                <input type="text" placeholder="Search news" className={styles.searchInput} />
            </form>
        </div>
    );
}
