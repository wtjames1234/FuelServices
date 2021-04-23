import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

export default function FuelingForm() {
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
                <Button floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}


