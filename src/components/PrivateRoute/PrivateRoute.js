import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
// import { useState, CSSProperties } from "react";
import DotLoader from "react-spinners/DotLoader";

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };

const PrivateRoute = (props) => {
    const { isloading, user } = useFirebase();
    const location = useLocation();
    // let [color, setColor] = useState("#ffffff");
    if (isloading) {
        return (
            <div className='d-flex justify-content-center align-items-center vh-100'>
                {/* <h3>Loading.....</h3> */}
                <div className="">
                    <div className=''>
                        <DotLoader color={'#177165'} />
                    </div>
                </div>


            </div>
        );
    }
    const { children } = props;


    return user.email ? children : <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;