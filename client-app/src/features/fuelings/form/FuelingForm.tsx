import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Fueling } from '../../../app/models/fueling';

interface Props {
    fueling: Fueling | undefined;
    closeForm: () => void;
}

export default function FuelingForm({fueling: selectedFueling, closeForm}: Props) {

    const initialState = selectedFueling ?? {
        id: '',
        sroNumber: '',
        description: '',
        type: '',
        date: '',
        area: '',
        requestor: '',
        hours: '',
        odometer: '',
        gallons: ''
    }

    const [fueling, setFueling] = useState(initialState);

    function handleSubmit() {
        console.log(fueling);
    }

    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='SRONumber' />
                <Form.TextArea placeholder='Description' />
                <Form.Input placeholder='Type' />
                <Form.Input placeholder='Date' />
                <Form.Input placeholder='Area' />
                <Form.Input placeholder='Requestor' />
                <Form.Input placeholder='Hours' />
                <Form.Input placeholder='Odometer' />
                <Form.Input placeholder='Gallons' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}


