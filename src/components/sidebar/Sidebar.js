import React from 'react';
import './Sidebar.css';
import sidebarImg from '../../images/pexels-photo-3408744.jpeg';

function Sidebar() {
    return (
        <div className='sidebar-section'>
            <div className='sidebar-subsection'>
                <span className='sidebar-about'>about me</span>
                <img src={sidebarImg} className='sidebar-img' />
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className='sidebar-subsection'>
                <span className='sidebar-title'>categories</span>
                <ul className='sidebar-categories'>
                    <li className='sidebar-category'>Buy</li>
                    <li className='sidebar-category'>Sell</li>
                    <li className='sidebar-category'>Rent</li>
                    <li className='sidebar-category'>Hostel</li>
                    <li className='sidebar-category'>B & B</li>
                    <li className='sidebar-category'>Hotel</li>
                </ul>

            </div>
            <div className='sidebar-subscetion'>
                <span className='sidebar-title'>follow us on :</span>
                <div className='sidebar-social-icons'>
                    <i className="sidebar-social-icon fa-brands fa-instagram" />
                    <i className="sidebar-social-icon fa-brands fa-facebook"></i>
                    <i className="sidebar-social-icon fa-brands fa-square-twitter"></i>
                    <i className="sidebar-social-icon  fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar