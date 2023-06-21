import React from 'react';
import useTitle from '../../hooks/useTitle';
import toast from 'react-hot-toast';

const AddService = () => {
    useTitle('Add Service');

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photoURL = form.photoURL.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        console.log(price);

        const service = {
            title,
            img: photoURL,
            price,
            description,
            rating
        }

        fetch('https://wild-photographer-server-pearl.vercel.app/services', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    toast.success('Service Added Successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }




    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content w-6/12 flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Service</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleAddService} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="title" name='title' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" placeholder="photoURL" name='photoURL' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" placeholder="Description" name='description' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price" name='price' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" placeholder="rating" name='rating' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className='my-5 btn btn-outline bg-violet-500 text-white hover:bg-violet-600' type='submit' value='Add Service' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddService;