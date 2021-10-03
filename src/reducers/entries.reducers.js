const reducer = (state = initialEntires, action) => {
	let newEntries;
	switch (action.type) {
		case 'ADD_ENTRY':
			newEntries = state.concat({ ...action.payload });
			return newEntries;
		case 'REMOVE_ENTRY':
			newEntries = state.filter(entry => entry.id != action.payload.id);
			return newEntries;
		default:
			return state;
	}
	return state;
};

export default reducer;

let initialEntires = [
	{
		id: 1,
		description: 'Work income',
		value: 3000.0,
		isExpense: false
	},
	{
		id: 2,
		description: 'Water bill',
		value: 100.0,
		isExpense: true
	},
	{
		id: 3,
		description: 'Rent',
		value: 1000.0,
		isExpense: true
	},
	{
		id: 4,
		description: 'Power bill',
		value: 60.0,
		isExpense: true
	}
];
