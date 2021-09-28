import Image from 'next/image';
import { FC } from 'react';
import { useAppStateContext } from '../../contexts/state';
import { StyledCartIcon } from './CartIcon.Styled';

interface IProps {
	onClick: () => void;
}

const CartIcon: FC<IProps> = ({ onClick }) => {
	let { cart } = useAppStateContext();

	return (
		<StyledCartIcon className='cart-icon' role='button' onClick={onClick}>
			<Image src='/images/shopping-cart.svg' alt='' layout='fill' />
			{cart.length > 0 && <span>{cart.length}</span>}
		</StyledCartIcon>
	);
};

export default CartIcon;
