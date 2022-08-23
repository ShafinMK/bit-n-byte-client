import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();

    //log out user
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div >
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 '>
                    <h1 className=''>Bit n Byte</h1>
                    <input className='bg-gray-200 rounded-md ' type="text" />
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='grid grid-cols-4 '>




                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to='/home'><h6 className='px-4'>Home</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/manageinventory'><h6 className='px-4'>Manage Inventory</h6></NavLink>
                                    </li>
                                    {
                                        user.email ? (
                                            <>

                                                <li className="nav-item">
                                                    <NavLink to='/additem'><h6 className='px-4'>Add Item</h6></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to='/myitems'><h6 className='px-4'>My Items</h6></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to='/addblog'><h6 className='px-4'>Add Blog</h6></NavLink>
                                                </li>

                                            </>

                                        ) : null
                                    }
                                    <li className="nav-item">
                                        <NavLink to='/stockoutitems'><h6 className='px-4'>Stock Out Items</h6></NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to='/blogs'><h6 className='px-4'>Blogs</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/about'><h6 className='px-4'>About</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/contact'><h6 className='px-4'>Contacts</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {user.email ? <button onClick={handleLogOut} className='btn btn-danger'><i className="fa-solid fa-arrow-right-from-bracket"></i></button> : <NavLink to='/login'><h6 className='px-4'>Log in</h6></NavLink>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        </div >
    );
};

export default Header;