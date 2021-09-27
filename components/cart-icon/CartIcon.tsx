import Image from 'next/image';
import { FC } from 'react';
import { StyledCartIcon } from './CartIcon.Styled';

const CartIcon: FC = () => {
	return (
		<StyledCartIcon>
			<Image src='/images/shopping-cart.svg' alt='' layout='fill' />
			<span>4</span>
		</StyledCartIcon>
	);
};

export default CartIcon;
