import React from 'react'
import './Floating.css';

function Floating({ image, keySkill, position }) {
    return (
        <React.Fragment>
            <div className='floating-container'>
                <img src={image} alt="" />
                <span>
                    {keySkill} <br /> {position}
                </span>
            </div>
        </React.Fragment>
    )
}

export default Floating;