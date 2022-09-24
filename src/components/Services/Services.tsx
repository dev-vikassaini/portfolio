import React from 'react'
import './Services.css';
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";
import Card from '../Card/Card';
import Resume from "../../assets/img/heartemoji.png";
function Services() {
    return (
        <React.Fragment>
            <div className='services-container'>
                <div className='services-left'>
                    <span>My Awesome</span>
                    <span>Services</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione natus iusto ipsa,
                        <br /> dolorem necessitatibus aspernatur quis nulla doloremque corrupti
                        <br />pariatur, architecto libero aperiam excepturi sint ab nisi eligendi, alias quasi? Ad, enim odio!</span>
                    <a href={Resume} download>
                        <button className='button services-button' >
                            Download CV
                        </button>
                    </a>
                    <div className='blur service-blur1' style={{ background: '#ABF1FF94' }}></div>
                </div>
                <div className='services-right'>
                    <div style={{ left: '14rem' }}>
                        <Card
                            emoji={HeartEmoji}
                            heading={"Design"}
                            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
                        />
                    </div>

                    <div style={{ top: "12rem", left: '-4rem' }}>
                        <Card
                            emoji={Glasses}
                            heading={"Developer"}
                            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
                        />
                    </div>

                    <div style={{ top: "19rem", left: '12rem' }}>
                        <Card
                            emoji={Humble}
                            heading={"UI/UX"}
                            detail={
                                "Lorem ispum dummy text are usually use in section where we need some random text"
                            }
                        />
                    </div>

                    <div className="blur service-blur2"
                        style={{ background: "var(--purple)" }}></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Services;