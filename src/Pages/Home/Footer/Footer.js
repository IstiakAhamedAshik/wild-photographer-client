import React from 'react';
import logo from '../../../assets/logo/logo.png';

const Footer = () => {
    return (
        <footer className="footer footer-center py-5 bg-gray-400 text-primary-content">
            <div>
                <img className='w-12' src={logo} alt='' />
                <p className="font-bold text-xl text-violet-200">
                    A Wild Photographer <br /> <small className='text-black font-medium'>Providing reliable service since 2012</small>
                </p>
                <p className='text-black mt-5'>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;