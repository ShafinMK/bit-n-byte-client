import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = (props) => {
    const {isloading, user} = useFirebase();
    const location = useLocation();
    if(isloading){
        return (
            <h3>Loading.....</h3>
        );
    }
    const {children} = props;
    
    
    return user.email? children :<Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;