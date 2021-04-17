import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { Fueling } from '../models/fueling';
import NavBar from './NavBar';


function App() {
  const [fuelings, setFuelings] = useState<Fueling[]>([]);

  useEffect(() => {
    axios.get<Fueling[]>('http://localhost:5000/api/fuelings').then(response => {
      setFuelings(response.data);
    })
  }, [])

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
       <List> 
          {fuelings.map(fueling => (
            <List.Item key={fueling.id}>
              {fueling.sroNumber}
            </List.Item>
          ))}
        </List>
      </Container>
        
    </>
  );
}

export default App;
