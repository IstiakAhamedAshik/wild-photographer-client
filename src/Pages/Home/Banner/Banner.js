import React from 'react';
import img1 from '../../../assets/slider/1.jpg'
import img2 from '../../../assets/slider/2.jpg'
import img3 from '../../../assets/slider/3.jpg'
import img4 from '../../../assets/slider/4.jpg'
import img5 from '../../../assets/slider/5.jpg'
import img6 from '../../../assets/slider/6.jpg'
import './Banner.css';
import SliderItem from './SliderItem';


const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1
    }
]



const Banner = () => {
    return (
        <div>
            <div className="carousel w-10/12 h-[600px] m-auto my-10 rounded-lg">
                {
                    bannerData.map(slide => <SliderItem
                        key={slide.id}
                        slide={slide}
                    ></SliderItem>)
                }
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Banner;