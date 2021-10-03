import { Button, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function ModalEdit({
	isOpen,
	setIsOpen,
	description,
	value,
	isExpense,
	setIsExpense,
	setDescription,
	setValue
}) {
	return (
		<Modal open={isOpen}>
			<Modal.Header>Edit Entry</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<EntryForm
						description={description}
						value={value}
						isExpense={isExpense}
						setDescription={setDescription}
						setValue={setValue}
						setIsExpense={setIsExpense}
					/>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => setIsOpen(false)}>Close</Button>
				<Button onClick={() => setIsOpen(false)} primary>
					Ok
				</Button>
			</Modal.Actions>
		</Modal>
	);
}

export default ModalEdit;
