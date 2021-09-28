import Image from 'next/image';
import { FC } from 'react';
import { useAppStateContext } from '../../contexts/state';
import CartIcon from '../cart-icon/CartIcon';
import { StyledHeader } from './Header.Styled';

const Header: FC = () => {
	let { cart, clearCart, openCartDropdown, openDropdown, closeDropdown } =
		useAppStateContext();

	return (
		<StyledHeader>
			<div className='container content'>
				<Image src='/images/logo.svg' alt='' width='100%' height='25' />
				<CartIcon onClick={openDropdown} />
			</div>

			<div className={`cart-items ${openCartDropdown ? 'open' : ''}`}>
				<div role='button' onClick={closeDropdown} className='cancel-icon-wrap'>
					<Image src='/images/cancel-icon.svg' alt='' width='18' height='18' />
				</div>

				{cart.length > 0 ? (
					cart.map((item) => (
						<div key={item.id} className='item'>
							<div className='title'>
								<h5>{item.name}</h5>
								<small>${item.price}</small>
							</div>

							<Image
								src={item.image.src}
								alt={item.image.alt}
								width='150'
								height='86'
								objectFit='cover'
							/>
						</div>
					))
				) : (
					<p>Cart is empty</p>
				)}

				<div className='btn-wrap'>
					<button disabled={!cart.length} onClick={clearCart}>
						CLEAR
					</button>
				</div>
			</div>

			<div className='container hr-wrap'>
				<div className='hr' />
			</div>
		</StyledHeader>
	);
};

export default Header;
