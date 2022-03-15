import React, { useState } from 'react'
import './NavBar.css'
import Modal from '../modal/modal'
import CreateSong from '../CreateSong/CreateSong'

const NavBar=(props)=> {

  const[hideShow,setHideShow]=useState(false)

    const handleHideShow = () =>{
        setHideShow(!hideShow)
    }


  return (
    <div className='NavBarWrapper'>
            <h1 className='Title'>Audio Box</h1>
        <div className='NavBarContainer'>
          <div>
              <a onClick={handleHideShow} className='add' href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add Song
                {/* <h1 onClick={handleHideShow}>Add Song</h1> */}
            </a>
            <a className='update' href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Update Song
            </a>
            <a className='delete' href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Delete Song
            </a>
            <Modal onClick={handleHideShow}hideShow={hideShow}><CreateSong createSong={props.createSong} /></Modal>
          </div>
        </div>    
    </div>
  )
}

export default NavBar