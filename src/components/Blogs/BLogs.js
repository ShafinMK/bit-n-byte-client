import React, { useEffect, useState } from 'react';
import MyItems from '../MyItems/MyItems';
import PulseLoader from "react-spinners/PulseLoader";
import './Blogs.css';

const BLogs = () => {
    const [showmore, setShowmore] = useState(false);
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [recentblogs, setrecentBlogs] = useState([]);
    useEffect(() => {
        fetch('https://powerful-falls-56396.herokuapp.com/randomblogs')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setrecentBlogs(data);
                setLoading(false);
            })
    }, []);
    useEffect(() => {
        fetch('https://powerful-falls-56396.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBlogs(data);
                setLoading(false);
            })
    }, []);

    const showMore = () => {
        showmore ? setShowmore(false) : setShowmore(true);
    }
    return (
        <div className='common-bg'>
            <h6 className='text-center pt-3'>BLOG POST</h6>
            <h1 className='text-center py-4 green-cyan'>News & Update</h1>
            <div className="container py-5">
                {
                    loading ? <div className='d-flex justify-content-center align-items-center vh-100'><PulseLoader color="#79c5ac" size={30}/></div> : <>

                        <div className="row">
                            <div className="col-lg-8  ">
                                <div className='blogs-container overflow-scroll bg-light bg-opacity-75'>
                                    {
                                        blogs.map(blog => (
                                            <div className='mb-5 p-5 shadow' key={blog._id}>
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
                                                            <span><i className="fa-solid fa-comment px-2"></i>1</span>
                                                            <span><i className="fa-solid fa-fire  px-2"></i>1</span>

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


                                                            {blog.tag1 ? <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag1}</div> : null}
                                                            {blog.tag2 ? <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag2}</div> : null}
                                                            {blog.tag3 ? <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag3}</div> : null}
                                                            {blog.tag4 ? <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag4}</div> : null}
                                                            {blog.tag5 ? <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag5}</div> : null}
                                                            {/* <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag2}c</div>
                                                    <div className='me-2 px-3 py-1 shadow-sm'>#Music</div> */}


                                                        </div>




                                                    </div>
                                                    <div className='text-center py-3'>
                                                        <button onClick={showMore} className='btn green-cyan-btn'>{showmore ? 'Show Less' : 'Continue Reading'}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className='row align-items-center pb-3'>
                                    <h4 className='col-5 green-cyan'>Recent Posts</h4>
                                    <div className='col-7 p-0'>
                                        <img src="https://cdn-icons-png.flaticon.com/512/399/399425.png" className='img-fluid' style={{ height: '10px', width: '100%' }} alt="" />
                                    </div>

                                </div>
                                {
                                    recentblogs.map(recentblog => (
                                        <div className='pb-4' key={recentblog._id}>

                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={recentblog.blogImage} className='img-fluid' alt="" />

                                                </div>
                                                <div className="col-8">
                                                    <h6>{recentblog.blogTitle}</h6>
                                                    <span>{recentblog.date}</span>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                <div>
                                    <div className='row align-items-center pb-3 mt-5'>
                                        <h4 className='col-4 green-cyan'>Tag Cloud</h4>
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
                                        <h4 className='col-3 green-cyan'>Social</h4>
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
                    </>
                }
            </div>
        </div>
    );
};

export default BLogs;