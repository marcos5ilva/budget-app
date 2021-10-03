import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCancel({ addEntry }) {
	return (
		<Button.Group style={{ marginTop: 20 }}>
			<Button style={{ width: 100 }}>Cancel</Button>
			<Button.Or />
			<Button
				primary
				style={{ width: 100 }}
				onClick={() => {
					addEntry();
				}}
			>
				Ok
			</Button>
		</Button.Group>
	);
}

export default ButtonSaveOrCancel;
