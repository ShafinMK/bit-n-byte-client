import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-style'>
            <div className="p-5 bg-dark text-light">
                <div className="row">
                    <div className="col">
                        <h3>Bit n Byte</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus porro recusandae, est non blanditiis vel ex voluptas laudantium vero ipsam?</p>
                        <div className="d-flex">
                            <div className=""><img src="https://mptheme.7uptheme.net/wp-content/uploads/2019/06/Untitled-1.png" alt="" /></div>
                            <div className=""><img src="https://mptheme.7uptheme.net/wp-content/uploads/2019/06/Untitled-1.png" alt="" /></div>
                            <div className=""><img src="https://mptheme.7uptheme.net/wp-content/uploads/2019/06/Untitled-1.png" alt="" /></div>
                            <div className=""><img src="https://mptheme.7uptheme.net/wp-content/uploads/2019/06/Untitled-1.png" alt="" /></div>
                        </div>
                    </div>
                    <div className="col">
                        <h3>Location</h3>
                        <span><i className="fa-solid fa-location-dot pe-2"></i>South Korea, Hojong,<br /> 221 Street, Dojo Market</span>
                        <br />
                        <br />
                        <span><i className="fa-solid fa-phone pe-2"></i>(SK) 33223 44322</span>
                        <br />
                        <span>(International) 11111 222222</span>
                    </div>
                    <div className="col">
                        <h3>NewsLetter</h3>
                        <div class="input-group mb-3 rounded-pill bg-light">
                            <input type="email" class="form-control rounded-pill border-0 shadow-none mx-2" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary rounded-pill bg-warning" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;