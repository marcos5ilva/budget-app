import React from 'react';
import { Form, Segment, Checkbox } from 'semantic-ui-react';
function EntryForm({
	description,
	setDescription,
	value,
	setValue,
	isExpense,
	setIsExpense
}) {
	return (
		<>
			<Form.Group>
				<Form.Input
					label='Description'
					icon='tags'
					width={12}
					placeholder='New shinny thing'
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
				<Form.Input
					label='value'
					width={4}
					placeholder='100.00'
					icon='dollar'
					iconPosition='left'
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			</Form.Group>
			<Segment compact>
				<Checkbox
					toggle
					label='is expense'
					checked={isExpense}
					onChange={() => setIsExpense(oldState => !oldState)}
				/>
			</Segment>
		</>
	);
}

export default EntryForm;
