const initialState = [
	{
		title: 'Last Episode',
		id: 0,
		cards: [
			{
				id: 0,
				text:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, culpa?',
			},
			{
				id: 1,
				text: 'Lorem ipsum dolor sit amet.',
			},
		],
	},
	{
		title: 'Second Episode',
		id: 1,
		cards: [
			{
				id: 0,
				text:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, culpa?',
			},
			{
				id: 1,
				text: 'Lorem ipsum dolor sit amet.',
			},
			{
				id: 2,
				text:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, culpa?',
			},
		],
	},
];

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default listReducer;
