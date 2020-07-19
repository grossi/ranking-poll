import React from 'react';
import logo from './logo.svg';
import './App.css';
import SortableComponent from './SortableList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <SortableComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;
