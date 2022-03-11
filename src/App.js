import React, { useState } from 'react';
import MainDisplay from './components/MainDisplay/MainDisplay';
// import CreateSong from './components/CreateSong/CreateSong';
import NavBar from './components/NavBar/NavBar';
import './App.css'


function App() {
  return (
    <div>
        <NavBar/>
        <MainDisplay/>
    </div>
  );
  }

export default App;
