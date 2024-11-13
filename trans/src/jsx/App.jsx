import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import Bottombar from './Bottombar'
import '../css/index.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='right-container'>
      <Card />
      </div>
      <Bottombar/>
    </div>
  );
};

export default App;
