import Image from 'next/image';
import { FC } from 'react';
import { useAppStateContext } from '../../contexts/state';
import { StyledCartIcon } from './CartIcon.Styled';

const CartIcon: FC = () => {
	let { cart } = useAppStateContext();

	return (
		<StyledCartIcon>
			<Image src='/images/shopping-cart.svg' alt='' layout='fill' />
			<span>{cart.length}</span>
		</StyledCartIcon>
	);
};

export default CartIcon;
