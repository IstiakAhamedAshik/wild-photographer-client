import React from 'react';
import background from '../../../assets/about-image/background.jpg';
import person from '.././../../assets/about-image/person.jpg';

const About = () => {
    return (
        <div className='my-20'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-1/2 relative'>
                        <img  src={background} className="max-w-sm rounded-lg shadow-2xl border-2  border-violet-500 " alt='' />
                        <img src={person} className="absolute w-20 h-20 bottom-4 right-36 rounded-full border-4 border-orange-600" alt='' />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-violet-600 font-bold my-3 text-xl text-right hover:underline'>About Me</p>
                        <h1 className="text-5xl font-bold text-end text-orange-600">Experienced <br />for<br /> Professional Click</h1>
                        <p className="py-6 text-right text-gray-500">I provide professional service and consultancy about wild photography in different categories. You can choose on of them, and review my works. Thank you.</p>
                    </div>
                </div>
            </div>
            <button className="btn bg-green-700 hover:bg-green-800 shadow-xl">Appointment</button>
        </div>
    );
};

export default About;