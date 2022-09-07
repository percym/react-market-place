import React from 'react';
import ListingItem from './listing-item/ListingItem';
import './Listing.css';

function Listing() {
  return (
    <div className='listing-section'>
        All Properties Listing
        <ListingItem />
        <ListingItem />
        <ListingItem />
        <ListingItem />
        <ListingItem />
        <ListingItem />
    </div>
  )
}

export default Listing