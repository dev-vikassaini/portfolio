import React from 'react'
import './Card.css';

function Card({ emoji, heading, detail }: any) {
    return (
        <React.Fragment>
            <div className='cards'>
                <img src={emoji} alt={heading} />
                <span>{heading}</span>
                <span>{detail}</span>
                <button className='cards-button'>Learn More</button>
            </div>
        </React.Fragment>
    )
}

export default Card;