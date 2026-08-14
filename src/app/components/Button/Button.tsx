import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
    return (
        <button className={`${styles.button} ${className}`.trim()} {...props}>
            {children}
        </button>
    );
}