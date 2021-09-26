import Image from 'next/image';
import { FC } from 'react';
import AddToCartBtn from '../add-to-cart-btn/AddToCartBtn';
import { StyledProductCard } from './ProductCard.Styled';

const ProductCard: FC = () => {
	return (
		<StyledProductCard>
			<div className='img-wrap'>
				<Image
					src='https://s3-alpha-sig.figma.com/img/2e67/fa64/13284b98f11a3a99b332e1a5e5f7ac6a?Expires=1633305600&Signature=QykhHHHLxiVxxW13Stz4cyOybx3iiaY-nF20klA8X-47T5WssVcXZol8sDurQOos-ZwqnpR~-l0Muq9jTjE6bc0zN6vB5J5aE8bBFWYfgY3Ryg-GUX0P7DiiVx5z~WlCcNuf3NO8nz4LTqKD3FbzJv8W2Xnl0MY6AJn1y9Vr50ZpNYbGzFevNQeSdjHtOkH-NgoUi~Do7zE-m7cvQvX-YyaFVVZ3V0VqA2VOx3ZRWERV424zuVD~PP63FrH9CM2sjwH2-oZNCyVVcU4OqwLTlldxKIGj2zXPt0azieztR943UAhw3pBuJrWRuCcoKiE-c5-pr6n-ctBjyckIa-N1yw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
					alt=''
					layout='fill'
					objectFit='cover'
				/>

				<span className='best-seller-tag'>Best Seller</span>

				<div className='add-to-cart-wrapper'>
					<AddToCartBtn />
				</div>
			</div>

			<div className='card-bottom'>
				<div className='category'>People</div>
				<h2>Red Bench</h2>
				<div className='price'>$3.89</div>
			</div>
		</StyledProductCard>
	);
};

export default ProductCard;
