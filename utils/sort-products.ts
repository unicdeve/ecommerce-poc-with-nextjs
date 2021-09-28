import { IProduct } from '../contexts/state';

export const sortAllProducts = (
	products: IProduct[],
	sortBy: string,
	sortOrder: string
) =>
	products.sort((a, b) => {
		if (sortBy === 'alphabetically') {
			if (sortOrder === 'asc') {
				return a.name > b.name ? 1 : -1;
			}
			return a.name < b.name ? 1 : -1;
		} else {
			if (sortOrder === 'asc') {
				return a.price > b.price ? 1 : -1;
			}
			return a.price < b.price ? 1 : -1;
		}
	});
