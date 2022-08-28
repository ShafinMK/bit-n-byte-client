import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const UpdateItem = () => {
    const [item, setItem] = useState({});
    const features = [item.feature1, item.feature2, item.feature3, item.feature4, item.feature5, item.feature6];
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { updateid } = useParams();
    

    //restock item
    const [itemrestock, setItemrestock] = useState(0);
    const handleIncrease = () => {
        let stockAmount = document.getElementById('restockAmount');
        stockAmount.value = parseInt(stockAmount.value) + 1;
        setItemrestock(stockAmount.value);
    }
    const handleDecrease = () => {
        let stockAmount = document.getElementById('restockAmount');
        if (stockAmount.value > 1) {
            stockAmount.value = parseInt(stockAmount.value) - 1;
            setItemrestock(stockAmount.value);
        }
    }
    const setStock = () => {
        setItemrestock(document.getElementById('restockAmount').value);
        console.log('ads');
    }
     //handle Update
     const onSubmit = data => {
         data.itemInStock = parseInt(item.itemInStock) + parseInt(itemrestock);
         item.itemInStock = data.itemInStock;
         
        
        fetch(`https://powerful-falls-56396.herokuapp.com/updateproduct/${updateid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                toast.info("Done! Item Updated", {
                    position: toast.POSITION.TOP_CENTER
                });
               
            }
            setItemrestock(0);
            document.getElementById('restockAmount').value=0;
        })
        console.log(data);
    };
    //handle delivery
    const handleDelivery = (productId) => {
        const itemInStock = { itemInStock: item.itemInStock - 1 }
        fetch(`https://powerful-falls-56396.herokuapp.com/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemInStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.info("Done! Item Stock Updated", {
                        position: toast.POSITION.BOTTOM_CENTER
                    });
                    document.getElementById('stock-id').innerHTML = item.itemInStock - 1;
                }
            })

    }
   
    //load update product api
    useEffect(() => {
        fetch(`https://powerful-falls-56396.herokuapp.com/products/${updateid}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                // console.log(item);
            })
    }, []);
    return (
        <div className='common-bg'>
            <div className="container">
                <h1 className='text-center py-5 green-cyan'>{item.itemName}</h1>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='mb-3'>
                                <h5 className="green-cyan">Item Name</h5>
                                <input className='form-control' type='text' defaultValue={item.itemName} {...register("itemName", { required: true })} />
                                {errors.itemName && <span>This field is required</span>}
                            </div>

                            <div className='row mb-3'>

                                <div className="col-12 col-md-6">
                                    <h5 className="green-cyan">Price:</h5>
                                    <input className='form-control' defaultValue={item.itemPrice} type="number"{...register("itemPrice", { required: true })} />
                                    {errors.itemPrice && <span>This field is required</span>}
                                </div>
                                <div className="col-12 col-md-6">
                                    <h5 className="green-cyan">Item In Stock: </h5>
                                    <h5 className='px-3 form-control' id='stock-id'>{item.itemInStock}</h5>
                                    {/* <input type="number" className='form-control' defaultValue={item.itemInStock} {...register('itemInStock', {required: true})} /> */}
                                </div>
                            </div>

                            <div className="row mb-3">
                                <h5 className="green-cyan">Restock Item</h5>
                                <div className='d-flex'>
                                    <button onClick={handleDecrease} className='btn btn-dark px-3' type="button"><i className="fa-solid fa-minus" ></i></button>
                                    <div className='col-2 mx-2'>
                                        <input onChange={setStock} type="number" className='form-control text-center ' defaultValue={itemrestock} id='restockAmount' />
                                        {/* {errors.itemInStock && <span className='text-danger'>This field is required</span>} */}
                                    </div>
                                    <button onClick={handleIncrease} className='btn btn-dark px-3' type="button"><i className="fa-solid fa-plus"></i></button>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <h5 className="green-cyan">Features</h5>
                                
                                    {features.map(feature => feature !== '' ? <p>&emsp;<i className="fa-solid fa-hand-point-right fs-5 green-cyan pe-3"></i>{feature}</p> : null)}

                                
                            </div>


                        </div>
                        <div className="col-12 col-md-6">
                            <img src={item.itemImage} className='img-fluid' alt="" />
                        </div>
                        <div className=''>
                            <div className=' row mb-3'>
                                <h5 className="green-cyan">Description</h5>
                                <p className='' style={{ textAlign: 'justify' }}>
                                    {item.itemDetails}
                                </p>
                            </div>
                            <div className='d-flex justify-content-evenly py-5'>
                                <button onClick={() => handleDelivery(item._id)} type='button' className='btn green-cyan-btn col-4  px-4 py-2' >Delivered</button>
                                <button  className='btn white-btn col-4  px-4 py-2 border'>Update Item</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>





                </form>




            </div>
        </div>
    );
};

export default UpdateItem;