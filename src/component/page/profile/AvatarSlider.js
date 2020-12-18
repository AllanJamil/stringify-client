import React, {useState} from 'react';
import Slider from 'react-slick';
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";

import './AvatarSlider.css';
import avatar1 from '../../../images/avatars/avatar1.png';
import avatar2 from '../../../images/avatars/avatar2.png';
import avatar3 from '../../../images/avatars/avatar3.png';
import avatar4 from '../../../images/avatars/avatar4.png';
import avatar5 from '../../../images/avatars/avatar5.png';
import avatar6 from '../../../images/avatars/avatar6.png';
import avatar7 from '../../../images/avatars/avatar7.png';
import avatar8 from '../../../images/avatars/avatar8.png';
import avatar9 from '../../../images/avatars/avatar9.png';
import avatar10 from '../../../images/avatars/avatar10.png';
import avatar11 from '../../../images/avatars/avatar11.png';
import avatar12 from '../../../images/avatars/avatar12.png';
import avatar13 from '../../../images/avatars/avatar13.png';
import avatar14 from '../../../images/avatars/avatar14.png';
import avatar15 from '../../../images/avatars/avatar15.png';
import avatar16 from '../../../images/avatars/avatar16.png';

const images = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avatar11,
    avatar12,
    avatar13,
    avatar14,
    avatar15,
    avatar16
]


const AvatarSlider = () => {

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight/>
            </div>
        );
    };

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft/>
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const renderImages = images.map((img, idx) => {
        let previous = imageIndex === 0 ? 15 : imageIndex - 1;
        let next = imageIndex === images.length - 1 ? 0 : imageIndex + 1;
        console.log(imageIndex)

        if (idx === imageIndex) {
            return (
                <div key={idx} className={idx === imageIndex ? "slide slide-active" : "slide"}>
                    <img src={img} alt={img}/>
                </div>
            );
        } else if (idx === previous || idx === next) {
            return (
                <div key={idx} className="slide slide-adjacent">
                    <img src={img} alt={img}/>
                </div>
            );
        } else {
            return (
                <div key={idx} className="slide">
                    <img src={img} alt={img}/>
                </div>
            );
        }

    });

    const settings = {
        infinite: true,
        lazyLoad: false,
        focusOnSelect: true,
        draggable: true,
        speed: 500,
        slidesToShow: 5,
        centerMode: true,
        swipeToSlide: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    }
    return (
        <div className="container-avatar">
            <Slider {...settings}>
                {renderImages}
            </Slider>
        </div>
    );
};

export default AvatarSlider;