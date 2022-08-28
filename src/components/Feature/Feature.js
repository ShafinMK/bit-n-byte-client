import React from 'react';

const Feature = () => {
    return (
        <div data-aos="fade-up">
             {/* our features */}
             <div className='mx-lg-5 px-lg-5 py-5 my-lg-5'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 px-1">
                    <div className="col ">
                        <div className='text-center grenn-cyan-bg p-3 p-lg-5 rounded-5'>
                            <img src={require('../../images/icons/delivery.png')} className='img-fluid invert-img' width='50' alt="" />
                            <h4 className='py-3'>Fast Delivery</h4>
                            <h6>Delivery within 2 hours</h6>
                        </div>

                    </div>
                    <div className="col ">
                        <div className='text-center grenn-cyan-bg p-3 p-lg-5 rounded-5'>
                            <img src={require('../../images/icons/shopping.png')} className='img-fluid invert-img' width='50' alt="" />
                            <h4 className='py-3'>Secured Packaging</h4>
                            <h6>Your package is safe</h6>
                        </div>

                    </div>
                    <div className="col ">
                        <div className='text-center grenn-cyan-bg p-3 p-lg-5 rounded-5'>
                            <img src={require('../../images/icons/payment.png')} className='img-fluid invert-img' width='50' alt="" />
                            <h4 className='py-3'>Easy Payment</h4>
                            <h6>Simple payment Options</h6>
                        </div>

                    </div>
                    <div className="col ">
                        <div className='text-center grenn-cyan-bg p-3 p-lg-5 rounded-5'>
                            <img src={require('../../images/icons/support.png')} className='img-fluid invert-img' width='50' alt="" />
                            <h4 className='py-3'>Online Support</h4>
                            <h6>Get online 24/7 support</h6>
                        </div>

                    </div>


                </div>

            </div>


            {/* our clients  */}
            <h1 className='text-center py-4 green-cyan'>Official Importer of</h1>
            <div className='mx-lg-5 px-lg-5 py-5 my-lg-5'>
                <div className="row row-cols-2 row-cols-lg-4 g-4 px-1">
                    <div className="col ">
                        <div className='text-center p-3 p-lg-5 rounded-5 shadow'>
                            <a href="https://www.msi.com/index.php">
                                <img src={require('../../images/icons/thermaltake.png')} className='img-fluid w-100' alt="" />
                            </a>

                        </div>

                    </div>
                    <div className="col ">
                        <div className='text-center p-3 p-lg-5 rounded-5 shadow'>
                            <a href="https://www.asus.com/bd/">
                                <img src={require('../../images/icons/msi.png')} className='img-fluid' alt="" />
                            </a>
                           
                        </div>

                    </div>
                    <div className="col ">
                        <div className='text-center p-3 p-lg-5 rounded-5 shadow'>
                            <a href="https://www.thermaltake.com/">
                                <img src={require('../../images/icons/asus.png')} className='img-fluid' alt="" />
                            </a>
                           
                        </div>

                    </div>
                    <div className="col ">
                        <div className='text-center p-3 p-lg-5 rounded-5 shadow'>
                            <a href="https://www.razer.com/">
                                <img src={require('../../images/icons/razer.jpg')} className='img-fluid' alt="" />
                            </a>
                           
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default Feature;