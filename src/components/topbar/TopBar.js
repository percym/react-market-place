import React from 'react';
import './TopBar.css'

function TopBar() {
  return (
    <div className='topbar'>

      <div className='topbar-left'>
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-square-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>

      <div className='topbar-center'>
        
        <ul className='topbar-list '>
          <li className='topbar-social topbar-list-item'>HOME</li>
          <li className='topbar-social topbar-list-item'>ABOUT US</li>
          <li className='topbar-social topbar-list-item'>CONTACT </li>
          <li className='topbar-social topbar-list-item'>CREATE LISTING</li>
          <li className='topbar-social topbar-list-item'>LOGOUT</li>
        </ul>
      </div>

      <div className='topbar-right'>
        <img  className='topbar-profile' src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <i className=" topbar-search topbar-social fa-solid fa-magnifying-glass-location"></i>
      </div>

    </div>
  )
}

export default TopBar