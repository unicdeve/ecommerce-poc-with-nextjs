import type { AppProps } from 'next/app';
import Header from '../components/header/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='my-app-container'>
			<Header />
			<Component {...pageProps} />
		</div>
	);
}
export default MyApp;
