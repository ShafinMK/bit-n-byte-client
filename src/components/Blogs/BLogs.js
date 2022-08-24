import React, { useEffect, useState } from 'react';
import MyItems from '../MyItems/MyItems';

const BLogs = () => {
    const [showmore, setShowmore] = useState(false);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    }, []);

    const showMore = () => {
        showmore ? setShowmore(false) : setShowmore(true);
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8  ">
                        <div>
                            {
                                blogs.map(blog => (
                                    <div className='mb-5 p-5 shadow'>
                                        <div className="row">
                                            {/* image  */}
                                            <div className="col-lg-4">
                                                <img src={blog.blogImage} className='img-fluid' alt="" />
                                            </div>
                                            {/* heading */}
                                            <div className="col-lg-8">
                                                <h1>{blog.blogTitle}</h1>
                                                <p>
                                                    <span className='pe-3'>{blog.date}</span>
                                                    <span className='pe-3'>{blog.readingTime} min read</span>
                                                    <span><i class="fa-solid fa-comment px-2"></i>1</span>
                                                    <span><i class="fa-solid fa-fire  px-2"></i>1</span>

                                                </p>
                                            </div>
                                        </div>
                                        {/* description */}
                                        <div>
                                            <p>
                                                {showmore ? blog.blogDescription : blog.blogDescription.slice(0, 210) + '...'}
                                            </p>

                                            <div>
                                                {/* tags */}
                                                <div className="d-flex">


                                                    <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag1}</div>
                                                    {/* <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag2}c</div>
                                                    <div className='me-2 px-3 py-1 shadow-sm'>#Music</div> */}


                                                </div>




                                            </div>
                                            <div className='text-center py-3'>
                                                <button onClick={showMore} className='btn btn-dark'>{showmore ? 'Show Less' : 'Continue Reading'}</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className='row align-items-center pb-3'>
                            <h4 className='col-5'>Recent Posts</h4>
                            <div className='col-7 p-0'>
                                <img src="https://cdn-icons-png.flaticon.com/512/399/399425.png" className='img-fluid' style={{ height: '10px', width: '100%' }} alt="" />
                            </div>

                        </div>
                        {
                            blogs.map(blog => (
                                <div className='pb-4'>

                                    <div className="row">
                                        <div className="col-4">
                                            <img src={blog.blogImage} className='img-fluid' alt="" />

                                        </div>
                                        <div className="col-8">
                                            <h6>{blog.blogTitle}</h6>
                                            <span>{blog.date}</span>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        <div>
                            <div className='row align-items-center pb-3 mt-5'>
                                <h4 className='col-4'>Tag Cloud</h4>
                                <div className='col-8 p-0'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/399/399425.png" className='img-fluid' style={{ height: '10px', width: '100%' }} alt="" />
                                </div>

                            </div>
                            {/* tags */}
                            <div className="d-flex ">


                                <div className='me-2 px-3 py-1 shadow-sm'>#Programming</div>
                                <div className='me-2 px-3 py-1 shadow-sm'>#Hardware</div>
                                <div className='me-2 px-3 py-1 shadow-sm'>#Tech</div>
                            </div>
                            <div className="d-flex mt-3">
                                <div className='me-2 px-3 py-1 shadow-sm'>#Software</div>
                                <div className='me-2 px-3 py-1 shadow-sm'>#Story</div>
                                <div className='me-2 px-3 py-1 shadow-sm'>#Sci-fi</div>
                            </div>





                        </div>
                        {/* social icons section */}
                        <div>
                            <div className='row align-items-center pb-3 mt-5'>
                                <h4 className='col-3'>Social</h4>
                                <div className='col-9 p-0'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/399/399425.png" className='img-fluid' style={{ height: '10px', width: '100%' }} alt="" />
                                </div>

                            </div>

                            <div>
                                <div className="row row-cols-4">
                                    <img src={require('../../images/icons/facebook.png')} className='col img-fluid' alt="" />
                                    <img src={require('../../images/icons/twitter.png')} className='col img-fluid' alt="" />
                                    <img src={require('../../images/icons/instagram.png')} className='col img-fluid' alt="" />
                                    <img src={require('../../images/icons/feed.png')} className='col img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BLogs;