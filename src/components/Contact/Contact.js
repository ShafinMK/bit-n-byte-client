import React from 'react';

const Contact = () => {
    return (
        <div className='common-bg'>
            <div className='py-5'>
                <h6 className='text-center'>REACH US</h6>
                <h1 className='text-center py-4 green-cyan'>We provide online support 24/7</h1>

                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6">
                            <img src={require('../../images/support.png')} className='img-fluid' alt="" />
                        </div>

                        <div className='col-12 col-md-6'>
                            <h5 className='py-2'><i className="fa-solid green-cyan fa-phone pe-3"></i>01122334412</h5>
                            <h5 className='py-2'><i className="fa-solid green-cyan fa-envelope pe-3"></i>shafinmuhammad28@gmail.com</h5>
                            <a href="https://twitter.com/Shafin70398972">
                                <h5 className='py-2'><i className="fa-brands green-cyan fa-twitter pe-3"></i>Bit & Byte twitter support</h5>
                            </a>
                            <a href="https://www.messenger.com/">
                                <h5 className='py-2'><i className="fa-brands green-cyan fa-facebook-messenger pe-3"></i>Bit & Byte messenger support</h5>
                            </a>
                            <a href="https://www.snapchat.com/">
                                <h5 className='py-2'><i className="fa-brands green-cyan fa-square-snapchat pe-3"></i>Bit & Byte snapchat support</h5>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;