import { FC } from 'react';
import { StyledAddToCartBtn } from './AddToCartBtn.Styled';

interface IProps {
	onClick: () => void;
	inCart?: boolean;
}

const AddToCartBtn: FC<IProps> = ({ onClick, inCart }) => {
	return (
		<StyledAddToCartBtn onClick={onClick} disabled={inCart}>
			{inCart ? 'IN CART' : 'ADD TO CART'}
		</StyledAddToCartBtn>
	);
};

export default AddToCartBtn;
