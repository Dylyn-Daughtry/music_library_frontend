import React, { useEffect, useState } from 'react';
import MainDisplay from './components/MainDisplay/MainDisplay';
import CreateSong from './components/CreateSong/CreateSong';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function createSong(prop){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', prop);
    console.log(response.data)
  }

  async function getAllSongs(prop){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    console.log(response.data)
  }

  return (
    <div>
        <NavBar createSong={createSong}/>
        <MainDisplay songs={songs}/>
    </div>
  );
  }

export default App;
