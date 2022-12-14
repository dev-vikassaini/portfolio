import React from 'react'
import './Navbar.css';
import Switch from '../Switch/Switch';

function Navbar() {
    return (
        <React.Fragment>
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className='profile-name'>VIKAS KUMAR</div>
                    <Switch />
                </div>
                <div className="navbar-right">
                    <div className='navbar-list'>
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Experience</li>
                            <li>Portfolio</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                    <div className='button nav-button'>
                        Contact
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar