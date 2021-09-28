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

interface ICategories {
	[category: string]: boolean;
}
export interface IStateContext {
	products: IProduct[];
	setProducts: Dispatch<SetStateAction<IProduct[]>>;
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
	categories: ICategories;
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
			const sortedProducts = sortAllProducts(products, sortBy, sortOrder);
			setProducts(sortedProducts);
		},
		[products]
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
	const [categories, setCategories] = useState<ICategories>({});

	const onChangeCategories = useCallback(
		(checked: boolean, category: string) => {
			const newCategories = { [category]: checked, ...categories };
			setCategories(newCategories);

			const stringValue = Object.keys(newCategories)
				.filter((key) => newCategories[key])
				.join('');

			const filteredProducts = products.filter((p) =>
				stringValue.includes(p.category)
			);
			setFilteredProducts(filteredProducts);
		},
		[categories, products]
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

	const value = useMemo(
		() => ({
			products: filteredProducts.length > 0 ? filteredProducts : products,
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
			sortProducts,
			onChangeSortOrder,
			onChangeSortBy,
			onChangeCategories,
			categories,
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
