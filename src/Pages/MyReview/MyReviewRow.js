import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviewRow = ({ rev, handleDelete, handleReviewUpdate }) => {
    const { _id, serviceName, service, reviewer, photoURL, message, email } = rev;
    const { user } = useContext(AuthContext);
    const [reviewedService, setReviewedService] = useState([]);

    

    useEffect(() => {
        fetch(`https://wild-photographer-server-pearl.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewedService(data))
    }, [service])



    return (
        <div className=''>
            <tr className='grid grid-cols-5'>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-outline text-red-600 text-xl hover:text-red-500'>Delete</button>
                    </label>
                </th>
                <td>
                    <div className="flex space-x-3">
                        <div className="avatar">
                            <div className="rounded w-10 h-10">
                                {
                                    reviewedService?.img &&
                                    <img src={reviewedService.img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold text-sm">{serviceName}</div>
                        </div>
                    </div>

                </td>
                <td className='border-green-300 border-2 rounded-xl my-2'>
                    <small className=''>{message}</small>
                </td>
                <td>
                    <div className="flex space-x-3">
                        <div className="avatar">
                            <div className="rounded-full w-8 h-8">
                                {
                                    user?.uid &&
                                    <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold text-xs">{reviewer}</div>
                            <div className="text-xs opacity-50">{email}</div>
                        </div>
                    </div>

                </td>

                <td>
                    {/* The button to open modal */}
                    <label  htmlFor="my-modal-6" className="btn">Update Review</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form  className='my-5 flex flex-col'>
                                <input type='text' name='review' placeholder='comment here' className='input input-ghost w-full bg-violet-100' />
                                
                            </form>
                                <button className='my-5 btn btn-outline bg-violet-500 text-white hover:bg-violet-600' type='submit'>Add Review</button>
                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="btn">Done</label>
                            </div>
                        </div>
                    </div>
                </td>

            </tr>


        </div >
    );
};

export default MyReviewRow;