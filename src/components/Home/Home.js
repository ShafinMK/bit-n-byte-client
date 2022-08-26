import React from 'react';
import Feature from '../Feature/Feature';
import About from './About';
import BlogPost from './BlogPost';
import './Home.css'
import SampleItems from './SampleItems/SampleItems';
import Solution from './Solution';



const Home = () => {
    return (
        <div>
            <div className="row">
                <div>

                    <div className="banner">

                        <div className="px-3 px-lg-5 mx-lg-5">
                            <div className='row justify-content-between h-100 align-items-center'>

                                <div className='col-12 col-md-6 py-2'>
                                    <h6>THE FUTURE IS HERE!</h6>
                                    <h1 className='green-cyan py-5'>The computer was born to solve <br /> problems that did not exist before</h1>
                                    <button className='btn green-cyan-btn rounded-pill px-5 py-3'>Inventory</button>
                                </div>
                                <div className='col-12 col-md-6 custom-border-radious' style={{backgroundColor:'#d3e8dc'}}>
                                    
                                    <img src={require('../../images/banner pc.png')} className='img-fluid w-100' alt="" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About></About>
            <Solution></Solution>
            <SampleItems></SampleItems>
            <Feature></Feature>
            <BlogPost></BlogPost>
            
        </div>
    );
};

export default Home;