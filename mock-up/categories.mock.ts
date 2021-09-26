interface ICategory {
	id: string;
	name: string;
	label: string;
	value: string;
}

export const categories: ICategory[] = [
	{
		id: 'people',
		name: 'people',
		label: 'People',
		value: 'people',
	},

	{
		id: 'premium',
		name: 'premium',
		label: 'Premium',
		value: 'premium',
	},

	{
		id: 'pets',
		name: 'pets',
		label: 'Pets',
		value: 'pets',
	},

	{
		id: 'food',
		name: 'food',
		label: 'Food',
		value: 'food',
	},

	{
		id: 'landmarks',
		name: 'landmarks',
		label: 'Landmarks',
		value: 'landmarks',
	},

	{
		id: 'cities',
		name: 'cities',
		label: 'Cities',
		value: 'cities',
	},

	{
		id: 'nature',
		name: 'nature',
		label: 'Nature',
		value: 'nature',
	},
];
