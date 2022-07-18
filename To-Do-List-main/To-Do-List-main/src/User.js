import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
 export default function User(props){
  useEffect(()=>{
    alert('for count');
  },[props.count])

  return (
    <div className="App">
    <h1>Count Props :{props.count}</h1>
    <h1>Data  Props:{props.data}</h1>
    </div>
  )
  
}