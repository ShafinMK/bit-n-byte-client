import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, logOut } = useFirebase();
    const myOrderUrl = `/myitems/${user.email}`;
    const navigate = useNavigate();
    //log out user
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className='header-1'>
            <div className='container mx-auto header-1'>
                <div className='row justify-content-center align-items-center py-2'>

                    <div className='col-12 col-lg-3 d-flex justify-content-center align-items-center' onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        <img src={require('../../images/icons/logo.png')} width='40' className='img-fluid' alt="" />
                        <h2 className='logo mb-0 text-light'>Bit n Byte</h2>
                    </div>

                    <div className='col-12 col-lg-9 px-2 pt-2'>
                        <input className='bg-gray-200 rounded-5 w-100 px-2 py-2' placeholder='Search here' type="text" />
                    </div>

                    {/* navbar btn of small screen  */}
                    <button className="navbar-toggler position-absolute top-0 start-0 ps-2 pt-2 ps-md-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon d-block d-lg-none"><i class="fa-solid fa-bars"></i></span> */}
                        <span className='navbar-toggler-icon d-block d-lg-none'>
                            <label for="check" class="bar">
                                <input className='nav-toggle-checkbox' id="check" type="checkbox" />

                                <span class="top"></span>
                                <span class="middle"></span>
                                <span class="bottom"></span>
                            </label>
                        </span>

                    </button>
                </div>

            </div>
            <div className='container-xxl mx-auto py-2 '>
                <div className=''>




                    <nav className="navbar navbar-expand-lg bg-light rounded p-0 p-lg-1" style={{ position: 'relative', zIndex: '1000' }}>
                        <div className="container-fluid ">

                            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav d-flex align-items-center text-center" >
                                    <li className="nav-item">
                                        <NavLink to='/home' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4 mb-lg-0'>Home</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/manageinventory' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4 mb-lg-0'>Manage Inventory</h6></NavLink>
                                    </li>
                                    {
                                        user.email ? (
                                            <>

                                                <li className="nav-item">
                                                    <NavLink to='/additem' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4 mb-lg-0'>Add Item</h6></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to={myOrderUrl} className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4 mb-lg-0'>My Items</h6></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to='/addblog' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4 mb-lg-0'>Add Blog</h6></NavLink>
                                                </li>

                                            </>

                                        ) : null
                                    }
                                    <li className="nav-item">
                                        <NavLink to='/stockoutitems' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4 mb-lg-0'>Stock Out Items</h6></NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to='/blogs' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4 mb-lg-0'>Blogs</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/about' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4 mb-lg-0'>About</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/contact' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4 mb-lg-0'>Contacts</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {user.email ? <h6 onClick={handleLogOut} className='btn mb-0'><i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>Sign out</h6> : <NavLink to='/login' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4 mb-lg-0'>Log in</h6></NavLink>}
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