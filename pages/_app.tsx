import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/header/Header';
import { PaginationProvider } from '../contexts/pagination';
import { AppStateProvider } from '../contexts/state';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppStateProvider>
			<PaginationProvider>
				<Head>
					<title>Ecommerce PoC task</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<div className='my-app-container'>
					<Header />
					<Component {...pageProps} />
				</div>
			</PaginationProvider>
		</AppStateProvider>
	);
}
export default MyApp;
