import { FC } from 'react';
import { useAppStateContext } from '../../contexts/state';
import { categories as productCategories } from '../../mock-ups/categories.mock';
import { priceRanges } from '../../mock-ups/price-ranges.mock';
import { StyledProductListSidebar } from './ProductListSidebar.Styled';

const ProductListSidebar: FC = () => {
	const { onChangeCategories, onChangePriceRange } = useAppStateContext();

	return (
		<StyledProductListSidebar>
			<h3 className='h-3'>Category</h3>

			<div className='categories d-flex flex-col'>
				{productCategories.map(({ id, name, label, value }) => (
					<div key={id} className='category-wrapper'>
						<input
							type='checkbox'
							id={id}
							name={name}
							onChange={(e) => onChangeCategories(e.target.checked, value)}
						/>
						<label htmlFor={id}>{label}</label>
					</div>
				))}
			</div>

			<hr className='hr-1' />

			<h3 className='h-3'>Price range</h3>

			<div className='categories d-flex flex-col'>
				{priceRanges.map(({ id, name, label, lower, upper }) => (
					<div key={id} className='category-wrapper'>
						<input
							type='checkbox'
							id={id}
							name={name}
							onChange={(e) =>
								onChangePriceRange(name, e.target.checked, lower, upper)
							}
						/>
						<label htmlFor={id}>{label}</label>
					</div>
				))}
			</div>
		</StyledProductListSidebar>
	);
};

export default ProductListSidebar;
