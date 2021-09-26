interface IPriceRange {
	id: string;
	name: string;
	label: string;
	lower: number;
	upper: number;
}

export const priceRanges: IPriceRange[] = [
	{
		id: 'Lower than $20',
		name: 'Lower than $20',
		label: 'Lower than $20',
		lower: 0,
		upper: 20,
	},

	{
		id: '$20 - $100',
		name: '$20 - $100',
		label: '$20 - $100',
		lower: 20,
		upper: 100,
	},

	{
		id: '$100 - $200',
		name: '$100 - $200',
		label: '$100 - $200',
		lower: 100,
		upper: 200,
	},

	{
		id: 'More than $200',
		name: 'More than $200',
		label: 'More than $200',
		lower: 200,
		upper: 10000000000000,
	},
];
