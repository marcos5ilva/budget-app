import { Container } from 'semantic-ui-react';
import './App.css';
import NewEntryForm from './components/NewEntryForm';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
function App() {
	return (
		<Container>
			<MainHeader title='Budget App' type='h1' />
			<DisplayBalance
				title='Your Balance'
				value='2,550.50'
				size='small'
				color='black'
				align='left'
			/>
			<DisplayBalances />
			<MainHeader title='History' type='h3' />
			<EntryLine description='expense' value='10.00' isExpense />
			<EntryLine description='income' value='25.00' />

			<MainHeader trype='Add new transactions' type='h3' />
			<NewEntryForm />
		</Container>
	);
}

export default App;
