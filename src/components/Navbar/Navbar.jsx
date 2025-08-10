import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import './Navbar.css'
import { useState } from 'react';
import signOutAnimation from '../../assets/logout.json'
import Lottie from 'lottie-react';
import useAuth from '../../hooks/useAuth';
import logo from '../../assets/white-logo.png';
import { FaRegLightbulb, FaClipboardList, FaComments } from "react-icons/fa";
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
    const [currentTheme, setCurrentTheme] = useState('');
    const { user, signOutUser } = useAuth();
    const [isSignOut, setIsSignOut] = useState(false);
    const [open, setOpen] = useState(false)
 


    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Your account will be signed out',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#209187",
            cancelButtonColor: "#d33",
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
        <li><NavLink to='/queries'>Queries</NavLink></li>
        <li><NavLink to='/about-us'>About Us</NavLink></li>
        <li><NavLink to='/support'>Support</NavLink></li>
    </>
    return (
        <div className={`${currentTheme === 'dark' ? 'bg-base-100' : 'bg-[#209187]'}  shadow-sm fixed top-0 right-0 left-0 z-100`} >
            <div className="navbar w-11/12 mx-auto px-0 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-primary bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>
                    <Link to='/' className="flex items-center justify-center gap-2 text-white btn-ghost text-xl">
                        <img className='w-8' src={logo} alt="" />
                        <p className='font-bold'>AltPick</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <ThemeToggle setCurrentTheme={setCurrentTheme}></ThemeToggle>
                    {
                        user ?
                            <div className='relative flex items-center gap-2'>
                                {/* <button onClick={handleSignOut} className='btn'>Sign Out</button> */}
                                <img onClick={() => setOpen(!open)} title={user.displayName} className='w-10 h-10 border-base-100 border rounded-full' src={user.photoURL} alt="" />
                            </div>
                            :
                            <>
                                <Link to='/register' className='btn btn-outline border-accent'>Register</Link>
                                <Link to="/login" className='btn btn-accent'>Sign In</Link>
                            </>
                    }
                </div>
            </div>

            {/* Logged in user routes dropdown */}
            {
                open && (
                    <div
                        className="fixed inset-0 z-40 bg-black/10  transition-all duration-300"
                        onClick={() => setOpen(false)}
                    >
                        <div
                            className="absolute right-4 z-50 top-16 bg-white dark:bg-base-200 shadow-xl rounded-xl p-2 w-64 border border-base-300/50 overflow-hidden animate-fadeIn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Dropdown Header */}
                            <div className="px-4 py-3 border-b border-base-200/50 flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="font-medium text-base-content">My Account</span>
                            </div>

                            {/* Dropdown Items */}
                            <ul className="py-2 space-y-1 p-route">
                                <li>
                                    <NavLink
                                        to="/recommendationsForMe"
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary group"
                                    // activeClassName="bg-primary/10 text-primary font-medium"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/70 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        <span className='text-base-content'>Recommendations For Me</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/myQueries"
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary group"
                                        activeClassName="bg-primary/10 text-primary font-medium"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/70 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                        <span className='text-base-content'>My Queries</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/myRecommendations"
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-all duration-200 hover:bg-primary/10 hover:text-primary group"
                                        activeClassName="bg-primary/10 text-primary font-medium"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/70 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                        </svg>
                                        <span className='text-base-content'>My Recommendations</span>
                                    </NavLink>
                                </li>
                            </ul>

                            {/* Dropdown Footer */}
                            <div className="px-4 py-3 border-t border-base-200/50">
                                <button
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg bg-primary/90 hover:bg-primary transition-colors text-base-100"
                                    onClick={handleSignOut}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }







        </div >
    );
};

export default Navbar;