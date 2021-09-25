import type { NextPage } from 'next';
import FeaturedProduct from '../components/featured-product/FeaturedProduct';
import '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div>
			<FeaturedProduct />
		</div>
	);
};

export default Home;
