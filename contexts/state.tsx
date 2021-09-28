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

export interface IStateContext {
	products: IProduct[];
	setProducts: Dispatch<SetStateAction<IProduct[]>>;
	cart: IProduct[];
	addToCart: (cart: IProduct) => void;
	clearCart: () => void;
	openCartDropdown: boolean;
	openDropdown: () => void;
	closeDropdown: () => void;
}

const AppStateContext = createContext<IStateContext>(undefined as any);

export const AppStateProvider: FC<{}> = ({ children }) => {
	const localCart: IProduct[] | [] = JSON.parse(
		(isBrowser && localStorage.getItem('ecom_poc:cart')) || '[]'
	);

	const [products, setProducts] = useState<IProduct[]>([]);
	const [cart, setCart] = useState<IProduct[]>(localCart);
	const [openCartDropdown, setOpenCartDropdown] = useState<boolean>(false);
	const openDropdown = () => setOpenCartDropdown(true);
	const closeDropdown = () => setOpenCartDropdown(false);

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
			products,
			setProducts,
			cart,
			addToCart,
			clearCart,
			openCartDropdown,
			openDropdown,
			closeDropdown,
		}),
		[products, cart, addToCart, clearCart, openCartDropdown]
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
