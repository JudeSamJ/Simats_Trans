import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import '../css/index.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='right-container'>
      <Card />
      <Card />
      <Card />
      </div>
     
    </div>
  );
};

export default App;
