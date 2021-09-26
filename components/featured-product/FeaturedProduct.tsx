import Image from 'next/image';
import { FC } from 'react';
import AddToCartBtn from '../add-to-cart-btn/AddToCartBtn';
import { StyledFeaturedProduct } from './FeaturedProduct.Styled';

const FeaturedProduct: FC = () => {
	return (
		<StyledFeaturedProduct className='container'>
			<div className='header'>
				<h1 className='h-1'>Samurai King Resting</h1>

				<AddToCartBtn />
			</div>

			<div className='img-wrapper'>
				<Image
					alt=''
					src='https://s3-alpha-sig.figma.com/img/d578/0646/bea3c9f2aa2b94f1724c9124e6c9956e?Expires=1633305600&Signature=Q-CjmM0ROrNFIxBL7FVMz9lzm2-T9VKUIekK4ldR9sd~mQltGNgCIeL0xfT3qYyTAzlfq2-vqUnOGz~hOEVwzClbgf-a7GRS1bEp4Ox2AvG7zcFPO5UXTWVRqgllchwRKS65a2H50t6IVYP3pC8cH~2ulFn4eGEgLLPRGD17FxKTw9Fr8KbX~j09lOTokzVKbNNv54cj-gAAhKj4ACAMV42KJiBsgw1KHyj0yTpCU9KD7C-01KO0eA0gR56YCHYwgj87NMk8BvfQUy2ebmw53EDTUF7h737UbrHm6MQfj-Lxl0aruEqYRXdaR8AHt0sAWZa4zxY7NbftQuOJyAxZjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
					layout='fill'
					objectFit='cover'
				/>

				<div className='img-tag'>Photo of the day</div>
			</div>

			<div className='add-to-cart-mb'>
				<AddToCartBtn />
			</div>

			<div className='product-info'>
				<div className='left'>
					<h3 className='h-3'>About the Samurai King Resting</h3>
					<span>Pet</span>

					<p className='p-1'>
						So how did the classical Latin become so incoherent? According to
						McClintock, a 15th century typesetter likely scrambled part of
						Cicero De Finibus in order to provide placeholder text to mockup
						various fonts for a type specimen book.So how did the classical
						Latin become so incoherent? According to McClintock, a 15th century
						typesetter likely scrambled part of Cicero De Finibus in order to
						provide placeholder text to mockup various fonts for a type specimen
						book.
					</p>
				</div>
				<div className='right preoduct-recommendations'>
					<h3 className='h-3'>People also buy</h3>

					<div className='products'>
						<div className='img-wrap'>
							<Image
								src='https://s3-alpha-sig.figma.com/img/1fe1/9519/55ca15c8654e7c844e63c87602c6398a?Expires=1633305600&Signature=VMotNmWo3R2DcdVdX28R846wZOZ2SkjVDKkiw8QBJ-9TFO5Zk6DHNX1YBMcUdw-Ca8H08IluCMVC49EaITxFPQnNqf-v1UtlOLmuzWX2HzuaIyg7LvxSztJuiRWpkygFK9XEBpCDPT9rZIAZEQJnaWUAcsb9Rjktc5Os~7vU-IOZ9iDKvPM7x~fIWqoGRX9Kwj-qEN~ZucQ7WmUBBcCirFWet2yJOShcTAGUh1-eOBIhz2vbstysvvO21~d9fgISe447A2k0Od3pdKlTIOEx2s5gB05A8UQzxv8sT4WShx2UIAi2G8HNjW5uJZULTi8GOk9HLOWxr4-DQllLy1jI5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
								alt=''
								layout='fill'
							/>
						</div>

						<div className='img-wrap'>
							<Image
								src='https://s3-alpha-sig.figma.com/img/1fe1/9519/55ca15c8654e7c844e63c87602c6398a?Expires=1633305600&Signature=VMotNmWo3R2DcdVdX28R846wZOZ2SkjVDKkiw8QBJ-9TFO5Zk6DHNX1YBMcUdw-Ca8H08IluCMVC49EaITxFPQnNqf-v1UtlOLmuzWX2HzuaIyg7LvxSztJuiRWpkygFK9XEBpCDPT9rZIAZEQJnaWUAcsb9Rjktc5Os~7vU-IOZ9iDKvPM7x~fIWqoGRX9Kwj-qEN~ZucQ7WmUBBcCirFWet2yJOShcTAGUh1-eOBIhz2vbstysvvO21~d9fgISe447A2k0Od3pdKlTIOEx2s5gB05A8UQzxv8sT4WShx2UIAi2G8HNjW5uJZULTi8GOk9HLOWxr4-DQllLy1jI5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
								alt=''
								layout='fill'
							/>
						</div>

						<div className='img-wrap'>
							<Image
								src='https://s3-alpha-sig.figma.com/img/1fe1/9519/55ca15c8654e7c844e63c87602c6398a?Expires=1633305600&Signature=VMotNmWo3R2DcdVdX28R846wZOZ2SkjVDKkiw8QBJ-9TFO5Zk6DHNX1YBMcUdw-Ca8H08IluCMVC49EaITxFPQnNqf-v1UtlOLmuzWX2HzuaIyg7LvxSztJuiRWpkygFK9XEBpCDPT9rZIAZEQJnaWUAcsb9Rjktc5Os~7vU-IOZ9iDKvPM7x~fIWqoGRX9Kwj-qEN~ZucQ7WmUBBcCirFWet2yJOShcTAGUh1-eOBIhz2vbstysvvO21~d9fgISe447A2k0Od3pdKlTIOEx2s5gB05A8UQzxv8sT4WShx2UIAi2G8HNjW5uJZULTi8GOk9HLOWxr4-DQllLy1jI5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
								alt=''
								layout='fill'
							/>
						</div>
					</div>

					<div className='details'>
						<h3 className='h-3'>Details</h3>
						<span>Size: 1020 x 1020 pixel</span>
						<span>Size: 15 mb</span>
					</div>
				</div>
			</div>
		</StyledFeaturedProduct>
	);
};

export default FeaturedProduct;
