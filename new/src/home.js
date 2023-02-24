import Header from './components/header';
import './style.css';
import React from 'react';
import Meme from './components/meme';


const Home=() =>{
  return (
    
    <div className="Home">
      <Header />
      <Meme />
    </div>
    
  )
}

export default Home;
