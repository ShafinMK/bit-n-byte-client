import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const { user } = useFirebase();
    // const [vendorName, setVendorname] = useState('');
    // setVendorname(user.displayName);
    console.log(`http://localhost:5000/vendorsproduct?vendorname=${user.displayName}`);


    useEffect(() => {

        fetch(`http://localhost:5000/vendorsproduct?vendorname=${user.displayName}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user.displayName])
    // if (items.length < 0) {
    //     return (<div>Loading items .....</div>);
    // }
    
        return (
            <div>
                <h1 className='text-center py-5'>My Items</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Sl No.</th>
                            <th scope='col'>Item Image</th>
                            <th scope='col'>Item Name</th>
                            <th scope='col'>Item Price</th>
                            <th scope='col'>Stock</th>
                            <th scope='col'>Vendor</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            items.length <1? <h3>You have not added any items yet</h3>:
                            items.map((item, index) => (
                                <tr>
                                    <td>{index}</td>
                                    <td><img src={item.itemImage} className='img-fluid' width='90' alt="" /></td>
                                    <td>{item.itemName}</td>
                                    <td>{item.itemPrice}</td>
                                    <td>{item.itemInStock}</td>
                                    <td>{item.vendorName}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    







};

export default MyItems;