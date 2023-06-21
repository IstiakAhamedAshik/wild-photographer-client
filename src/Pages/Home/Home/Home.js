import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import HomeService from '../HomeService/HomeService';
import Memory from '../Memory/Memory';
import Sample from '../Sample/Sample';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';



const Home = () => {

    useTitle('Home');
    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://wild-photographer-server-pearl.vercel.app/limitedService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (loading) {
        return <progress className="progress w-full"></progress>
    }


    return (
        <div>
            <Banner></Banner>

            <p className='mt-36 text-4xl text-violet-600 transform hover:text-orange-600 font-bold transition duration-500 hover:scale-125'>Available Services</p>
            <small className='text-orange-600'>I have provide these services and online consultancy</small>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-10/12 mx-auto my-16 '>
                {
                    services.map(service => <HomeService
                        key={service._id}
                        service={service}
                    ></HomeService>)
                }
            </div>
            <Link to='/services' className='btn w-60 text-2xl btn-outline text-red-600 hover:bg-green-700 transform transition duration-500 hover:scale-125'><button>See All Services</button></Link>

            <About></About>
            <Sample></Sample>
            <Features></Features>
            <Memory></Memory>
            <Footer></Footer>
        </div>
    );
};

export default Home;