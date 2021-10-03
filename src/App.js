import { Container } from 'semantic-ui-react';
import './App.css';
import NewEntryForm from './components/NewEntryForm';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import { useEffect, useState } from 'react';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';

function App() {
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const [isExpense, setIsExpense] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [entryId, setEntryId] = useState(null);
	const [totalIncomes, setTotalIncomes] = useState(0);
	const [totalExpenses, setTotalExpenses] = useState(0);
	const [balance, setBalance] = useState(0);
	const entries = useSelector(state => state.entries);

	useEffect(() => {
		if (!isOpen && entryId) {
			const newEntries = [...entries];
			const index = entries.findIndex(entry => entry.id === entryId);
			newEntries[index].description = description;
			newEntries[index].value = value;
			newEntries[index].isExpense = isExpense;
			//setEntries(newEntries);
			resetEntries();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	useEffect(() => {
		let incomes = 0;
		let expenses = 0;
		let total = 0;
		entries.map(entry => {
			if (entry.isExpense) {
				return (expenses += Number(entry.value));
			}
			return (incomes += Number(entry.value));
		});
		total = incomes - expenses;
		setTotalExpenses(expenses);
		setTotalIncomes(incomes);
		setBalance(total);
	}, [entries]);

	function resetEntries() {
		setDescription('');
		setValue('');
		setIsExpense(true);
	}

	function addEntry() {
		const result = entries.concat({
			id: entries.length + 1,
			description,
			value,
			isExpense
		});
		//setEntries(result);
		resetEntries();
	}

	function editEntry(id) {
		console.log('entry id', id);
		if (id) {
			const index = entries.findIndex(entry => entry.id === id);
			const entry = entries[index];
			setDescription(entry.description);
			setValue(entry.value);
			setIsExpense(entry.isExpense);
			setEntryId(id);
			setIsOpen(true);
		}
	}
	return (
		<Container>
			<MainHeader title='Budget App' type='h1' />
			<DisplayBalance
				title='Your Balance'
				value={balance}
				size='small'
				color='black'
				align='left'
			/>
			<DisplayBalances
				totalIncomes={totalIncomes}
				totalExpenses={totalExpenses}
			/>
			<MainHeader title='History' type='h3' />
			<EntryLines values={entries} editEntry={editEntry} />
			<MainHeader trype='Add new transactions' type='h3' />
			<NewEntryForm />
			<ModalEdit
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				addEntry={addEntry}
				description={description}
				value={value}
				isExpense={isExpense}
				setDescription={setDescription}
				setValue={setValue}
				setIsExpense={setIsExpense}
			/>
		</Container>
	);
}

export default App;
