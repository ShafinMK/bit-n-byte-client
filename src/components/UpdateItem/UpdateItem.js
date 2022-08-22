import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const [item, setItem] = useState({});
    const features = [item.feature1,item.feature2, item.feature3, item.feature4, item.feature5, item.feature6]
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { updateid } = useParams();
    console.log(updateid);

    //handle delivery
    const handleDelivery = (productId)=>{
        fetch(`http://localhost:5000/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
              },
              body: JSON.stringify(item.itemInStock -1)
        })
        
    }

    useEffect(() => {
        fetch(`http://localhost:5000/products/${updateid}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                console.log(item);
            })
    }, []);
    return (
        <div>
            <div className="container">
                <h1 className='text-center py-5'>{item.itemName}</h1>
                <div className="row">
                    <div className="col-12 col-md-6">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>Item Name</h5>
                            <input className='form-control' type='text' defaultValue={item.itemName} {...register("itemName", { required: true })} />
                            {errors.itemName && <span>This field is required</span>}

                            <div className='row'>

                                <div className="col-12 col-md-6">
                                    <h5>Price:</h5>
                                    <input className='form-control' defaultValue={item.itemPrice} type="number"{...register("itemPrice", { required: true })} />
                                    {errors.itemPrice && <span>This field is required</span>}
                                </div>
                                <div className="col-12 col-md-6">
                                    <h5>Item In Stock: </h5>
                                    <h5 className='px-3 form-control'>{item.itemInStock}</h5>
                                </div>
                            </div>
                            <div>
                                <h5>Features</h5>
                                <ul>
                                    {features.map(feature => feature !== ''?<li>{feature}</li> : null)}
                                    
                                </ul>
                            </div>
                            <div>
                                <h5>Description</h5>
                                <p>
                                    {item.itemDetails}
                                </p>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <button onClick={handleDelivery} className='btn btn-success  px-4 py-2' >Delivered</button>
                                <button className='btn btn-warning  px-4 py-2'>Update</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={item.itemImage} className='img-fluid' alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdateItem;