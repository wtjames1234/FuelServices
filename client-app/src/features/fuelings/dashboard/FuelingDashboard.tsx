import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Fueling } from '../../../app/models/fueling';
import FuelingList from './FuelingList';

interface Props {
    fuelings: Fueling[];
}

export default function FuelingDashboard({fuelings}: Props) {
    return(
        <Grid>
            <Grid.Column width='10'>
                <List> 
                    <FuelingList fuelings={fuelings} />
                </List>
            </Grid.Column>
        </Grid>
    )
}