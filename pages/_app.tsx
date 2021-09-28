import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/header/Header';
import { AppStateProvider } from '../contexts/state';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppStateProvider>
			<Head>
				<title>Ecommerce PoC task</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='my-app-container'>
				<Header />
				<Component {...pageProps} />
			</div>
		</AppStateProvider>
	);
}
export default MyApp;
