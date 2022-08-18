import React, { useState } from 'react';

const BLogs = () => {
    const [showmore, setShowmore] = useState(false);
    const description = `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
    
    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.`
    const showMore = () => {
        showmore ? setShowmore(false) : setShowmore(true);
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8 shadow p-5">
                        <div className="row">
                            {/* image  */}
                            <div className="col-lg-4">
                                <img src="https://themes.estudiopatagon.com/wordpress/maktub/wp-content/uploads/2019/07/mixkit-man-holding-the-brim-of-a-yellow-fedora-that-covers-93-desktop-wallpaper-300x169.jpg" className='img-fluid' alt="" />
                            </div>
                            {/* heading */}
                            <div className="col-lg-8">
                                <h1>Far far away, behind the word mountains</h1>
                                <p>
                                    <span className='pe-3'>August 15, 2019</span>
                                    <span className='pe-3'>2 min read</span>
                                    <span><i class="fa-solid fa-comment px-2"></i>1</span>
                                    <span><i class="fa-solid fa-fire  px-2"></i>1</span>

                                </p>
                            </div>
                        </div>
                        {/* description */}
                        <div>
                            <p>
                                {showmore ? description : description.slice(0, 210) + '...'}
                            </p>

                            <div>
                                {/* tags */}
                                <div className="d-flex">
                                    
                                   
                                    <div className='me-2 px-3 py-1 shadow-sm'>#Music</div>
                                    <div className='me-2 px-3 py-1 shadow-sm'>#Music</div>
                                    <div className='me-2 px-3 py-1 shadow-sm'>#Music</div>
                                    
                                    
                                </div>
                                
                                


                            </div>
                            <div className='text-center py-3'>
                                <button onClick={showMore} className='btn btn-dark'>{showmore ? 'Show Less' : 'Continue Reading'}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='row align-items-center pb-3'>
                            <h4 className='col-5'>Recent Posts</h4>
                            <div className='col-7 p-0'>
                                <img src="https://cdn-icons-png.flaticon.com/512/399/399425.png" className='img-fluid' style={{height:'10px', width:'100%'}} alt="" />
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src="https://themes.estudiopatagon.com/wordpress/maktub/wp-content/uploads/2019/07/mixkit-man-holding-the-brim-of-a-yellow-fedora-that-covers-93-desktop-wallpaper-300x169.jpg" className='img-fluid' alt="" />

                            </div>
                            <div className="col-8">
                                <h6>Far far away, behind the word mountains</h6>
                                <span>August 15, 2019</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BLogs;