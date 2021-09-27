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
}

const AppStateContext = createContext<IStateContext>(undefined as any);

export const AppStateProvider: FC<{}> = ({ children }) => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [cart, setCart] = useState<IProduct[]>([]);

	const addToCart = useCallback((product: IProduct) => {
		setCart((prev) => [product, ...prev]);
	}, []);

	const value = useMemo(
		() => ({
			products,
			setProducts,
			cart,
			addToCart,
		}),
		[products, cart, addToCart]
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
