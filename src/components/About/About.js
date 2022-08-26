import React from 'react';
import { useNavigate } from 'react-router-dom';
import Feature from '../Feature/Feature';
import './About.css';


const About = () => {
    let navigate = useNavigate();
    return (
        <div>
            {/* <h3 className='text-center'>About Us</h3> */}
            <div className='about-bg-image'>

                <div className='container py-5 mt-5'>
                    <h6 className='text-center'>ABOUT US</h6>
                    <h1 className='text-center py-4 green-cyan'>We Propose the best services</h1>
                    <p className='fs-5 text-center'>
                        Access to computers and the Internet has become a basic need for education in our society.
                        <br />
                        It's hardware that makes a machine fast. It's software that makes a fast machine slow.
                    </p>

                </div>

                <div className='row px-lg-5 mx-lg-5 justify-content-around'>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className='pt-lg-5'></div>
                        <div className='pt-lg-5'></div>
                        <h3 className='black' onClick={() => navigate('/')}>Design & Customization</h3>
                        <p className='py-3'>Sed vulputate odio ut enim. Interdum varius sit amet mattis vulputate enim nulla aliquet.platea dictumst quisque.</p>
                        <img src={require('../../images/computer1.jpg')} className='img-fluid img-c-b-r-1' alt="" />
                    </div>

                    <div className='col-12 col-md-6 col-lg-3'>
                        <img src={require('../../images/hardware care.webp')} className='img-fluid' alt="" />
                        <div className='pt-lg-5'></div>
                        <h3 className='black ' onClick={() => navigate('/')}>Hardware care</h3>
                        <p className='py-3'>Sed vulputate odio ut enim. Interdum varius sit amet mattis vulputate enim nulla aliquet.platea dictumst quisque.</p>
                        <img src={require('../../images/computer2.jpg')} className='img-fluid img-c-b-r-1' style={{ borderRadius: '15px 15px 15px 90px' }} alt="" />
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className='pt-lg-5'></div>
                        <div className='pt-lg-5'></div>
                        <div className='pt-lg-5'></div>
                        <div className='pt-lg-5'></div>
                        <div className='pt-lg-5'></div>
                        <h3 className='black' onClick={() => navigate('/')}>Smart Planning</h3>
                        <p className='py-3'>Sed vulputate odio ut enim. Interdum varius sit amet mattis vulputate enim nulla aliquet.platea dictumst quisque.</p>
                        <img src={require('../../images/computer3_1.jpg')} className='img-fluid' style={{ borderRadius: '90px 15px 15px 15px' }} alt="" />
                    </div>

                </div>

            </div>

           <Feature></Feature>

        </div>
    );
};

export default About;