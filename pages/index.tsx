import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import FeaturedProduct from '../components/featured-product/FeaturedProduct';
import ProductList from '../components/product-list/ProductList';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const { isFallback } = useRouter();

	if (isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles.homePage}>
			<FeaturedProduct />

			<hr className='hr-4' />

			<ProductList />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	// ...

	return {
		props: {
			fallback: true,
		},
	};
};

export default Home;
