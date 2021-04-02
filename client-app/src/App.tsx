import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [fuelings, setFuelings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/fuelings').then(response => {
      console.log(response);
      setFuelings(response.data);
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='FuelServices' />
        <List> 
          {fuelings.map((fueling: any) => (
            <List.Item key={fueling.id}>
              {fueling.sroNumber}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
