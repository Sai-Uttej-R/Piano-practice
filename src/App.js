import React from 'react';
import './App.css';
import Piano from './Piano';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Learning Platform</h1>
      </header>
      <div className="content">
        {/* Add your interactive music learning components here */}
        <Piano />
      </div>
    </div>
  );
}

export default App;
