import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
function NewEntryForm() {
	return (
		<Form unstackable>
			<Form.Group>
				<Form.Input
					label='Description'
					icon='tags'
					width={12}
					placeholder='New shinny thing'
				/>
				<Form.Input
					label='value'
					width={4}
					placeholder='100.00'
					icon='dollar'
					iconPosition='left'
				/>
			</Form.Group>
			<ButtonSaveOrCancel />
		</Form>
	);
}

export default NewEntryForm;
