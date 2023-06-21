import React from 'react';
import img1 from '../../../assets/memory/1.svg';
import img2 from '../../../assets/memory/2.svg';
import img3 from '../../../assets/memory/3.svg';

const Memory = () => {
    return (
        <div className="hero w-10/12 mx-auto rounded-xl bg-violet-200 my-28">
            <div className="hero-content flex-col lg:flex-row w-3/4">
                <div className=''>
                    <div className="h-96 carousel carousel-vertical rounded-box">
                        <div className="carousel-item h-full">
                            <img src={img1} alt=''/>
                        </div>
                        <div className="carousel-item h-full">
                            <img src={img2} alt=''/>
                        </div>
                        <div className="carousel-item h-full">
                            <img src={img3} alt=''/>
                        </div>
                    </div>
                    <small>scroll to change</small>
                </div>
                <div className='w-4/6 ml-10'>
                    <h1 className="text-5xl text-start font-bold ">
                        Better <br />
                        Solution <br />
                        for your <br />
                        <span className='text-orange-600'>Memory</span>
                    </h1>
                    <p className="py-6 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Memory;