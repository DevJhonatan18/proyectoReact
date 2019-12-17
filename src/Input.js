import React from 'react';
import { useEffect, useState } from 'react';
//import logo from './logo.svg';
//import logo2 from './logo2.svg';
//import './App.css';


function Input({inputValor=0,inputAcc}) {

  const handleSubmit = function(event){


     //console.log()
  //  let rand = Math.round(Math.random())
  //  console.log(rand)
  //  acc(rand)

  //  console.log(src)
     event.preventDefault();
  }

  const handleChange = function(event){
    inputAcc(event.target.value);
  }


  return (

    <div   >
     <form onSubmit={handleSubmit} >
       <input text="text" value={inputValor} onChange={handleChange} />



     </form>
    </div>
  );
}

export default Input;
