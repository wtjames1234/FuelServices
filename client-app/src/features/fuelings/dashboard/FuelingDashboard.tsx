import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Fueling } from '../../../app/models/fueling';
import FuelingDetails from '../details/FuelingDetails';
import FuelingForm from '../form/FuelingForm';
import FuelingList from './FuelingList';

interface Props {
    fuelings: Fueling[];
    selectedFueling: Fueling | undefined;
    selectFueling: (id: string) => void;
    cancelSelectFueling: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
}

export default function FuelingDashboard({fuelings, selectedFueling, selectFueling, cancelSelectFueling, editMode, openForm, closeForm}: Props) {
    return(
        <Grid>
            <Grid.Column width='10'>
                <List> 
                    <FuelingList fuelings={fuelings} selectFueling={selectFueling} />
                </List>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedFueling && !editMode &&
                <FuelingDetails 
                    fueling={selectedFueling} 
                    cancelSelectFueling={cancelSelectFueling}
                    openForm={openForm} 
                />}
                {editMode &&
                <FuelingForm closeForm={closeForm} fueling={selectedFueling} />}
            </Grid.Column>
        </Grid>
    )
}