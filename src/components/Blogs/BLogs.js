import React, { useEffect, useState, useSyncExternalStore } from 'react';
import MyItems from '../MyItems/MyItems';
import PulseLoader from "react-spinners/PulseLoader";
import './Blogs.css';
import Blog from './Blog';
import axios from 'axios';

const BLogs = () => {
    const [showmore, setShowmore] = useState(false);
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [recentblogs, setrecentBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);
    

    useEffect(() => {
        // fetch('/randomblogs')
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data);
        //         setrecentBlogs(data);
        //         setLoading(false);
        //     })
        axios.get('https://powerful-falls-56396.herokuapp.com/randomblogs')
        .then(res => {
            console.log(res);
            setrecentBlogs(res.data);
        })
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`https://powerful-falls-56396.herokuapp.com/blogs?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBlogs(data);
                setLoading(false);
            });
    }, [page, size]);

    useEffect(() => {
        fetch('https://powerful-falls-56396.herokuapp.com/blogscount')
            .then(res => res.json())
            .then(data => {
                // setPageCount(data.count);
                console.log(pageCount);
                const count = data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
                setLoading(false);
            })
    }, [pageCount]);

    const showMore = () => {
        showmore ? setShowmore(false) : setShowmore(true);
    }
    return (
        <div className='common-bg'>
            <h6 className='text-center pt-3'>BLOG POST</h6>
            <h1 className='text-center py-4 green-cyan'>News & Update</h1>
            <div className="px-3 px-lg-5 mx-lg-5 py-5">
                {
                    loading ? <div className='d-flex justify-content-center align-items-center vh-100'><PulseLoader color="#79c5ac" size={30} /></div> : <>

                        <div className="row">
                            <div className="col-lg-8  pb-5">
                                <div className='px-1 px-md-4'>
                                    {
                                        blogs.map(blog => (
                                            <div className='mb-5 p-1 p-lg-5 shadow' key={blog._id}>
                                               <Blog blog={blog}></Blog>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {
                                        [...Array(pageCount).keys()].map(number => <button onClick={() => setPage(number)} className={page === number ? 'page-btn page-btn-active' : 'page-btn'}>{number}</button>)
                                    }
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className='row align-items-center pb-3'>
                                    <h4 className='col-md-3 col-lg-4 green-cyan'>Recent Posts</h4>
                                    <div className='col-md-9 col-lg-8 p-0'>
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
                                        <h4 className='col-md-3 green-cyan'>Tag Cloud</h4>
                                        <div className='col-md-9 p-0'>
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
                                        <h4 className='col-md-2 col-lg-3 green-cyan'>Social</h4>
                                        <div className='col-md-10 col-lg-9 p-0'>
                                            <img src="https://cdn-icons-png.flaticon.com/512/399/399425.png" className='img-fluid' style={{ height: '10px', width: '100%' }} alt="" />
                                        </div>

                                    </div>

                                    <div>
                                        <div className="row">
                                            <div className="col-12 col-md-8 col-lg-6">
                                                <div className="row row-cols-4">
                                                    <a href="https://www.facebook.com/shafin.muhammad.9/"><img src={require('../../images/icons/facebook.png')} className='col img-fluid' alt="" /></a>
                                                    <a href="https://twitter.com/Shafin70398972"><img src={require('../../images/icons/twitter.png')} className='col img-fluid' alt="" /></a>
                                                    <a href="https://www.instagram.com/shafin4104/"><img src={require('../../images/icons/instagram.png')} className='col img-fluid' alt="" /></a>
                                                    <a href=" https://discord.gg/xKU3Pb2fS8"><img src={require('../../images/icons/discord.png')} className='col img-fluid' alt="" /></a>
                                                </div>
                                            </div>
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