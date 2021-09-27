// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../../contexts/state';
import products from '../../mock-ups/products.mock';

type Data = {
	products: IProduct[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json(products);
}
