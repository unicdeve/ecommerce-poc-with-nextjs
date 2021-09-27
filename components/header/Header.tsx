import Image from 'next/image';
import { FC } from 'react';
import CartIcon from '../cart-icon/CartIcon';
import { StyledHeader } from './Header.Styled';

const Header: FC = () => {
	return (
		<StyledHeader>
			<div className='container content'>
				<Image src='/images/logo.svg' alt='' width='100%' height='25' />
				<CartIcon />
			</div>

			<div className='container hr-wrap'>
				<div className='hr' />
			</div>
		</StyledHeader>
	);
};

export default Header;
