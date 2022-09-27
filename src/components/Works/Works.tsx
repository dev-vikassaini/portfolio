import React from 'react'
import './Works.css';
import Upwork from "../../assets/img/Upwork.png";
import Fiverr from "../../assets/img/fiverr.png";
import Amazon from "../../assets/img/amazon.png";
import Shopify from "../../assets/img/Shopify.png";
import Facebook from "../../assets/img/Facebook.png";
import { motion } from "framer-motion";

function Works() {
    return (
        <React.Fragment>
            <div className="work-container">
                <div className="work-left">
                    <span>
                        Works for All these
                    </span>
                    <span>Brands & Clients</span>
                    <span>
                        Lorem ispum is simpley dummy text of printing of printing Lorem
                        <br />
                        ispum is simpley dummy text of printingLorem ispum is simpley dummy
                        text
                        <br />
                        y dummy text of printingLorem
                        <br />
                        ispum is simpley dummy text of printing
                    </span>

                    <button className="button work-button">Hire Me</button>

                    <div className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}></div>
                </div>
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="work-right">
                    <div className="work-mainCircle">
                        <div className="work-secCircle">
                            <img src={Upwork} alt="" />
                        </div>
                        <div className="work-secCircle">
                            <img src={Fiverr} alt="" />
                        </div>
                        <div className="work-secCircle">
                            <img src={Amazon} alt="" />
                        </div>{" "}
                        <div className="work-secCircle">
                            <img src={Shopify} alt="" />
                        </div>
                        <div className="work-secCircle">
                            <img src={Facebook} alt="" />
                        </div>
                    </div>
                    <div className="work-backCircle blueCircle"></div>
                    <div className="work-backCircle yellowCircle"></div>
                </motion.div>
            </div>
        </React.Fragment>
    )
}

export default Works; 