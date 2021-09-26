import type { NextPage } from 'next';
import FeaturedProduct from '../components/featured-product/FeaturedProduct';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.homePage}>
			<FeaturedProduct />

			<hr className='hr-4' />
		</div>
	);
};

export default Home;
