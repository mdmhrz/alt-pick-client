import React from 'react';
import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, signOutUser, setLoading } = use(AuthContext);

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
                setLoading(true)
                signOutUser();
                toast.success('Account signed out successfully');
                // setMobileMenuOpen(false);
            }
        });
    };


    console.log(user);

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
        <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">AltPick</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                {
                    user ? <>
                        <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                        <button onClick={handleSignOut} className='btn btn-accent'>Sign Out</button>
                    </> :
                        <>
                            <Link to="/login" className='btn btn-primary'>Sign In</Link>
                            <Link to='/register' className='btn btn-primary btn-outline'>Register</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;