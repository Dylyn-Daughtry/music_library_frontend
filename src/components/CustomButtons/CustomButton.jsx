import React, { useState } from 'react';
import Modal from '../modal/modal';
import './CustomButton.css'
import CreateSong from '../CreateSong/CreateSong';

const CustomButton = (props) => {

    const[hideShow,setHideShow]=useState(false)

    const handleHideShow = () =>{
        setHideShow(!hideShow)
    }


    return(
        <div>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h1 onClick={handleHideShow}>Add Song</h1>
            </a>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Update Song
            </a>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Delete Song
            </a>
        <Modal onClick={handleHideShow}hideshow={hideShow}><CreateSong/></Modal>
        </div>
    )
}
export default CustomButton