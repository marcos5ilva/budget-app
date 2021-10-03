import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
import { useDispatch } from 'react-redux';
import { addEntryRedux } from '../actions/entries.actions';
import { v4 as uuidv4 } from 'uuid';

function NewEntryForm() {
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const [isExpense, setIsExpense] = useState(true);
	const dispatch = useDispatch();

	function addEntry() {
		dispatch(addEntryRedux({ id: uuidv4(), description, value, isExpense }));
		resetEntries();
	}

	function resetEntries() {
		setIsExpense(true);
		setValue(0);
		setDescription('');
	}
	return (
		<Form unstackable>
			<EntryForm
				description={description}
				value={value}
				isExpense={isExpense}
				setDescription={setDescription}
				setValue={setValue}
				setIsExpense={setIsExpense}
			/>
			<ButtonSaveOrCancel
				addEntry={addEntry}
				description={description}
				value={value}
				isExpense={isExpense}
			/>
		</Form>
	);
}

export default NewEntryForm;
