import React from 'react';
import {useState} from 'react';
// import './App.css';

function App() {

  // Array destructuring
  const [counter,setCounter] = useState(0);

  const mouseClicked = () => {
    setCounter(counter++)
    console.log(counter)
  }

  // JSX
  return (
    <div>
      <button onClick = {mouseClicked}>
        Press me {counter}
      </button>
    </div>
  );
}

export default App;
