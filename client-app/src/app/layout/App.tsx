import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { Fueling } from '../models/fueling';
import NavBar from './NavBar';
import FuelingDashboard from '../../features/fuelings/dashboard/FuelingDashboard';


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
        <FuelingDashboard fuelings={fuelings} />
      </Container>
        
    </>
  );
}

export default App;
