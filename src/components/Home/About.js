import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    let navigate = useNavigate();
    return (
        <div className='about-bg-image'>

            <div className='container py-5 mt-5' data-aos="fade-up">
                <h6 className='text-center'>ABOUT US</h6>
                <h1 className='text-center py-4 green-cyan'>We Propose the best services</h1>
                <p className='fs-5 text-center'>
                    Access to computers and the Internet has become a basic need for education in our society.
                    <br />
                    It's hardware that makes a machine fast. It's software that makes a fast machine slow.
                </p>

            </div>

            <div className='row px-lg-5 mx-lg-5  justify-content-around'>

                <div className="col-11 col-md-5 col-lg-3" data-aos="fade-right">
                    <div className='pt-lg-5'></div>
                    <div className='pt-lg-5'></div>
                    <h3 className='black' onClick={()=> navigate('/about')}>Design & Customization</h3>
                    <p className='py-3' style={{textAlign:'justify'}}>custom-built PC is a computer that's built and customized to meet specific consumer needs. People build computers for gaming, video and photo editing, animation, web browsing, and productivity needs</p>
                    <img src={require('../../images/computer1.jpg')} className='img-fluid img-c-b-r-1 w-100' alt="" />
                </div>

                <div className='col-11 col-md-5 col-lg-3' data-aos="fade-right">
                    <img src={require('../../images/hardware care.webp')} className='img-fluid' alt="" />
                    <div className='pt-lg-5'></div>
                    <h3 className='black pt-2' onClick={()=> navigate('/about')}>Hardware care</h3>
                    <p className='py-3' style={{textAlign:'justify'}}>Computers, just like any other electronic device, need regular maintenance. The same way that you attend your annual medical check-up, your computer also needs scheduled maintenance of its computer hardware to ensure that you are doing everything you can to extend its lifespan. This is what many people call preventative maintenance.</p>
                    <img src={require('../../images/computer2.jpg')} className='img-fluid img-c-b-r-1 w-100' style={{ borderRadius: '15px 15px 15px 90px' }} alt="" />
                </div>

                <div className="col-11 col-md-5 col-lg-3" data-aos="fade-right">
                    <div className='pt-lg-5'></div>
                    <div className='pt-lg-5'></div>
                    <div className='pt-lg-5'></div>
                    <div className='pt-lg-5'></div>
                    <div className='pt-lg-5'></div>
                    <h3 className='black pt-2' onClick={()=> navigate('/about')}>Smart Planning</h3>
                    <p className='py-3' style={{textAlign:'justify'}}>Picking the right components for the build you need can be a daunting process at first, but once you dive in, you???ll see that it???s not only surprisingly simple, it???s a heck of a lot of fun. This guide is by no means meant to be exhaustive, it???s more a primer on what you???ll need to know to gather up the right parts, and start putting your dream build together.</p>
                    <img src={require('../../images/computer3_1.jpg')} className='img-fluid w-100' style={{borderRadius:'90px 15px 15px 15px'}} alt="" />
                </div>

            </div>

        </div>
    );
};

export default About;