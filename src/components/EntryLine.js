import { Grid, Segment, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { removeEntryRedux } from '../actions/entries.actions';
function EntryLine({
	entry: { id, description, value, isExpense = false },
	editEntry
}) {
	const dispatch = useDispatch();
	return (
		<>
			<Segment color={`${isExpense ? 'red' : 'green'}`}>
				<Grid columns={3} textAlign='right'>
					<Grid.Row>
						<Grid.Column width={10} textAlign='left'>
							{description}
						</Grid.Column>
						<Grid.Column width={3} textAlign='right'>
							{`${isExpense ? '- ' : '+ '}`} ${value}
						</Grid.Column>
						<Grid.Column width={3}>
							<Icon name='edit' boardered onClick={() => editEntry(id)} />
							<Icon
								name='trash'
								boardered
								onClick={() => {
									dispatch(removeEntryRedux({ id }));
								}}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</>
	);
}

export default EntryLine;
