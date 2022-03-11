import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='NavBarWrapper'>
            <h1 className='Title'>Audio Box</h1>
        <div className='NavBarContainer'>
          <div>
              <a className='add' href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add Song
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
          </div>
        </div>    
    </div>
  )
}

export default NavBar