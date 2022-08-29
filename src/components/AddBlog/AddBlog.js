import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import SyncLoader from "react-spinners/SyncLoader";

const AddBlog = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [blogimg, setBlogimg] = useState('https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png');
    const handleBlogimage = () => {
        const imgUrl = document.getElementById('blog-img').value;
        setBlogimg(imgUrl);

    }

    const findDate = () => {
        var today = new Date();
        var dd = String(today.getDate());
        var mm = String(today.getMonth()); //January is 0!
        var yyyy = today.getFullYear();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return today = months[mm] + ' ' + dd + ',' + yyyy;
    }

    const onSubmit = data => {
        setLoading(true);
        data.blogImage = blogimg;
        data.like = 0;
        data.comment = 0;
        data.date = findDate();
        // console.log(data);
        fetch('https://powerful-falls-56396.herokuapp.com/blogs', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {

                    toast.success("Blog Posted Successfully !", {
                        position: toast.POSITION.TOP_LEFT
                    });
                    reset();
                    setBlogimg('https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png');
                    setLoading(false);
                }
            })
    }
    return (
        <div className='common-bg'>
            <div className='d-flex justify-content-center py-3'>
                <span className='fs-1 fw-bold custom-radius-header p-4'>Write Blog</span>
            </div>
            <div className="container py-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className='mb-3'>
                                <label className='green-cyan fw-bold'>Title</label>
                                <input type="text" className='form-control' {...register("blogTitle", { required: true })} />
                                {errors.blogTitle && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className='mb-3'>
                                <label className='green-cyan fw-bold'>Blog Image Url</label>
                                {/* <input onChange={handleBlogimage} type="text"    /> */}
                                <input onChange={handleBlogimage} type="text" id='blog-img' className='form-control' />

                            </div>
                            <div className='mb-3'>
                                <label className='green-cyan fw-bold'>Approximate Reading Time (minutes)</label>

                                <input onChange={handleBlogimage} type="text" className='form-control' {...register("readingTime", { required: true })} />
                                {errors.readingTime && <span className='text-danger'>This field is required</span>}

                            </div>

                            <div className="mb-3">
                                <label className='mb-3 green-cyan fw-bold'>Blog tags</label>
                                <br />
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="Programming" value="Programming" {...register("tag1")} />
                                    <label className="form-check-label" htmlFor="Programming">Programming</label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="Tech" value="Tech" {...register("tag2")} />
                                    <label className="form-check-label" htmlFor="Tech">Tech</label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="Story" value="Story" {...register("tag3")} />
                                    <label className="form-check-label" htmlFor="Story">Story</label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="Hardware" value="Hardware" {...register("tag4")} />
                                    <label className="form-check-label" htmlFor="Hardware">Hardware</label>
                                </div>
                                <div className="form-check ">
                                    <input className="form-check-input" type="checkbox" id="Software" value="Software" {...register("tag5")} />
                                    <label className="form-check-label" htmlFor="Software">Software</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img src={blogimg} className='img-fluid' alt="" />
                        </div>
                    </div>

                    <div className='mb-3'>
                        <label className='green-cyan fw-bold'>Description</label>
                        <textarea className="form-control" placeholder="Write Blog here" rows='10' {...register("blogDescription", { required: true })}></textarea>

                        {errors.blogDescription && <span className='text-danger'>This field is required</span>}
                    </div>

                    {/* show loading  */}
                    {loading ? <div className='d-flex justify-content-center align-items-center py-3'><SyncLoader color="#79c5ac" size={20} /></div> : null}

                    <div className='py-5 text-center'>
                        <button className='btn green-cyan-btn px-5 py-2 py-lg-3 rounded-pill'>Post</button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default AddBlog;