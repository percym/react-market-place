import React from 'react';
import Header from '../../header/Header';
import Listing from '../../listing/Listing';
import Sidebar from '../../sidebar/Sidebar';
import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className='home-page'> 
        <Listing />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home     