import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';
function DisplayBalances({ totalIncomes, totalExpenses }) {
	return (
		<Segment textAlign='center'>
			<Grid columns={2} divided>
				<Grid.Row>
					<Grid.Column>
						<DisplayBalance
							title='Income'
							value={totalIncomes}
							size='tiny'
							color='green'
							align='left'
						/>
					</Grid.Column>
					<Grid.Column>
						<DisplayBalance
							title='Expenses'
							value={totalExpenses}
							size='tiny'
							color='red'
							align='left'
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
}

export default DisplayBalances;
