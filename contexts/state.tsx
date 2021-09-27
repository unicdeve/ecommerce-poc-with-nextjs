import {
	createContext,
	Dispatch,
	FC,
	SetStateAction,
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

export interface IProduct {
	id: string;
	name: string;
	category: string;
	price: number;
	currency: string;
	image: IImage;
	dimmentions: IDimension;
	isBestseller: boolean;
	featured: boolean;
	details?: any;
}

export interface IStateContext {
	products: IProduct[];
	setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

const AppStateContext = createContext<IStateContext>(undefined as any);

export const AppStateProvider: FC<{}> = ({ children }) => {
	const [products, setProducts] = useState<IProduct[]>([]);

	const value = useMemo(
		() => ({
			products,
			setProducts,
		}),
		[products]
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
