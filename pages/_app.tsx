import type { AppProps } from 'next/app';
import Header from '../components/header/Header';
import { AppStateProvider } from '../contexts/state';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppStateProvider>
			<div className='my-app-container'>
				<Header />
				<Component {...pageProps} />
			</div>
		</AppStateProvider>
	);
}
export default MyApp;
