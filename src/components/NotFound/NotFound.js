import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div> 
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                    <img src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg?w=826&t=st=1660753817~exp=1660754417~hmac=01819277b2f1b6a0adfff51d815a176199d741db3256ed321ed8464b711d7e28" className='img-fluid' alt="" />
                    </div>
                </div>
                <br />
                <Link to='/'><button className='btn btn-primary'>Go Back</button></Link>
            </div>

        </div>
    );
};

export default NotFound;