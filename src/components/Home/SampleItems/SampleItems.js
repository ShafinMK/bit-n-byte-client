import React, { useEffect, useState } from 'react';

const SampleItems = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://shafinmk.github.io/resources-api/cyphersLab.json')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                console.log(data);
            })
    }, []);
    return (
        <div className='container'>

            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    items.map(item => <div className='col'>
                        <div className="card">
                            <img src={item.serviceThumb} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className='text-center'>
                                    <h6 className="card-title">Card title</h6>
                                    <h6>Price</h6>
                                    <h6>quantity</h6>
                                    <h6>Vendor:</h6>
                                    <button className='btn btn-primary'>Update</button>
                                </div>

                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default SampleItems;