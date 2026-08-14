import type { AppProps } from 'next/app';
import Header from '../app/components/Header/Header';
import './styles.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}
