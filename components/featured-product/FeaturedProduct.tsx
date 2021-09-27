import Image from 'next/image';
import { FC } from 'react';
import { IProduct, useAppStateContext } from '../../contexts/state';
import AddToCartBtn from '../add-to-cart-btn/AddToCartBtn';
import { StyledFeaturedProduct } from './FeaturedProduct.Styled';

interface IProps {
	featuredProduct: IProduct;
}

const FeaturedProduct: FC<IProps> = ({ featuredProduct }) => {
	let { addToCart, cart } = useAppStateContext();

	const inCart = !!cart.filter((item) => item.id === featuredProduct.id).length;

	return (
		<StyledFeaturedProduct className='container'>
			<div className='header'>
				<h1 className='h-1'>{featuredProduct.name}</h1>

				<AddToCartBtn
					onClick={() => addToCart(featuredProduct)}
					inCart={inCart}
				/>
			</div>

			<div className='img-wrapper'>
				<Image
					alt={featuredProduct.image.alt}
					src={featuredProduct.image.src}
					layout='fill'
					objectFit='cover'
				/>

				<div className='img-tag'>Photo of the day</div>
			</div>

			<div className='add-to-cart-mb'>
				<AddToCartBtn
					onClick={() => addToCart(featuredProduct)}
					inCart={inCart}
				/>
			</div>

			<div className='product-info'>
				<div className='left'>
					<h3 className='h-3'>About the {featuredProduct.name}</h3>
					<span>{featuredProduct.category}</span>

					<p className='p-1'>{featuredProduct?.details?.description}</p>
				</div>
				<div className='right preoduct-recommendations'>
					<h3 className='h-3'>People also buy</h3>

					{featuredProduct?.details?.recommendations && (
						<div className='products'>
							{featuredProduct?.details?.recommendations.map(({ src, alt }) => (
								<div key={alt} className='img-wrap'>
									<Image src={src} alt={alt} layout='fill' />
								</div>
							))}
						</div>
					)}

					<div className='details'>
						<h3 className='h-3'>Details</h3>
						<span>
							Size: {featuredProduct?.details?.dimensions?.width} x{' '}
							{featuredProduct?.details?.dimensions?.height} pixel
						</span>

						{featuredProduct?.details?.size && (
							<span>Size: {Math.round(featuredProduct?.details?.size)} mb</span>
						)}
					</div>
				</div>
			</div>
		</StyledFeaturedProduct>
	);
};

export default FeaturedProduct;
