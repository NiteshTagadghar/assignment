import { useState } from 'react';
import './App.css';
import ClinicComponent from './components';
import Welcome from './components/welcomePage';

function App() {
  const [goToWelcome, setGoToWelcome] = useState(true)
  

  return (
    <div className="App">
      {
        goToWelcome ? <Welcome setWelcome={setGoToWelcome} /> : <ClinicComponent  setWelcome={setGoToWelcome}/>
      }
      
    </div>
  );
}

export default App;
