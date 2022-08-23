import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StockOutItems = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/stockoutitems')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleUpdate = (productId) =>{
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
            <h1 className='text-center'>Stock out items</h1>
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
                                <td>{index}</td>
                                <td><img src={item.itemImage} className='img-fluid' width='90' alt="" /></td>
                                <td onClick={() => handleUpdate(item._id)} style={{ cursor: 'pointer' }}>{item.itemName}</td>
                                <td>{item.itemPrice}</td>
                                <td>{item.itemInStock}</td>
                                <td>{item.vendorName}</td>
                                <td >
                                    <i onClick={() => { handleDelete(item._id) }} className="fa-solid fa-trash-can pe-3" style={{ cursor: 'pointer' }}></i>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default StockOutItems;