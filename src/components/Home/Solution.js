import React from 'react';
import { useNavigate } from 'react-router-dom';

const Solution = () => {
    let navigate = useNavigate();
    return (
        <div className='solution-bg'>
            <div className='py-lg-5'></div>
            <div className="row px-3 px-lg-5 mx-lg-5 py-5 justify-content-between">
                
                <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up">
                    <img src="https://images.unsplash.com/photo-1547658718-1cdaa0852790?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" style={{borderRadius:'90px 15px 15px'}} className='img-fluid' alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-7 text-light" data-aos="fade-down">
                    <h1>We offer Best Hardware and PC Build Guideline.</h1>
                    <p className='py-3 py-lg-5'>Consectetur adipiscing elit ut aliquam purus. Nullam non nisi est sit amet facilisis. Odio facilisis mauris sit amet massa. Cras adipiscing enim eu turpis egestas pretium aenean. Sit amet aliquam id diam maecenas ultricies.</p>

                    <p className='fs-5 fw-bold'><i className="fa-solid fa-circle-check pe-2"></i>WE FOREVER PUT QUALITY FIRST</p>
                    <p className='fs-5 fw-bold'><i className="fa-solid fa-circle-check pe-2"></i>CUSTOMER FULFILLMENT IS ABSOLUTE</p>
                    <p className='fs-5 fw-bold'><i className="fa-solid fa-circle-check pe-2"></i>SPEEDY AND QUALITY WORK</p>

                    <div>
                        <button onClick={()=> navigate('/blogs')} className='btn white-btn px-5 py-2 py-lg-3 rounded-pill mt-3 mt-lg-5'>Read Blogs</button>
                    </div>
                </div>

            </div>
            <div className='py-lg-5'></div>
        </div>
    );
};

export default Solution;