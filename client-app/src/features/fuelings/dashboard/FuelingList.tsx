import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Fueling } from '../../../app/models/fueling';

interface Props {
    fuelings: Fueling[];
}

export default function FuelingList({fuelings}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {fuelings.map(fueling => (
                    <Item key={fueling.id}>
                        <Item.Content>
                            <Item.Header as='a'>{fueling.sroNumber}</Item.Header>
                            <Item.Meta>{fueling.date}</Item.Meta>
                            <Item.Description>
                                <div>{fueling.description}</div>
                                <div>{fueling.area}, {fueling.requestor} </div>     {/*you need to add other fueling properties to these components somehow*/}
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='view' color='blue' />
                                <Label basic content={fueling.type} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}