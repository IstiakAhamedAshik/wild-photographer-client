import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle'; 

const MyReview = () => {
    useTitle('My Reviews');
    const { user, logout } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`https://wild-photographer-server-pearl.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])




    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure? ');
        if (proceed) {
            fetch(`https://wild-photographer-server-pearl.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Successfully Deleted!')
                        const remaining = review.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }


    const handleReviewUpdate = (id, message) => {

        fetch(`https://wild-photographer-server-pearl.vercel.app/review/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({message: message})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = review.filter(rev => rev._id !== id)
                    const updating = review.find(rev => rev._id === id)
                    updating.message = message;

                    const newReview = [updating, ...remaining];
                    console.log(newReview, 'ya');
                    setReview(newReview);
                    toast.success('Review updated Successfully');
                }
            })
    }

    




    return (
        <div className='my-10'>
            {
                review.length > 0 ?
                    <>
                        <div className="overflow-x-auto w-11/12 mx-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <div className='grid grid-cols-5'>
                                            <th className=' bg-red-300'>Delete</th>
                                            <th className=' bg-blue-300'>Service</th>
                                            <th className=' bg-green-300'>Review</th>
                                            <th className=' bg-violet-300'>Person</th>
                                            <th className=' bg-orange-300'>Update</th>
                                        </div>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        review.map(rev => <MyReviewRow
                                            key={rev._id}
                                            rev={rev}
                                            handleDelete={handleDelete}
                                            handleReviewUpdate={handleReviewUpdate}
                                        ></MyReviewRow>)
                                    }

                                </tbody>

                            </table>
                        </div>
                    </>
                    :
                    <>
                        <p className='text-5xl text-red-600 mt-40'>No reviews were added!</p>
                    </>
            }

        </div>
    );
};

export default MyReview;