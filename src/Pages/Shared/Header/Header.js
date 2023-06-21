import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <img className='w-10' src={logo} alt='' />
                    <Link to='/' ><button className="btn btn-ghost normal-case text-xl text-violet-600 font-bold">Wild <span className='mx-2 text-violet-400'>vs.</span> Camera</button></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-green-700">
                        <li><Link to='/' className='transform duration-500 hover:scale-110'>Home</Link></li>
                        <li><Link to='/services' className='transform duration-500 hover:scale-110'>Services</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/myReview' className='transform duration-500 hover:scale-110'>My Reviews</Link></li>
                                    <li><Link to='/addService' className='transform duration-500 hover:scale-110'>Add Service</Link></li>
                                </>
                                :
                                <>
                                </>
                        }
                        <li><Link to='/blogs' className='transform duration-500 hover:scale-110'>Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    {
                        user?.uid ?
                            <>
                                <div className="avatar online">
                                    <div className="w-10 border-4 border-green-500 rounded-full">
                                        <img src={user?.photoURL} alt='img'/>
                                    </div>
                                </div>
                                <p className='text-xs'>{user?.email}</p>
                                <Link to='' onClick={handleLogout}><button className='btn btn-outline w-16 text-red-600 border-red-500 hover:bg-red-700 text-xs'>LogOut</button></Link>
                            </>
                            :
                            <>
                                <Link to='/login'><button className='btn btn-outline bg-green-700 text-white hover:bg-green-900 border-none'>Login</button></Link>
                                <Link to='/signup'><button className='btn btn-outline bg-violet-700 text-white hover:bg-violet-900 border-none'>Sign Up</button></Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;