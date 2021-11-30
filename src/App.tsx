import React from 'react';
import './App.css';
import { NavBar } from './component/NavBar';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Test</h1>
      </div>
    </>
  );
}

export default App;
