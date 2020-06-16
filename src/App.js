import React, { useState } from 'react';
import Parent from './parent';
import CounterContext from './counterContext';
import './App.css';

function App() {

  let counterState = useState(0);

  return (
    <CounterContext.Provider value={counterState}>
      <div className = 'App'>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
