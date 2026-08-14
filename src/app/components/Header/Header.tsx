'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';

export default function Header() {
    const router = useRouter();
    const toggle = false;

    // Redirect on successful signout
    const handleLogout = async () => {
        router.push('/login');
    };


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.svg}>
                    <Logo />&nbsp;&nbsp;
                </span>
                <span className={styles.svg}>
                    <Link href="/">
                        llmbuzz.com
                    </Link>
                </span>

            </div>
            <div className={styles.actions}>
                <NavLinks />

                {toggle ? (
                    <>
                        <Link href="/signup" className={styles.signupButton}>
                            Join now
                        </Link>
                        <Link href="/login" className={styles.loginButton}>
                            Sign in
                        </Link>
                    </>
                ) : (
                    <>
                        <span><img src="/images/cj_icon_person.png" alt="User Avatar" height="20" width="20" /></span>
                        <Link
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            className={styles.logoutButton}
                        >
                            Logout
                        </Link>
                    </>
                )}
            </div>
        </header >
    );
}