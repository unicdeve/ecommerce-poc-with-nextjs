import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import FeaturedProduct from '../components/featured-product/FeaturedProduct';
import ProductList from '../components/product-list/ProductList';
import { IProduct, useAppStateContext } from '../contexts/state';
import data from '../mock-ups/products.mock';
import styles from '../styles/Home.module.css';

interface IProps {
	products: IProduct[];
}

const Home: NextPage<IProps> = ({ products }) => {
	const { isFallback } = useRouter();
	const { setProducts } = useAppStateContext();

	useEffect(() => {
		if (products) {
			setProducts(products);
		}
	}, [products, setProducts]);

	if (isFallback) {
		return <div>Loading...</div>;
	}

	let featuredProduct: IProduct;

	featuredProduct = products.filter((p) => p.featured)[0];

	return (
		<div className={styles.homePage}>
			{featuredProduct && <FeaturedProduct featuredProduct={featuredProduct} />}

			{featuredProduct && <hr className='hr-4' />}

			<ProductList />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const products = data.products;

	return {
		props: {
			fallback: true,
			products,
		},
	};
};

export default Home;
