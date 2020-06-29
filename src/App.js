import React from 'react';
import ebay from './ebay.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={ebay} className='logo' alt='logo' />
        {/* <img src={require('./ebay.png')} className='App-logo' alt='logo' /> */}

        <p className='p'>shop by category</p>
        <input className='search'></input>
      </header>
    </div>
  );
}

export default App;
