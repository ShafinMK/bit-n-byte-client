import React from 'react';
import { useForm } from "react-hook-form";

const UpdateItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="container">
                <h1 className='text-center py-5'>Update Item</h1>
                <div className="row">
                    <div className="col-12 col-md-6">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>Item Name</h5>
                            <input className='form-control' type='text' {...register("exampleRequired", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <div className='row'>
                                
                                <div className="col-12 col-md-6">
                                    <h5>Price:</h5>
                                    <input className='form-control' type="number"{...register("exampleRequired", { required: true })} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                                <div className="col-12 col-md-6">
                                    <h5>Item In Stock: </h5>
                                    <h5 className='px-3 form-control'>3</h5>
                                </div>
                            </div>
                            <div>
                                <h5>Features</h5>
                                <ul>
                                    <li>True 6,400 DPI Optical Sensor</li>
                                </ul>
                            </div>
                            <div>
                                <h5>Description</h5>
                                <p>
                                Razer DeathAdder Essential Gaming Mouse has been a mainstay in the global esports arena. It has garnered a reputation for reliability that gamers swear by due to its proven durability and ergonomics. The Razer DeathAdder Essential Gaming Mouse is the most renowned and recognized gaming mouse in the world.
                                </p>
                            </div>
                            <div>
                                <button className='btn btn-warning  px-4 py-2'>Delivered</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="https://www.startech.com.bd/image/cache/catalog/mouse/razer/deathadder-essetial/deathadder-essential-500x500.jpg" className='img-fluid' alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdateItem;