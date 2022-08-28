import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import SyncLoader from "react-spinners/SyncLoader";

const SignUp = () => {
    const [showpass, setShowpass] = useState(false);
    const [loading, setLoading] = useState(false);
    const showPassword = ()=>{
        showpass?setShowpass(false):setShowpass(true);
    };
    const navigate = useNavigate();
    //sign in with google 
    const {user, error, googleSignin, setUser, setError, setIsloading, createUser, updateUser} = useFirebase();
    let  location = useLocation();
    let navigation = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const handleGoogleSignin = ()=>{
        setLoading(true);
        googleSignin()
        .then((result) => {

            const user = result.user;
            setUser(user);
            setLoading(false);
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
            // navigation( from, {replace:true});
        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            // console.log(errorMessage);

        })
        .finally(()=>{
            setIsloading(false);
        });
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        setError('');
        setLoading(true);
        createUser(data.email, data.password)
        .then(result =>{
            setUser(result.user);
            updateUser(data.name);
            setLoading(false);
            // console.log(user);
            reset();
            navigate('/');

        })
        .catch(error =>{
            setError(error.message);
            setLoading(false);
            // console.log(error.message);
        })

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
                setLoading(false);
                navigation(from, { replace: true });
            })
    };
    return (
        <div>
            <div className="container">
                <div className="py-lg-5"></div>
                <div className="row py-5 justify-content-center">
                    <div className="col-12 col-md-6 text-center ">
                        <div className=' w-75  rounded-circle'>
                            <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-948.jpg?w=826&t=st=1660795843~exp=1660796443~hmac=55f0b889e8b672322d25cae81c0e00157c7c288cb452efbcbba82af133d543af" className='img-fluid ' alt="" />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h1 className='text-center py-5'>Sign up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating mb-3">
                                <input type="text" className='form-control ps-3' {...register("name", { required: true })} placeholder='name' />
                                <label><i className="fa-solid fa-user px-3"></i>Name</label>
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className='form-control ps-3' {...register("email", { required: true })} placeholder='email' />
                                <label><i className="fa-solid fa-envelope px-3"></i>Email</label>
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-floating mb-3 input-group">
                                <input type={showpass?"text":"password"} className='form-control ps-3' {...register("password", { required: true })} placeholder='password' />
                                <button onClick={showPassword} className='btn green-cyan-btn rounded px-3' type='button'>
                                    {showpass?<i className="fa-solid fa-eye"></i>:<i className="fa-solid fa-eye-slash"></i>}</button>
                                <label ><i className="fa-solid fa-lock px-3"></i>Password</label>
                                {errors.password && <span>This field is required</span>}
                            </div>
                            
                            {/* show loading  */}
                            {loading ? <div className='d-flex justify-content-center align-items-center py-3'><SyncLoader color="#79c5ac" size={20}/></div>: null}

                            <div className="text-center">
                            {error?<h6 className='py-3 text-danger'>{error}</h6>:null}
                            <br />
                                <button className='btn green-cyan-btn px-5 py-2'>Sign up</button>
                            </div>
                        </form>
                        <div className='py-5 text-center'>
                            
                            <button onClick={handleGoogleSignin} className='btn btn-light px-5 py-2'><i className="fa-brands fa-google pe-3"></i>Sign in with Google</button>
                            <Link to='/login'><h6 className='py-5'>Already signedup? Login now!</h6></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;