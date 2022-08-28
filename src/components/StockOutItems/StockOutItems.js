import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";

const StockOutItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://powerful-falls-56396.herokuapp.com/stockoutitems')
            .then(res => res.json())
            .then(data => {
                
                setItems(data);
                setLoading(false);
            })
    }, []);

    const handleUpdate = (productId) => {
        navigate(`/updateItem/${productId}`);
    }

    const handleDelete = (productId) => {
        console.log(productId);


        fetch('https://powerful-falls-56396.herokuapp.com/products', {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    // toast.warn("Item Deleted", {
                    //     position: toast.POSITION.TOP_RIGHT
                    // });
                    const deletedItem = items.find(item => item._id === productId);
                    const remainingItems = items.filter(item => item !== deletedItem);
                    setItems(remainingItems);
                    
                }

            })
    }
    return (
        <div>
            {/* <h1 className='text-center'>Stock out items</h1>
             */}
             <div className='d-flex justify-content-center py-3'>
                <span className='fs-1 fw-bold custom-radius-header p-5'>Stock out items</span>
            </div>

            {loading? <div className='d-flex justify-content-center align-items-center vh-100'><PulseLoader color="#79c5ac" size={30}/></div>: <>
            {
                items.length < 1 ? <div className='text-center pt-5'>
                    <div>
                        <h5>Everything is in stock..</h5>
                        <img src={require('../../images/notstockout.webp')} className='img-fluid w-50' alt="" />
                    </div>
                </div> :
                    <div className="table-responsive">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>Sl No.</th>
                                    <th scope='col'>Item Image</th>
                                    <th scope='col'>Item Name</th>
                                    <th scope='col'>Item Price</th>
                                    <th scope='col'>Stock</th>
                                    <th scope='col'>Vendor</th>
                                    <th scope='col'>Operation</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    items.map((item, index) => (
                                        <tr>
                                            <td className='align-middle'>{index+1}</td>
                                            <td className='align-middle'><img src={item.itemImage} className='img-fluid' width='90' alt="" /></td>
                                            <td className='align-middle' onClick={() => handleUpdate(item._id)} style={{ cursor: 'pointer' }}>{item.itemName}</td>
                                            <td className='align-middle'>{item.itemPrice}</td>
                                            <td className='align-middle'>{item.itemInStock}</td>
                                            <td className='align-middle'>{item.vendorName}</td>
                                            <td className='align-middle' >
                                                <i onClick={() => { handleDelete(item._id) }} className="fa-solid fa-trash-can pe-3" style={{ cursor: 'pointer' }}></i>

                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
            }
            </>}
            

            <div className="py-5"></div>
            <div className="py-5"></div>
            <div className="py-5"></div>
        </div>
    );
};

export default StockOutItems;