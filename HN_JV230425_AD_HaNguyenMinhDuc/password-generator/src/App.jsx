import {useState} from 'react';
import { numbers, upperCaseLetters, lowerCaseLettters, specialCharacters } from './charactor';
import './App.css';
import CardContainer from './components/CardContainer';

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(20);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);  

  const handleChange = (e) => {
    setLength(e.target.value);
  }

  const handleGeneratePass = () =>{
    const length = parseInt(document.getElementById('length').value);
    const upperCase = document.getElementById('upper').checked;
    const lowerCase = document.getElementById('lower').checked;
    const number = document.getElementById('number').checked;
    const symbol = document.getElementById('symbol').checked;
    
  }

  return (
    <div className="App">
      <CardContainer />
    </div>
  );
}

export default App;
