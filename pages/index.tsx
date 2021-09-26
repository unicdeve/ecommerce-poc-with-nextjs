import type { NextPage } from 'next';
import FeaturedProduct from '../components/featured-product/FeaturedProduct';
import ProductList from '../components/product-list/ProductList';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.homePage}>
			<FeaturedProduct />

			<hr className='hr-4' />

			<ProductList />
		</div>
	);
};

export default Home;
