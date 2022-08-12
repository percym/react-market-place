import React from 'react';
import './TopBar.css'

function TopBar() {
  return (
    <div className='topbar'>

      <div className='topbar-left'>
        <i className="topbar-social-icon fa-brands fa-instagram" />
        <i className="topbar-social-icon fa-brands fa-facebook"></i>
        <i className="topbar-social-icon fa-brands fa-square-twitter"></i>
        <i className="topbar-social-icon  fa-brands fa-linkedin"></i>
      </div>

      <div className='topbar-center'>
        
        <ul className='topbar-list '>
          <li className='topbar-list-item'>HOME</li>
          <li className='topbar-list-item'>ABOUT</li>
          <li className='topbar-list-item'>CONTACT </li>
          <li className='topbar-list-item'>CREATE LISTING</li>
          <li className='topbar-list-item'>LOGOUT</li>
        </ul>
      </div>

      <div className='topbar-right'>
        <img  className='topbar-profile-pic' src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <i className="topbar-search  fa-solid fa-magnifying-glass-location"></i>
      </div>

    </div>
  )
}

export default TopBar