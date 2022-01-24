import React from 'react';
import { SliderData } from './sliderData';

const Slider = () => {
    return(
    <div className='slider__container'>
        {SliderData.map((slide, index) => {        
             return <img className='slider__image' src={slide.image} alt='travel image' />;          
        })
        }
    </div>
    );
};

export default Slider;