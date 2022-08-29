import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import SyncLoader from "react-spinners/SyncLoader";

const LogIn = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, error, googleSignin, setUser, setError, setIsloading, userSignin } = useFirebase();
    let location = useLocation();
    let navigation = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignin = () => {
        setLoading(true);
        googleSignin()
            .then((result) => {

                const user = result.user;
                setUser(user);
                // console.log(user);
                
                //Token 
                fetch('https://powerful-falls-56396.herokuapp.com/login', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: user.email }),
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('accessToken', data.accessToken);
                        setLoading(false);
                        navigation(from, { replace: true });
                    })
                // navigation(from, { replace: true });
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);


            })
            .finally(() => {
                setIsloading(false);
                setLoading(false);
            });
    }
    const onSubmit = data => {
        setLoading(true);
        setError('');
        userSignin(data.email, data.password)
            .then((result) => {
                setUser(result.user);
                setLoading(false);
                //Token 
                fetch('https://powerful-falls-56396.herokuapp.com/login', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: data.email }),
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('accessToken', data.accessToken);
                        navigation(from, { replace: true });
                    })
                reset();
                // navigation(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
        // console.log(data);



    };
    return (
        <div>
            <div className="container">
                <div className="py-lg-5"></div>
                <div className="row py-5 justify-content-center align-items-center">
                    <div className="col-12 col-lg-6 text-center ">
                        <div className='text-center'>
                            <img src="https://img.freepik.com/free-vector/fingerprint-concept-illustration_114360-3898.jpg?w=826&t=st=1660795367~exp=1660795967~hmac=0477392a5e3f5325faf422f91ef6be96c8911946357e3795d3f9cb6cdbddff51" className='img-fluid w-75 w-lg-100' alt="" />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h1 className='text-center py-5'>User Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating mb-3">
                                <input type="email" className='form-control ps-3' {...register("email", { required: true })} placeholder='email' />
                                <label><i className="fa-solid fa-envelope px-3"></i>Email</label>
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className='form-control ps-3' {...register("password", { required: true })} placeholder='password' />
                                <label ><i className="fa-solid fa-lock px-3"></i>Password</label>
                                {errors.password && <span>This field is required</span>}
                            </div>

                            {/* show loading  */}
                            {loading ? <div className='d-flex justify-content-center align-items-center py-3'><SyncLoader color="#79c5ac" size={20} /></div> : null}

                            {/* error message  */}
                            {error ? <h6 className='text-center text-danger py-3'>{error}</h6> : null}
                            <div className="text-center">
                                <button className='btn green-cyan-btn px-5 py-2'>Log in</button>
                            </div>
                        </form>
                        <div className='py-5 text-center'>
                            <button onClick={handleGoogleSignin} className='btn btn-light border px-5 py-2'><i className="fa-brands fa-google pe-3"></i>Sign in with Google</button>
                            <Link to='/signup'><h6 className='py-5'>New User? Signup Now!</h6></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;