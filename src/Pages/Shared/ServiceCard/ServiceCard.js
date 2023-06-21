import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service; 
    return (
        <div className="card card-compact bg-base-100 shadow-xl transform duration-500 hover:scale-110">
            <figure>

                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='transform transition duration-500 hover:scale-125' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>

                {/* <img src={img} alt="Shoes" /> */}

            </figure>
            <div className="card-body">
                <h2 className="card-title text-violet-700">{title}</h2>
                <p className='text-left text-orange-600 font-semibold'>Price: ${price}</p>
                <p className='text-left'>{description.length > 100 ?
                    <>{description.slice(0, 100) + '...'} <Link to={``} className='text-decoration-none text-blue-400 hover:text-blue-600'>See details</Link></>
                    :
                    <>{description}</>
                }</p>
                <div className="card-actions justify-center">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-outline hover:bg-green-700" >Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;