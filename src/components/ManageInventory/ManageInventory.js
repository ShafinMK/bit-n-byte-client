import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './ManageInventory.css';
import 'react-toastify/dist/ReactToastify.css';
import DoughnuthartsItems from '../Charts/DoughnuthartsItems';
import PiechartStorage from '../Charts/PiechartStorage';
import PulseLoader from "react-spinners/PulseLoader";

const ManageInventory = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://powerful-falls-56396.herokuapp.com/products')
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
        if (window.confirm("Do you really want to Delete")) {
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
                        toast.warn("Item Deleted", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        const deletedItem = items.find(item => item._id === productId);
                        const remainingItems = items.filter(item => item !== deletedItem);
                        setItems(remainingItems);
                    }

                })
        }
    }
    return (
        <div className='common-bg'>
            {/* <h1 className='text-center py-5 custom-radius-header'>Inventory</h1> */}
            <div className='d-flex justify-content-center py-3'>
                <span className='fs-1 fw-bold custom-radius-header p-4'>Inventory</span>
            </div>
            {loading ? <div className='d-flex justify-content-center align-items-center vh-100'><PulseLoader color="#79c5ac" size={30}/></div> : <>

                <div className="container">
                    <div className='row justify-content-center'>
                        <div className="col-md-6 col-lg-3">
                            <DoughnuthartsItems items={items}></DoughnuthartsItems>
                        </div>
                        {/* <div className="px-lg-5"></div> */}
                        <div className="col-md-6 col-lg-3">
                            <PiechartStorage items={items}></PiechartStorage>

                        </div>
                    </div>
                </div>
                <div className='table-responsive'>
                    <table className='table table-striped table-bordered py-5 mt-5'>
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
                                        <td>{index+1}</td>
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
                            
                        </tbody>
                    </table>
                    <ToastContainer />
                </div>
            </>}

        </div>
    );
};

export default ManageInventory;