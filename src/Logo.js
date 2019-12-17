import React from 'react';
import logo from './logo.svg';
import logo2 from './logo2.svg';
//import './App.css';


function Logo({url=1,acc,inputValor,inputAcc}) {

   let src = (url==0?logo:logo2)
   const onClick = function(){
     console.log('haiendfo click')
     let rand = Math.round(Math.random())
     console.log(rand)
     acc(rand)

     console.log(src)
   }

   console.log(src)

  return (
    <div onClick={onClick}>
      <img src={src} className="App-logo" alt="logo"   />
      <p> Input valor - Hermano {inputValor}</p>
    </div>

  );
}

export default Logo;
