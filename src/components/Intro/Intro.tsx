import React from 'react'
import './Intro.css'
import Github from '../../assets/img/github.png';
import LinkedIn from '../../assets/img/linkedin.png';
import Instrgram from '../../assets/img/instagram.png';

import Vector1 from '../../assets/img/Vector1.png';
import Vector2 from '../../assets/img/Vector2.png';
import boy from '../../assets/img/boy.png';
import thumbup from '../../assets/img/thumbup.png';
import crown from '../../assets/img/crown.png';
import glassesimoji from '../../assets/img/glassesimoji.png';
import Floating from '../Floating/Floating';

import { motion } from 'framer-motion';

function Intro() {
    const transition = { duration: 2, type: "spring" };
    return (
        <React.Fragment>
            <div className='intro-container'>
                <div className='intro-left'>
                    <div className="intro-name">
                        <span> Hy! I am</span>
                        <span> Vikas Saini</span>
                        <span> Fullstack Developer with high level of experience in the development, producing the Quality work</span>
                    </div>
                    <button className='intro-button button'>
                        Hire me
                    </button>
                    <div className='intro-icons'>
                        <a href="#!"><img src={Github} alt="Github" /></a>
                        <a href="#!"><img src={LinkedIn} alt="LinkedIn" /></a>
                        <a href="#!"><img src={Instrgram} alt="Instrgram" /></a>
                    </div>
                </div>
                <div className='intro-right'>
                    <a href="#!"><img src={Vector1} alt="Vector1" /></a>
                    <a href="#!"><img src={Vector2} alt="Vector2" /></a>
                    <a href="#!"><img src={boy} alt="boy" /></a>
                    <motion.img
                        initial={{ left: "-36%" }}
                        whileInView={{ left: "-24%" }}
                        transition={transition}
                        src={glassesimoji} alt="Glassesimoji" />


                    <motion.div
                        initial={{ top: "-4%", left: "74%" }}
                        whileInView={{ left: "68%" }}
                        transition={transition} className='floating-1'>
                        <Floating image={crown} keySkill="Fullstack" position="Developer" />
                    </motion.div>

                    <motion.div
                        initial={{ left: "9rem", top: "18rem" }}
                        whileInView={{ left: "0rem" }}
                        transition={transition} className='floating-2'>
                        <Floating image={thumbup} keySkill="React,Angular,.NET CORE" position="Developer" />
                    </motion.div>

                    <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
                    <div className='blur' style={{ background: '#CIF5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Intro