import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {

    let navigate = useNavigate();

    return (
        <div className='py-5'>
            <div data-aos="fade-up">
                <h6 className='text-center'>BLOG POST</h6>
                <h1 className='text-center py-4 green-cyan'>News & Update</h1>
            </div>
            <div className="row mx-lg-5 p-3 px-lg-5 justify-content-evenly">


                <div className='col-12 col-md-6 col-lg-3' data-aos="fade-right" data-aos-duration="800">
                    <div className='position-relative'>
                        <div className="img-container">
                            <img src={require('../../images/hardware1.jpg')} className='img-fluid rounded-4' alt="" />
                            <div className='overlay rounded-4'></div>
                        </div>

                        <div className='position-absolute top-0 end-0 bg-light px-3 rounded-4 mt-4 me-4'>
                            <h4 className='text-center border-bottom border-dark pb-3'>27</h4>
                            <p className='text-center'>Jan, 2022</p>
                        </div>
                    </div>

                    <h4 className='green-cyan py-4'>Purpose of a cooler in a computer</h4>
                    <p style={{ height: '6em' }}>CPU coolers are designed to dissipate heat produced by the processor that sits at the heart of your PC. The fans, radiators, and other elements...</p>
                    <h6 onClick={() => navigate('/blogs')} className='pt-4 black hover-underline-animation'>READ MORE</h6>
                </div>
                <div className='col-12 col-md-6 col-lg-3' data-aos="fade-right" data-aos-duration="1000">
                    <div className='position-relative'>
                        <div className="img-container">
                            <img src={require('../../images/hardware2.jpg')} className='img-fluid rounded-4' alt="" />
                            <div className='overlay rounded-4'></div>
                        </div>

                        <div className='position-absolute top-0 end-0 bg-light px-3 rounded-4 mt-4 me-4'>
                            <h4 className='text-center border-bottom border-dark pb-3'>27</h4>
                            <p className='text-center'>Jan, 2022</p>
                        </div>
                    </div>

                    <h4 className='green-cyan py-4'>Dual-channel RAM Performance</h4>
                    <p style={{ height: '6em' }}>In dual-channel mode, two RAM sticks communicate simultaneously on separate channels to operate your computer and run programs significantly faster. Therefore,...</p>
                    <h6 onClick={() => navigate('/blogs')} className='pt-4 black hover-underline-animation'>READ MORE</h6>
                </div>
                <div className='col-12 col-md-6 col-lg-3' data-aos="fade-right" data-aos-duration="1500">
                    <div className='position-relative'>
                        <div className="img-container">
                            <img src={require('../../images/hardware3.jpg')} className='img-fluid rounded-4' alt="" />
                            <div className='overlay rounded-4'></div>
                        </div>
                        <div className='position-absolute top-0 end-0 bg-light px-3 rounded-4 mt-4 me-4'>
                            <h4 className='text-center border-bottom border-dark pb-3'>27</h4>
                            <p className='text-center'>Jan, 2022</p>
                        </div>
                    </div>

                    <h4 className='green-cyan py-4'>CPU Overclocking performance</h4>
                    <p style={{ height: '6em' }}>Increasing a CPU's clock speed can improve its performance. Overclocking can extend the useful life of a processor by helping it keep up with increasingly demanding software requirements...</p>
                    <h6 onClick={() => navigate('/blogs')} className='pt-4 black hover-underline-animation'>READ MORE</h6>
                </div>



            </div>
        </div>
    );
};

export default BlogPost;