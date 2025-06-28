import React from 'react';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import './Navbar.css'
import { useState } from 'react';
import signOutAnimation from '../../assets/logout.json'
import Lottie from 'lottie-react';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const { user, signOutUser } = useAuth();
    const [isSignOut, setIsSignOut] = useState(false);

    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Your account will be signed out',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#422ad5',
            cancelButtonColor: 'red',
            confirmButtonText: 'Yes, Sign Out',
        }).then((result) => {
            if (result.isConfirmed) {
                setIsSignOut(true);

                setTimeout(() => {
                    setIsSignOut(false);
                    signOutUser();
                    toast.success('Account signed out successfully');
                }, 2000);
            }
        });
    };




    if (isSignOut) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <Lottie animationData={signOutAnimation} loop={true} className='w-72 h-72'></Lottie>
            </div>
        )
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/quaries'>Quaries</NavLink></li>
        {
            user && <>
                <li><NavLink to='/recommendationsForMe'>Recommendations For Me</NavLink></li>
                <li><NavLink to='/myQueries'>My Queries</NavLink></li>
                <li><NavLink to='/myRecommendations'>My recommendations</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-primary shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-primary  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>
                <Link to='/' className="btn text-white btn-ghost text-xl">AltPick</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                {
                    user ? <>
                        <button onClick={handleSignOut} className='btn'>Sign Out</button>
                        <img title={user.displayName} className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                    </> :
                        <>
                            <Link to='/register' className='btn btn-outline'>Register</Link>
                            <Link to="/login" className='btn'>Sign In</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;