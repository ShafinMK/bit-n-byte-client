import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const [itemImage, setitemImage] = useState('https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png');

    const handleIncrease = () => {
        let stockAmount = document.getElementById('stockAmount');
        stockAmount.value = parseInt(stockAmount.value) + 1;
    }
    const handleDecrease = () => {
        let stockAmount = document.getElementById('stockAmount');
        if (stockAmount.value > 1) {
            stockAmount.value = parseInt(stockAmount.value) - 1;
        }
    }
    const imagePreview = () => {
        let imageUrl = document.getElementById('item-image-url').value;
        console.log(imageUrl);
        setitemImage(imageUrl);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container'>
            <h1 className='text-center py-5'>Add new Item</h1>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* vendor email  */}
                        <div class="mb-3">
                            <label class="form-label text-primary">Vendor Email address</label>
                            <span className='form-control'>shafin@gmailcom</span>
                        </div>
                        {/* vendor name  */}
                        <div class="mb-3">
                            <label class="form-label text-primary">Vendor Name</label>
                            <span className='form-control'>shafin</span>
                        </div>
                        {/* item name  */}
                        <div class="mb-3">
                            <label class="form-label text-primary">Item Name</label>
                            <input type="text" className='form-control' {...register("itemName", { required: true })} />
                            {errors.itemName && <span className='text-danger'>This field is required</span>}
                        </div>
                        {/* item unit price */}
                        <div class="mb-3">
                            <label class="form-label text-primary">Item Price</label>
                            <input type="number" className='form-control' {...register("itemPrice", { required: true })} />
                            {errors.itemPrice && <span className='text-danger'>This field is required</span>}
                        </div>
                        {/* item image */}
                        <div class="mb-3">
                            <label class="form-label text-primary">Item Image Url</label>
                            <input onChange={imagePreview} type="text" className='form-control' id='item-image-url' required />
                            {errors.imgUrl && <span className='text-danger'>This field is required</span>}
                        </div>
                        {/* item stock in inventory  */}
                        <div class="mb-3">
                            <label class="form-label text-primary">Stock Amount</label>
                            <div className='d-flex'>
                                <button onClick={handleDecrease} className='btn btn-dark px-3' type="button"><i class="fa-solid fa-minus" ></i></button>
                                <div className='col-2 mx-2'>
                                    <input type="number" className='form-control text-center ' value={1} id='stockAmount' {...register("itemInStock", { required: true })} />
                                    {errors.itemInStock && <span className='text-danger'>This field is required</span>}
                                </div>
                                <button onClick={handleIncrease} className='btn btn-dark px-3' type="button"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>

                        {/* item features  */}
                        <div className="mb-3">

                            <label class="form-label text-primary">Features</label>
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

                            <input type="text" className='form-control my-2' placeholder='Feature 6' {...register("feature6", )} />
                            {errors.feature6 && <span className='text-danger'>This field is required</span>}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className='mb-3'>
                            <label class="form-label text-primary">Item Description</label>
                            <textarea className='form-control' cols="30" rows="10" {...register("itemDetails", { required: true })}></textarea>
                            {errors.itemDetails && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className='mb-3'>
                            <label class="form-label text-primary">Item Image</label>
                            <img src={itemImage} className='img-fluid w-100' alt="" />
                        </div>

                    </div>
                </div>


                <div className='text-center py-5'>
                    <button className='btn btn-primary px-5 py-2'>Add This Item</button>
                </div>
            </form>



        </div>
    );
};

export default AddItem;