import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';
function DisplayBalances() {
	return (
		<Segment textAlign='center'>
			<Grid columns={2} divided>
				<Grid.Row>
					<Grid.Column>
						<DisplayBalance
							title='Income'
							value='1,045.50'
							size='tiny'
							color='green'
							align='left'
						/>
					</Grid.Column>
					<Grid.Column>
						<DisplayBalance
							title='Expenses'
							value='625.30'
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
