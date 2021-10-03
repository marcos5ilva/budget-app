import React from 'react';
import EntryLine from './EntryLine';

function EntryLines({ values = [], editEntry }) {
	return values.map(entry => (
		<EntryLine key={entry.id} entry={entry} editEntry={editEntry} />
	));
}

export default EntryLines;
