import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header: NextPage = () => {
	return (
		<div className={styles.header}>
			<Image src='/images/logo.svg' alt='' width='100%' height='25' />
			<Image src='/images/shopping-cart.svg' alt='' width='54' height='54' />
		</div>
	);
};

export default Header;
