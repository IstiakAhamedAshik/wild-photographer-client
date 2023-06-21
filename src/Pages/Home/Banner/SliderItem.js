import React from 'react';

const SliderItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full slider-img">
            <img src={image} className="w-full" alt='' />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-5">
                <a href={`#slide${prev}`} className="btn">❮</a>
                <p className='text-white text-2xl font-semibold'>Wild Life Photographer <br />
                    Service & <br />
                    Consultancy
                </p>
                <a href={`#slide${next}`} className="btn">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;