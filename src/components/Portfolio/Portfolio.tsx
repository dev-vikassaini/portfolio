import React from 'react'
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Sidebar from "../../assets/img/sidebar.png";
import Ecommerce from "../../assets/img/ecommerce.png";
import HOC from "../../assets/img/hoc.png";
import MusicApp from "../../assets/img/musicapp.png";

function Portfolio() {
    return (
        <React.Fragment>
            <div className="portfolio-container">
                <span>Recent Project</span>
                <span>Portfolio</span>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    grabCursor={true}
                    className="portfolio-slider"
                >
                    <SwiperSlide>
                        <img src={Sidebar} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Ecommerce} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={MusicApp} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HOC} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </React.Fragment>
    )
}

export default Portfolio;