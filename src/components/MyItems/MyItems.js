import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import PulseLoader from "react-spinners/PulseLoader";

const MyItems = () => {
    const [items, setItems] = useState([]);
    const { user } = useFirebase();
    const { vendor } = useParams();
    const [loading, setLoading] = useState(true);
    // const [vendorName, setVendorname] = useState('');
    // setVendorname(user.displayName);
    // console.log(`https://powerful-falls-56396.herokuapp.com/vendorsproduct?vendorname=${vendor}`);


    // useEffect(() => {

    //     fetch(`https://powerful-falls-56396.herokuapp.com/vendorsproduct?vendorname=${user.displayName}`)
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [user.displayName])
    useEffect(() => {
        const getOrders = async () => {
            const url = `https://powerful-falls-56396.herokuapp.com/vendorsproduct?vendoremail=${vendor}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setItems(data);
            setLoading(false);
            // console.log(data);
        }
        getOrders();
        // setLoading(false);
    }, [user]);



    return (
        <div className='common-bg'>
            {/* <h1 className='text-center py-5'>My Items</h1> */}
            <div className='d-flex justify-content-center py-3'>
                <span className='fs-1 fw-bold custom-radius-header p-4'>My Items</span>
            </div>
            {
                loading ? <div className='d-flex justify-content-center align-items-center vh-100'><PulseLoader color="#79c5ac" size={30} /></div> : <>

                    {
                        items.length < 1 ? <div className='d-flex justify-content-center'>
                            <div className='text-center'>
                                <img src={require('../../images/icons/nothingfound.png')} className='img-fluid w-50' alt="" />
                                <h6 className='pb-5'>You haven't added any items yet.....</h6>
                            </div>
                        </div> :
                            <div className='px-3 px-lg-5 mx-lg-5'>
                                <table className='table '>
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
                                            <tr style={{ background: 'transparent' }} key={item._id}>
                                                <td className='align-middle'>{index+1}</td>
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
                            </div>
                    }
                </>

            }
            <div className="py-5"></div>
            <div className="py-5"></div>
            <div className="py-5"></div>
        </div>
    );








};

export default MyItems;