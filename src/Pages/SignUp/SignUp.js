import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signup from '../../assets/signup/signup.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('SignUp')

    const [error, setError] = useState('');
    const { createUser, loading, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                handleUser(name, photoURL);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            });
    }
    if (loading) {
        return <progress className="progress w-full"></progress>
    }

    const handleUser = (name, photURL) => {
        const profile = { displayName: name, photURL: photURL };
        updateUser(profile)
            .then((result) => {
                const user = result.user;
            })
            .catch(error => console.error(error));
    }



    return (
        <div className="hero">
            <div className="hero-content flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={signup} alt='' />
                </div>
                <div className="card flex-shrink-0 max-w-sm w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <small>Already have an account? please <Link to='/login' className='text-violet-700 underline'>Login</Link></small>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-outline text-violet-600 hover:bg-violet-600' type='submit' value='Signup' />
                        </div>

                    </form>
                    {
                        error
                    }
                </div>
            </div>
        </div>
    );
};

export default SignUp;