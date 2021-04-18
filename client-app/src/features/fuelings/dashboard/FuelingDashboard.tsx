import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Fueling } from '../../../app/models/fueling';

interface Props {
    fuelings: Fueling[];
}

export default function FuelingDashboard({fuelings}: Props) {
    return(
        <Grid>
            <Grid.Column width='10'>
                <List> 
                    {fuelings.map(fueling => (
                        <List.Item key={fueling.id}>
                            {fueling.sroNumber}
                        </List.Item>
                     ))}
                </List>
            </Grid.Column>
        </Grid>
    )
}