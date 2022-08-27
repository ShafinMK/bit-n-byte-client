import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, logOut } = useFirebase();
    const myOrderUrl = `/myitems/${user.email}`;
    //log out user
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className='header-1'>
            <div className='container mx-auto header-1'>
                <div className='row justify-content-center align-items-center py-2'>
                    
                    <div className='col-12 col-lg-3 d-flex justify-content-center'>
                        <img src={require('../../images/icons/logo.png')} width='40' className='img-fluid' alt="" />
                        <h2 className='logo mb-0 green-cyan'>Bit n Byte</h2>
                    </div>
                    <div className='col-12 col-lg-9 px-2 '>
                        <input className='bg-gray-200 rounded-5 w-100 px-2 py-2' placeholder='Search here' type="text" />
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-2'>
                <div className='grid grid-cols-4 '>




                    <nav className="navbar navbar-expand-lg bg-light " style={{position:'relative',zIndex:'1000'}}>
                        <div className="container-fluid ">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav d-flex align-items-center" >
                                    <li className="nav-item">
                                        <NavLink to='/home' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4'>Home</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/manageinventory' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4'>Manage Inventory</h6></NavLink>
                                    </li>
                                    {
                                        user.email ? (
                                            <>

                                                <li className="nav-item">
                                                    <NavLink to='/additem' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4'>Add Item</h6></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to={myOrderUrl} className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4'>My Items</h6></NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to='/addblog' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4'>Add Blog</h6></NavLink>
                                                </li>

                                            </>

                                        ) : null
                                    }
                                    <li className="nav-item">
                                        <NavLink to='/stockoutitems' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4'>Stock Out Items</h6></NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to='/blogs' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4'>Blogs</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/about' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4'>About</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/contact' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4'>Contacts</h6></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {user.email ? <button onClick={handleLogOut} className='btn btn-danger'><i className="fa-solid fa-arrow-right-from-bracket"></i></button> : <NavLink to='/login' className={({ isActive }) => isActive ? "active-nav-item" : "text-dark"} style={{ textDecoration: 'none' }}><h6 className='px-4'>Log in</h6></NavLink>}
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