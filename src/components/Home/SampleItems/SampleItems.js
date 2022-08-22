import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SampleItems = () => {

    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                console.log(data);
            })
    }, []);
    const handleUpdate = (itemId) =>{
        navigate(`/updateItem/${itemId}`);
    }

    return (
        <div className='container'>

            <h1 className='py-5 text-center'>Products</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    items.map(item => <div className='col'>
                        <div className="card">
                            <div className="d-flex justify-content-center">
                            <img src={item.itemImage} className=" img-fluid" width='50%'  alt="..." />
                            </div>
                           
                            <div className="card-body">
                                <div className='text-center'>
                                    <h6 className="card-title">{item.itemName}</h6>
                                    <h6>৳ {item.itemPrice}</h6>
                                    <h6>stock: {item.itemInStock}</h6>
                                    <h6>Vendor: {item.vendorName}</h6>
                                   <button onClick={()=> handleUpdate(item._id)} className='btn btn-primary'>Update</button>
                                </div>

                            </div>
                        </div>
                    </div>)
                }

            </div>
            <div className='text-center py-5'>
            <button className='btn btn-danger'>Show More</button>
            </div>
        </div>
    );
};

export default SampleItems;