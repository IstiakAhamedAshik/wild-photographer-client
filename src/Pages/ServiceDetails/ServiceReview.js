import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceReview = ({rev}) => {
    const { _id, serviceName, service, reviewer, photoURL, message, email } = rev;
    const { user } = useContext(AuthContext);
    return (
        <div>
            <tr className='flex justify-between'>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded-full w-12 h-12">
                                <img src={photoURL} alt="img" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{reviewer}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td className=''>
                    <small>{message}</small>
                </td>
            </tr>
        </div>
    );
};

export default ServiceReview;