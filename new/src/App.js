
import './style.css';
import React from 'react';
import Home from './home';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login';


const App=() =>{
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    
  )
}

export default App;
