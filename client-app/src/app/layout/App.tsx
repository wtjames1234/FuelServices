import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { Fueling } from '../models/fueling';
import NavBar from './NavBar';
import FuelingDashboard from '../../features/fuelings/dashboard/FuelingDashboard';


function App() {
  const [fuelings, setFuelings] = useState<Fueling[]>([]);
  const [selectedFueling, setSelectedFueling] = useState<Fueling | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Fueling[]>('http://localhost:5000/api/fuelings').then(response => {
      setFuelings(response.data);
    })
  }, [])

  function handleSelectFueling(id: string) {
    setSelectedFueling(fuelings.find(x => x.id === id));
  }

  function handleCancelSelectFueling() {
    setSelectedFueling(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectFueling(id) : handleCancelSelectFueling();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{marginTop: '7em'}}>
        <FuelingDashboard 
          fuelings={fuelings}
          selectedFueling={selectedFueling}
          selectFueling={handleSelectFueling}
          cancelSelectFueling={handleCancelSelectFueling}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}  
        />
      </Container>
        
    </>
  );
}

export default App;
