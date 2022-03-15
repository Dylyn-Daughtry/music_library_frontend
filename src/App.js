import React, { useEffect, useState } from 'react';
import MainDisplay from './components/MainDisplay/MainDisplay';
import CreateSong from './components/CreateSong/CreateSong';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import axios from 'axios';
import Modal from './components/modal/modal';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const[hideShow,setHideShow]=useState(false)
  const [songs, setSongs] = useState([]);
  const [displaySongs, setDisplaySongs] = useState([])
  
  useEffect(() => {
    if (hideShow === false) getAllSongs();
  }, [hideShow])
  
  const handleHideShow = () =>{
      setHideShow(!hideShow)
  }
  async function createSong(prop){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', prop);
    if (response){
      handleHideShow()
    }
  }

  async function getAllSongs(prop){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    setDisplaySongs(response.data)
    
  }
  async function deleteSong(prop){
    let response = await axios.delete('http://127.0.0.1:8000/api/music/2/', prop)
  }

  const filterSongs = (searchterm) => {
    
    let matchingSongs = songs.filter((song) => {
      if(song.title.toLowerCase().includes(searchterm.toLowerCase()) ||

      song.artist.toLowerCase().includes(searchterm.toLowerCase()) || 

      song.album.toLowerCase().includes(searchterm.toLowerCase) || 

      song.release_date.toLowerCase().includes(searchterm.toLowerCase) || 

      song.genre.toLowerCase().includes(searchterm.toLowerCase)) 
        
      return true
    
    else return false
  })

  setDisplaySongs(matchingSongs)
};

  return (
    <div>
        <NavBar createSong={createSong} createOnClick={handleHideShow}/>
        <SearchBar filterSongs={filterSongs}/>
        <MainDisplay songs={displaySongs}/>
        <Modal onClick={handleHideShow}hideShow={hideShow}><CreateSong createSong={createSong} /></Modal>
    </div>
  );
  }
// }

export default App;
