import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import Input from './Input';
import { useEffect, useState } from 'react';


function App() {

    const [logo , setLogo] = useState(0)
    const [valor, setValor] = useState(0)
   //const logo = useState("logo.svg")
   //const otro = logo[1];
   //const otro2 = logo[0];
  return (
    <div className="App">
      <header className="App-header">
        <Logo url= {logo} acc={setLogo}  inputValor={valor}  inputAcc={setValor}  />
        <Input inputValor={valor}  inputAcc={setValor} />

        <p>
             Componente - Padre - {valor}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
