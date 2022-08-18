import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user, googleSignin, setUser, setError, setIsloading, userSignin} = useFirebase();
    let  location = useLocation();
    let navigation = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignin = ()=>{
        googleSignin()
        .then((result) => {

            const user = result.user;
            setUser(user);
            console.log(user);
            navigation( from, {replace:true});
        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);


        })
        .finally(()=>{
            setIsloading(false);
        });
    }
    const onSubmit = data => {
        userSignin(data.email, data.password)
        .then((result)=>{
            setUser(result.user);
            reset();
            navigation( from, {replace:true});
        })
        .catch((error)=>{
            setError(error.message);
        })
        console.log(data);

    };
    return (
        <div>
            <div className="container">
                <div className="py-lg-5"></div>
                <div className="row py-5 justify-content-center">
                    <div className="col-12 col-md-6 text-center ">
                        <div className=' w-75  rounded-circle'>
                            <img src="https://img.freepik.com/free-vector/fingerprint-concept-illustration_114360-3898.jpg?w=826&t=st=1660795367~exp=1660795967~hmac=0477392a5e3f5325faf422f91ef6be96c8911946357e3795d3f9cb6cdbddff51" className='img-fluid ' alt="" />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h1 className='text-center py-5'>User Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating mb-3">
                                <input type="email" className='form-control ps-3' {...register("email", { required: true })} placeholder='email' />
                                <label><i class="fa-solid fa-envelope px-3"></i>Email</label>
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className='form-control ps-3' {...register("password", { required: true })} placeholder='password' />
                                <label ><i className="fa-solid fa-lock px-3"></i>Password</label>
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <div className="text-center">
                                <button className='btn btn-success px-5 py-2'>Log in</button>
                            </div>
                        </form>
                        <div className='py-5 text-center'>
                            <button onClick={handleGoogleSignin} className='btn btn-light px-5 py-2'><i class="fa-brands fa-google pe-3"></i>Sign in with Google</button>
                            <Link to='/signup'><h6 className='py-5'>New User? Signup Now!</h6></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;