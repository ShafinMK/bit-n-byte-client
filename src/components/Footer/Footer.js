import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-style overflow-hidden'>
            <div className='row '>
                <img src={require('../../images/footer-g-1.avif')} className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
                <img src={require('../../images/footer-g-2.avif')} className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
                <img src={require('../../images/footer-g-3.avif')} className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
                <img src={require('../../images/footer-g-4.avif')} className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
                <img src={require('../../images/footer-g-5.avif')} className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
                <img src={require('../../images/footer-g-6.avif')} className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
            </div>
            <div className="p-5 bg-light">

                <div className="">
                    <div className="row justify-content-around">
                        <div className="col-12 col-md-5 col-lg-3 py-5">

                            <h3 className='green-cyan'>Bit n Byte</h3>
                            <p>Computer hardware includes the physical parts of a computer, such as the case, central processing unit (CPU), random access memory (RAM), monitor, mouse, ...</p>
                            <div className="d-flex">
                                <div className=""><img src={require('../../images/icons/discover.png')} className='img-fluid me-3' width='50' alt="" /></div>
                                <div className=""><img src={require('../../images/icons/amex.png')} className='img-fluid me-3' width='50' alt="" /></div>
                                <div className=""><img src={require('../../images/icons/visa.png')} className='img-fluid me-3' width='50' alt="" /></div>
                                <div className=""><img src={require('../../images/icons/jcb.png')} className='img-fluid me-3' width='50' alt="" /></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-3 py-5 d-flex">
                            <div>
                                <h3 className='green-cyan'>Location</h3>
                                <span><i className="fa-solid fa-location-dot pe-2 green-cyan"></i>South Korea, Hojong,<br /> 221 Street, Dojo Market</span>
                                <br />
                                <br />
                                <span><i className="fa-solid fa-phone pe-2 green-cyan"></i>(SK) 33223 44322</span>
                                <br />
                                <span>(International) 11111 222222</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-3 py-5 d-flex">
                            <div>
                                <h3 className='green-cyan'>Pages</h3>
                                <span><i className="fa-solid fa-house pe-2 green-cyan"></i>Home Page</span>
                                <br />
                                <br />
                                <span><i className="fa-solid fa-magnifying-glass pe-2 green-cyan"></i>About Us</span>
                                <br />
                                <br />
                                <span><i className="fa-solid fa-newspaper pe-2 green-cyan"></i>News & Blogs</span>
                                <br />
                                <br />
                                <span><i className="fa-solid fa-bars-progress pe-2 green-cyan"></i>Manage Inventory</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-3 py-5">
                            <h3 className='green-cyan'>NewsLetter</h3>
                            <div className="input-group mb-3 rounded-pill" style={{ backgroundColor: 'lightgrey' }}>
                                <input type="email" className="form-control rounded-pill border-0 shadow-none mx-2" placeholder="Email" aria-label="Recipient's username" style={{ backgroundColor: 'lightgrey' }} aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary rounded-pill green-cyan-btn" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;