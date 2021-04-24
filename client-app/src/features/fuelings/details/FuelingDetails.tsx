import React from 'react';
import { Button, ButtonGroup, Card, Icon, Image } from 'semantic-ui-react';
import { Fueling } from '../../../app/models/fueling';

interface Props {
    fueling: Fueling;
    cancelSelectFueling: () => void;
    openForm: (id: string) => void;
}

export default function FuelingDetails({fueling, cancelSelectFueling, openForm}: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${fueling.description}.png`} /> 
            <Card.Content>
                <Card.Header>{fueling.sroNumber}</Card.Header>
                <Card.Meta>
                    <span>{fueling.date}</span>
                </Card.Meta>
                <Card.Description>
                    {fueling.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(fueling.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectFueling} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}