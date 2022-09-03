import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SampleItem.css';

const SampleItems = () => {

    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://powerful-falls-56396.herokuapp.com/homepageproducts')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                // console.log(data);
            })
    }, []);
    const handleUpdate = (itemId) => {
        navigate(`/updateItem/${itemId}`);
    }

    return (
        <div className='p-3 px-lg-5 mx-lg-5'>

            <h1 className='py-5 text-center' data-aos="fade-up">Products</h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    items.map(item => <div className='col' key={item._id}>
                        <div className="card border-0 shadow" data-aos="zoom-in" data-aos-duration="1000" onClick={() => handleUpdate(item._id)} style={{ cursor: 'pointer' }}>
                            <div className="d-flex justify-content-center">
                                
                                <img src={item.itemImage} className=" img-fluid" width='50%' alt="..." />
                            </div>
                            
                            <div className="card-body">
                                <div className='text-center'>
                                    <h6>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </h6>
                                    <h6 className="card-title green-cyan" style={{ height: '3em' }}>{item.itemName}</h6>
                                    <h6>৳ {item.itemPrice}</h6>
                                    <h6>stock: {item.itemInStock}</h6>
                                    {/* <h6>Vendor: {item.vendorName}</h6> */}
                                    {/* <button onClick={()=> handleUpdate(item._id)} className='btn btn-primary'>Update</button> */}
                                </div>

                            </div>
                        </div>
                    </div>)
                }

            </div>
            <div className='text-center py-5'>
                <button onClick={()=> navigate('/manageinventory')} className='btn green-cyan-btn px-5'>Show More</button>
            </div>
        </div>
    );
};

export default SampleItems;