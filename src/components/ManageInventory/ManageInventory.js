import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './ManageInventory.css';

import 'react-toastify/dist/ReactToastify.css';
const ManageInventory = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);


    const handleUpdate = (productId) => {
        navigate(`/updateItem/${productId}`);
    }
    const handleDelete = (productId) => {
        console.log(productId);


        fetch('http://localhost:5000/products', {
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
                    toast.warn("Item Deleted", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    const deletedItem = items.find(item => item._id === productId);
                    const remainingItems = items.filter(item => item !== deletedItem);
                    setItems(remainingItems);
                }

            })
    }
    return (
        <div className='common-bg'>
            {/* <h1 className='text-center py-5 custom-radius-header'>Inventory</h1> */}
            <div className='d-flex justify-content-center py-3'>
                <span className='fs-1 fw-bold custom-radius-header p-4'>Inventory</span>
            </div>
            <div className='table-responsive'>
                <table className='table py-5 mt-5'>
                    <thead>
                        <tr className='green-cyan'>
                            <th scope='col'>Sl No.</th>
                            <th scope='col'>Item Image</th>
                            <th scope='col'>Item Name</th>
                            <th scope='col'>Item Price</th>
                            <th scope='col'>Stock</th>
                            <th scope='col'>Vendor</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>

                    <tbody >
                        {
                            items.map((item, index) => (
                                <tr key={item._id} style={{ background: 'transparent' }}>
                                    <td>{index}</td>
                                    <td><img src={item.itemImage} className='img-fluid' width='90' alt="" /></td>
                                    <td onClick={() => handleUpdate(item._id)} className='black align-middle'>{item.itemName}</td>
                                    <td className='align-middle'>{item.itemPrice}</td>
                                    <td className='align-middle'>{item.itemInStock}</td>
                                    <td className='align-middle'>{item.vendorName}</td>
                                    <td className='align-middle' >
                                        <i onClick={() => { handleDelete(item._id) }} className="fa-solid fa-trash-can pe-3 text-danger" style={{ cursor: 'pointer' }}></i>
                                        <i onClick={() => handleUpdate(item._id)} style={{ cursor: 'pointer' }} className="fa-solid fa-pen text-warning"></i>

                                    </td>

                                </tr>
                            ))
                        }
                        <ToastContainer />
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageInventory;