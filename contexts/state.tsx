import {
	createContext,
	Dispatch,
	FC,
	SetStateAction,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react';
import { isBrowser } from '../utils/is-browser';
import { sortAllProducts } from '../utils/sort-products';

interface IImage {
	src: string;
	alt: string;
}

interface IDimension {
	width: number;
	height: number;
}

interface IDetails {
	dimensions: IDimension;
	size: number;
	description: string;
	recommendations: IImage[];
}

export interface IProduct {
	id: string;
	name: string;
	category: string;
	price: number;
	currency: string;
	image: IImage;
	dimensions: IDimension;
	isBestseller: boolean;
	featured: boolean;
	details: IDetails | null;
}

interface IFilters {
	[category: string]: boolean;
}
export interface IStateContext {
	products: IProduct[];
	filteredProducts: IProduct[];
	setProducts: Dispatch<SetStateAction<IProduct[]>>;
	setFilteredProducts: Dispatch<SetStateAction<IProduct[]>>;
	cart: IProduct[];
	addToCart: (cart: IProduct) => void;
	clearCart: () => void;
	openCartDropdown: boolean;
	openDropdown: () => void;
	closeDropdown: () => void;
	sortBy: string;
	sortProducts: (sortBy: string, sortOrder: string) => void;
	onChangeSortBy: (e: any) => void;
	onChangeSortOrder: () => void;
	onChangeCategories: (checked: boolean, name: string) => void;
	categories: IFilters;
	onChangePriceRange: (
		name: string,
		checked: boolean,
		lower: number,
		upper: number
	) => void;
	priceRange: any;
}

const AppStateContext = createContext<IStateContext>(undefined as any);

export const AppStateProvider: FC<{}> = ({ children }) => {
	const localCart: IProduct[] | [] = JSON.parse(
		(isBrowser && localStorage.getItem('ecom_poc:cart')) || '[]'
	);
	const [products, setProducts] = useState<IProduct[]>([]);
	const [filteredProducts, setFilteredProducts] =
		useState<IProduct[]>(products);
	const [cart, setCart] = useState<IProduct[]>(localCart);
	const [openCartDropdown, setOpenCartDropdown] = useState<boolean>(false);
	const openDropdown = () => setOpenCartDropdown(true);
	const closeDropdown = () => setOpenCartDropdown(false);

	// sort feature
	const [sortBy, setSortBy] = useState<'price' | 'alphabetically'>('price');
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

	const sortProducts = useCallback(
		(sortBy: string, sortOrder: string) => {
			const sortedProducts = sortAllProducts(
				filteredProducts,
				sortBy,
				sortOrder
			);
			setFilteredProducts(sortedProducts);
		},
		[filteredProducts]
	);

	const onChangeSortBy = useCallback(
		(e: any) => {
			const value = e.target.value;
			setSortBy(value);
			sortProducts(value, sortOrder);
		},
		[sortOrder, sortProducts]
	);

	const onChangeSortOrder = useCallback(() => {
		const value = sortOrder === 'asc' ? 'desc' : 'asc';
		setSortOrder(value);
		sortProducts(sortBy, value);
	}, [sortOrder, sortBy, sortProducts]);

	// category filtering feature
	const [categories, setCategories] = useState<IFilters>({});

	const onChangeCategories = useCallback(
		(checked: boolean, category: string) => {
			const newCategories = { ...categories, [category]: checked };

			const stringValue = Object.keys(newCategories)
				.filter((key) => newCategories[key])
				.join('');

			// TODO: filter based on price range
			const filteredProducts = products.filter((p) =>
				stringValue.includes(p.category)
			);
			setFilteredProducts(filteredProducts);
			setCategories(newCategories);
		},
		[categories, products]
	);

	// price-range filtering feature
	const [priceRange, setPriceRange] = useState<any>({});

	// FIXME: needs rework
	const onChangePriceRange = useCallback(
		(name: string, checked: boolean, lower: number, upper: number) => {
			let newPriceRange = { ...priceRange };
			if (checked) {
				newPriceRange[name] = { lower, upper };
			} else {
				delete newPriceRange[name];
			}

			const rangeArray = Object.values(newPriceRange).sort((a: any, b: any) =>
				a.lower > b.lower ? 1 : -1
			) as any;

			const stringValue = Object.keys(categories)
				.filter((key) => categories[key])
				.join('');

			const allProducts = products.filter((p) =>
				stringValue.includes(p.category)
			);

			if (rangeArray.length) {
				const rangedProducts = allProducts.filter((p) => {
					console.log(
						'boo',
						p.price >= rangeArray[0].lower &&
							p.price <= rangeArray[rangeArray.length - 1].upper
					);
					return (
						p.price >= rangeArray[0].lower &&
						p.price <= rangeArray[rangeArray.length - 1].upper
					);
				});

				setFilteredProducts(allProducts);
			}

			setPriceRange(newPriceRange);
		},
		[priceRange, products, categories]
	);

	const addToCart = useCallback((product: IProduct) => {
		setCart((prev) => {
			const newCart = [product, ...prev];
			isBrowser &&
				localStorage.setItem('ecom_poc:cart', JSON.stringify(newCart));
			return newCart;
		});
	}, []);

	const clearCart = useCallback(() => {
		setCart((_) => {
			isBrowser && localStorage.removeItem('ecom_poc:cart');
			return [];
		});
	}, []);

	// Pagination calculation
	// const { pageOffset } = useProductPagination();

	// useEffect(() => {
	// 	const paginatedProduct = products.slice(
	// 		pageOffset,
	// 		pageOffset + PAGINATE_BY
	// 	);
	// 	setFilteredProducts(paginatedProduct);
	// 	isBrowser && window.scrollTo(0, 1000);
	// }, [pageOffset, products]);

	const value = useMemo(
		() => ({
			products,
			filteredProducts:
				filteredProducts.length > 0 ? filteredProducts : products,
			setProducts,
			cart,
			addToCart,
			clearCart,
			openCartDropdown,
			openDropdown,
			closeDropdown,
			sortProducts,
			sortBy,
			onChangeSortBy,
			onChangeSortOrder,
			onChangeCategories,
			categories,
			setFilteredProducts,
			onChangePriceRange,
			priceRange,
		}),
		[
			products,
			filteredProducts,
			cart,
			addToCart,
			clearCart,
			openCartDropdown,
			sortBy,
			setProducts,
			setFilteredProducts,
			sortProducts,
			onChangeSortOrder,
			onChangeSortBy,
			onChangeCategories,
			categories,
			onChangePriceRange,
			priceRange,
		]
	);

	return (
		<AppStateContext.Provider value={value}>
			{children}
		</AppStateContext.Provider>
	);
};

export function useAppStateContext() {
	return useContext(AppStateContext);
}
