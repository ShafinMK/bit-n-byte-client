import React from 'react';
import './Home.css'
import SampleItems from './SampleItems/SampleItems';

const Home = () => {
    return (
        <div>
            <div className="row">
                <div>

                    <div className="banner">

                        <div className='d-flex justify-content-center h-100 align-items-center'>
                            <h1 className='text-light'>Bit n Byte Inventory</h1>
                        </div>
                    </div>
                </div>
            </div>

            <SampleItems></SampleItems>
        </div>
    );
};

export default Home;