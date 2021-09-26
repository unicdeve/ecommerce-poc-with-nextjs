import Image from 'next/image';
import { FC } from 'react';
import { StyledProductListHeader } from './ProductListHeader.Styled';

const ProductListHeader: FC = () => {
	return (
		<StyledProductListHeader className='d-flex justify-between'>
			<h2 className='h-2'>
				Photography / <span>Premium Photos</span>
			</h2>

			<div className='sort-action d-flex align-center'>
				<label htmlFor='sort-product'>
					<Image
						src='/images/sort-icon.svg'
						alt='sort'
						width='15'
						height='15'
					/>
					<span>Sort By</span>
				</label>

				<select name='sort-product' id='sort-product'>
					<option value='price'>Price</option>
					<option value='alphabetically'>Alpha</option>
				</select>
			</div>

			<div className='filter-icon-wrapper'>
				<Image
					src='/images/filter-icon.svg'
					alt='sort'
					width='29'
					height='29'
				/>
			</div>
		</StyledProductListHeader>
	);
};

export default ProductListHeader;