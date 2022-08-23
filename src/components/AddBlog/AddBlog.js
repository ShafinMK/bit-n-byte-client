import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

const AddBlog = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [blogimg, setBlogimg] = useState('https://asvs.in/wp-content/uploads/2017/08/dummy.png');
    const handleBlogimage = () => {
        const imgUrl = document.getElementById('blog-img').value;
        setBlogimg(imgUrl);

    }

    const findDate = () => {
        var today = new Date();
        var dd = String(today.getDate());
        var mm = String(today.getMonth() ); //January is 0!
        var yyyy = today.getFullYear();
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        return today = months[mm] + ' ' + dd + ',' + yyyy;
    }

    const onSubmit = data => {
        data.blogImage = blogimg;
        data.like = 0;
        data.comment = 0;
        data.date = findDate();
        console.log(data);
        fetch('http://localhost:5000/blogs', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    toast.success("Blog Posted Successfully !", {
                        position: toast.POSITION.TOP_LEFT
                    });
                    reset();
                    setBlogimg('https://asvs.in/wp-content/uploads/2017/08/dummy.png')
                }
            })
    }
    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className='mb-3'>
                                <label>Title</label>
                                <input type="text" className='form-control' {...register("blogTitle", { required: true })} />
                                {errors.blogTitle && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className='mb-3'>
                                <label>Blog Image Url</label>
                                {/* <input onChange={handleBlogimage} type="text"    /> */}
                                <input onChange={handleBlogimage} type="text" id='blog-img' className='form-control' />

                            </div>
                            <div className='mb-3'>
                                <label>Approximate Reading Time (minutes)</label>
                                
                                <input onChange={handleBlogimage} type="text" className='form-control' {...register("readingTime", { required: true })}/>
                                {errors.readingTime && <span className='text-danger'>This field is required</span>}

                            </div>

                            <div className="mb-3">
                                <label className='mb-3'>Blog tags</label>
                                <br />
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" id="Programming" value="Programming" {...register("tag1")} />
                                    <label class="form-check-label" for="Programming">Programming</label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" id="Tech" value="Tech" {...register("tag2")} />
                                    <label class="form-check-label" for="Tech">Tech</label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" id="Story" value="Story" {...register("tag3")} />
                                    <label class="form-check-label" for="Story">Story</label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" id="Hardware" value="Hardware" {...register("tag4")} />
                                    <label class="form-check-label" for="Hardware">Hardware</label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" id="Software" value="Software" {...register("tag5")} />
                                    <label class="form-check-label" for="Software">Software</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img src={blogimg} className='img-fluid' alt="" />
                        </div>
                    </div>

                    <div className='mb-3'>
                        <label>Description</label>
                        <textarea className="form-control" placeholder="Write Blog here" rows='10' {...register("blogDescription", { required: true })}></textarea>

                        {errors.blogDescription && <span className='text-danger'>This field is required</span>}
                    </div>



                    <button className='btn btn-dark'>Post</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default AddBlog;