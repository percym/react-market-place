import React from 'react';
import './ListingItem.css';
import houseImage from '../../../images/pexels-photo-106399.jpeg';

function ListingItem() {
  return (
    <div className='listing-item'>
       <img src={houseImage} />
       <div className='listing-details'>
        <div className='listing-categories'>

        </div>

       </div>
    </div>
  )
}

export default ListingItem  