import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('https://shafinmk.github.io/resources-api/cyphersLab.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);
    return (
        <div>
            <h1 className='text-center py-5'>Inventory</h1>
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
                        items.map((item, index) =>(
                            <tr>
                                <td>{index}</td>
                                <td><img src={item.serviceThumb} className='img-fluid' width='90' alt="" /></td>
                                <td>{item.serviceName}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;