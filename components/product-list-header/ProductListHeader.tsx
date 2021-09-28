import Image from 'next/image';
import { FC } from 'react';
import { useAppStateContext } from '../../contexts/state';
import { StyledProductListHeader } from './ProductListHeader.Styled';

const ProductListHeader: FC = () => {
	const { sortBy, onChangeSortBy, onChangeSortOrder } = useAppStateContext();

	return (
		<StyledProductListHeader className='d-flex justify-between align-center'>
			<h2 className='h-2'>
				Photography / <span>Premium Photos</span>
			</h2>

			<div className='sort-action d-flex align-center'>
				<label role='button' htmlFor='sort-product' onClick={onChangeSortOrder}>
					<Image
						src='/images/sort-icon.svg'
						alt='sort'
						width='15'
						height='15'
					/>
					<span>Sort By</span>
				</label>

				<select
					name='sort-product'
					id='sort-product'
					value={sortBy}
					onChange={onChangeSortBy}
				>
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
