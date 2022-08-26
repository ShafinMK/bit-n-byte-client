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
        <div className='common-bg'>
            {/* <h1 className='text-center py-5'>My Items</h1> */}
            <div className='d-flex justify-content-center py-3'>
                <span className='fs-1 fw-bold custom-radius-header p-4'>My Items</span>
            </div>
            {
                items.length < 1 ? <div className='d-flex justify-content-center'>
                    <div className='text-center'>
                        <img src={require('../../images/icons/nothingfound.png')} className='img-fluid w-50' alt="" />
                        <h6 >You haven't added any items yet.....</h6>
                    </div>
                </div> :
                    <table className='table container'>
                        <thead>
                            <tr className='green-cyan'>
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

                                items.map((item, index) => (
                                    <tr style={{background:'transparent'}}>
                                        <td className='align-middle'>{index}</td>
                                        <td className='align-middle'><img src={item.itemImage} className='img-fluid' width='90' alt="" /></td>
                                        <td className='align-middle'>{item.itemName}</td>
                                        <td className='align-middle'>{item.itemPrice}</td>
                                        <td className='align-middle'>{item.itemInStock}</td>
                                        <td className='align-middle'>{item.vendorName}</td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }

        </div>
    );








};

export default MyItems;