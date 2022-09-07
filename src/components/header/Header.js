import React from 'react';
import './Header.css';
import backimage from '../../images/pexels-photo-439391.jpeg';

function Header() {
  return (
    <div className='header-section'>
      <div className='hero-text'>
        <span className='hero-text-title'>Listings</span>
        <span className='hero-text-subtitle'>Listing Application</span>
      </div>
      <img  src={backimage} className='hero-image'/>
    </div>
  )
}

export default Header 