import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <React.Fragment>
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className='profile-name'>Vikas Saini</div>
                    <span>Toggle</span>
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
                    <div className='button'>
                        Contact
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar