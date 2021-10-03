import React from 'react';
import EntryLine from './EntryLine';

function EntryLines({
	values = [],
	deleteEntry,
	editEntry,
	isOpen,
	setIsOpen
}) {
	return values.map(entry => (
		<EntryLine
			key={entry.id}
			entry={entry}
			deleteEntry={deleteEntry}
			editEntry={editEntry}
			isOpen={isOpen}
			setIsOpen={setIsOpen}
		/>
	));
}

export default EntryLines;
