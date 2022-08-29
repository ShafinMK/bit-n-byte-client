import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SyncLoader from "react-spinners/SyncLoader";


const AddItem = () => {
    const [itemImage, setitemImage] = useState('https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png');
    const { user } = useFirebase();
    const [itemstock, setItemstock] = useState(10);
    const [loading, setLoading] = useState(false);

    const handleIncrease = () => {
        let stockAmount = document.getElementById('stockAmount');
        stockAmount.value = parseInt(stockAmount.value) + 1;
        setItemstock(stockAmount.value)
    }
    const handleDecrease = () => {
        let stockAmount = document.getElementById('stockAmount');
        if (stockAmount.value > 1) {
            stockAmount.value = parseInt(stockAmount.value) - 1;
            setItemstock(stockAmount.value);
        }
    }
    const setStock = () => {
        setItemstock(document.getElementById('stockAmount').value);
    }
    const imagePreview = () => {
        let imageUrl = document.getElementById('item-image-url').value;
        // console.log(imageUrl);
        setitemImage(imageUrl);
    }


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        setLoading(true);
        // data.vendorName = user.displayName;
        data.vendorEmail = user.email;
        data.itemInStock = itemstock;
        data.itemImage = itemImage;
        fetch('https://powerful-falls-56396.herokuapp.com/products', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {

                    toast.success("Product Added Successfully !", {
                        position: toast.POSITION.TOP_LEFT
                    });
                    reset();
                    setitemImage('https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png');
                    setLoading(false);
                }
            })


        // console.log(data);
    };

    return (
        <div className='common-bg'>
            <div className='container'>
                {/* <h1 className='text-center py-5'>Add new Item</h1> */}
                <div className='d-flex justify-content-center py-3'>
                    <span className='fs-1 fw-bold custom-radius-header p-4'>Add new Item</span>
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            {/* vendor email  */}
                            <div className="mb-3">
                                <label className="form-label green-cyan fw-bold">Vendor Email address</label>
                                <span className='form-control'>{user.email}</span>
                            </div>
                            {/* vendor name  */}
                            <div className="mb-3">
                                <label className="form-label green-cyan fw-bold">Vendor Name</label>
                                {/* <span className='form-control'>{user.displayName}</span> */}
                                <input type="text" defaultValue={user.displayName} className='form-control' {...register('vendorName', { required: true })} />
                            </div>
                            {/* item name  */}
                            <div className="mb-3">
                                <label className="form-label green-cyan fw-bold">Item Name</label>
                                <input type="text" className='form-control' {...register("itemName", { required: true })} />
                                {errors.itemName && <span className='text-danger'>This field is required</span>}
                            </div>
                            {/* item unit price */}
                            <div className="mb-3">
                                <label className="form-label green-cyan fw-bold">Item Price</label>
                                <input type="number" inputmode="numeric" className='form-control' {...register("itemPrice", { required: true })} />
                                {errors.itemPrice && <span className='text-danger'>This field is required</span>}
                            </div>
                            {/* item brand */}
                            <div className="mb-3">
                                <label className="form-label green-cyan fw-bold">Item Brand</label>
                                <input type="text" className='form-control' {...register("brand", { required: true })} />
                                {errors.brand && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="row">
                                {/* hardware section */}
                                <div className="col-12 col-lg-6 mb-3">
                                    <label className="form-label green-cyan fw-bold">Hardware Section</label>
                                    <select className="form-select" {...register("hardwareSection", { required: true })}>

                                        <option value="Accessories">Accessories</option>
                                        <option value="Components">Components</option>
                                        <option value="Monitors">Monitors</option>

                                    </select>
                                    {errors.hardwareType && <span className='text-danger'>This field is required</span>}
                                </div>
                                {/* hardware type */}
                                <div className="col-12 col-lg-6 mb-3">
                                    <label className="form-label green-cyan fw-bold">Hardware type</label>
                                    <select className="form-select" {...register("hardwareType", { required: true })}>

                                        <option value="Keyboard">Keyboard</option>
                                        <option value="Mouse">Mouse</option>
                                        <option value="Headphone">Headphone</option>
                                        <option value="Speaker">Speaker</option>
                                        <option value="Memory Card">Memory Card</option>
                                        <option value="Processor">Processor</option>
                                        <option value="CPU Cooler">CPU Cooler</option>
                                        <option value="Motherboard">Motherboard</option>
                                        <option value="Graphics Card">Graphics Card</option>
                                        <option value="Ram">Ram</option>
                                        <option value="Power Supply">Power Supply</option>
                                        <option value="Hard Disk Drive">Hard Disk Drive</option>
                                        <option value="SSD">SSD</option>
                                        <option value="Casing">Casing</option>
                                        <option value="Casing Cooler">Casing Cooler</option>
                                        <option value="Monitor">Monitor</option>
                                    </select>
                                    {errors.hardwareType && <span className='text-danger'>This field is required</span>}
                                </div>
                            </div>

                            {/* item image */}
                            <div className="mb-3">
                                <label className="form-label green-cyan fw-bold">Item Image Url</label>
                                <input onChange={imagePreview} type="text" className='form-control' id='item-image-url' required />
                                {errors.imgUrl && <span className='text-danger'>This field is required</span>}
                            </div>
                            {/* item stock in inventory  */}
                            <div className="mb-3">
                                <label className="form-label green-cyan fw-bold">Stock Amount</label>
                                <div className='d-flex'>
                                    <button onClick={handleDecrease} className='btn green-cyan-btn px-3' type="button"><i className="fa-solid fa-minus" ></i></button>
                                    <div className='col-2 mx-2'>
                                        <input onChange={setStock} type="number" className='form-control text-center ' defaultValue={itemstock} id='stockAmount' {...register("itemInStock", { required: true })} />
                                        {/* {errors.itemInStock && <span className='text-danger'>This field is required</span>} */}
                                    </div>
                                    <button onClick={handleIncrease} className='btn green-cyan-btn px-3' type="button"><i className="fa-solid fa-plus"></i></button>
                                </div>
                            </div>

                            {/* item features  */}
                            <div className="mb-3">

                                <label className="form-label green-cyan fw-bold">Features</label>
                                <input type="text" className='form-control my-2' placeholder='Feature 1' {...register("feature1", { required: true })} />
                                {errors.feature1 && <span className='text-danger'>This field is required</span>}

                                <input type="text" className='form-control my-2' placeholder='Feature 2' {...register("feature2", { required: true })} />
                                {errors.feature2 && <span className='text-danger'>This field is required</span>}

                                <input type="text" className='form-control my-2' placeholder='Feature 3' {...register("feature3", { required: true })} />
                                {errors.feature3 && <span className='text-danger'>This field is required</span>}

                                <input type="text" className='form-control my-2' placeholder='Feature 4' {...register("feature4", { required: true })} />
                                {errors.feature4 && <span className='text-danger'>This field is required</span>}

                                <input type="text" className='form-control my-2' placeholder='Feature 5' {...register("feature5", { required: true })} />
                                {errors.feature5 && <span className='text-danger'>This field is required</span>}

                                <input type="text" className='form-control my-2' placeholder='Feature 6' {...register("feature6",)} />
                                {errors.feature6 && <span className='text-danger'>This field is required</span>}
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className='mb-3'>
                                <label className="form-label green-cyan fw-bold">Item Description</label>
                                <textarea className='form-control' cols="30" rows="10" {...register("itemDetails", { required: true })}></textarea>
                                {errors.itemDetails && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className='mb-3'>
                                <label className="form-label green-cyan fw-bold">Item Image</label>
                                <img src={itemImage} className='img-fluid w-100' alt="" />
                            </div>

                        </div>
                    </div>
                    {/* show loading  */}
                    {loading ? <div className='d-flex justify-content-center align-items-center py-3'><SyncLoader color="#79c5ac" size={20} /></div> : null}

                    <div className='text-center py-5'>
                        <button className='btn green-cyan-btn px-5 py-2'>Add This Item</button>
                        <ToastContainer />
                    </div>
                </form>



            </div>
        </div>
    );
};

export default AddItem;