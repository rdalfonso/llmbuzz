import Link from 'next/link';
import styles from './NavLinks.module.css';

export const NavLinks = () => {
    return (
        <>
            <div className={styles.icons}>
                <Link href="/week">
                    New
                </Link> |
                <Link href="/last">
                    Previous
                </Link> |
                <Link href="/trending">
                    Trending
                </Link> |
                <Link href="/search">
                    Search
                </Link> |
            </div>
        </>
    );
}