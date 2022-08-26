import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-style overflow-hidden'>
            <div className='row '>
                <img src="https://images.unsplash.com/photo-1639506060085-2a01a8a84c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
                <img src="https://images.unsplash.com/photo-1587063499334-6367fdc5e330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
                <img src="https://images.unsplash.com/photo-1622649755106-1f61a6b1b445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
                <img src="https://images.unsplash.com/photo-1635468609223-4e59675ac96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
                <img src="https://images.unsplash.com/photo-1577375729078-820d5283031c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
                <img src="https://images.unsplash.com/photo-1600861194802-a2b11076bc51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className='img-fluid col-6 col-md-4 col-lg-2 p-0' alt="" />
            </div>
            <div className="p-5 bg-light">
                
                <div className="row justify-content-around">
                    <div className="col-12 col-md-6 col-lg-4 py-5">

                        <h3 className='green-cyan'>Bit n Byte</h3>
                        <p>Computer hardware includes the physical parts of a computer, such as the case, central processing unit (CPU), random access memory (RAM), monitor, mouse, ...</p>
                        <div className="d-flex">
                            <div className=""><img src={require('../../images/icons/discover.png')} className='img-fluid me-3' width='50' alt="" /></div>
                            <div className=""><img src={require('../../images/icons/amex.png')} className='img-fluid me-3' width='50' alt="" /></div>
                            <div className=""><img src={require('../../images/icons/visa.png')} className='img-fluid me-3' width='50'  alt="" /></div>
                            <div className=""><img src={require('../../images/icons/jcb.png')} className='img-fluid me-3' width='50' alt="" /></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 py-5">
                        <h3 className='green-cyan'>Location</h3>
                        <span><i className="fa-solid fa-location-dot pe-2 green-cyan"></i>South Korea, Hojong,<br /> 221 Street, Dojo Market</span>
                        <br />
                        <br />
                        <span><i className="fa-solid fa-phone pe-2 green-cyan"></i>(SK) 33223 44322</span>
                        <br />
                        <span>(International) 11111 222222</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 py-5">
                        <h3 className='green-cyan'>NewsLetter</h3>
                        <div class="input-group mb-3 rounded-pill" style={{ backgroundColor: 'lightgrey' }}>
                            <input type="email" class="form-control rounded-pill border-0 shadow-none mx-2" placeholder="Email" aria-label="Recipient's username" style={{ backgroundColor: 'lightgrey' }} aria-describedby="button-addon2" />
                            <button class="btn btn-outline-secondary rounded-pill green-cyan-btn" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default Footer;