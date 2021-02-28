import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setNayoks(data));

  }, [])

  return (
    <div className="App">
      <header className="App-header">
       {
         nayoks.map( nk => <Nayok name={nk.name} age={nk.age}></Nayok>)
       }
        
      </header>
    </div>
  );
}

function Nayok (props) {
  const nayokStyle = {
    border: '2px solid purple',
    margin : '20px'
  }
  return (
   <div style={nayokStyle}>
     <h1>I'm Hero : {props.name} </h1>
     <h3>I Have done 5 movies in {props.age} years </h3>
    </div>
  )
}

export default App;
