/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const updateCoffee = useLoaderData()
    const {_id, name, quantity, supplier, test, category, details, photo} = updateCoffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, test, category, details, photo};
        // console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },

            body:JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);

            if(data.modifiedCount > 0){
                
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Data Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                    
                  })

                  
            }
            event.target.reset()

            
        })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>

            <div className='text-center px-56 mb-10'>
                <h2 className='text-3xl font-extrabold'>Update Coffee </h2>
                <p >It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleUpdateCoffee}>
                {/* 1st row */}
                <div className='flex'>
                    <div className="form-control md:w-1/2 me-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered md:w-full" required />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input input-bordered md:w-full" required />
                    </div>

                </div>

                {/* 2nd row */}
                <div className='flex'>
                    <div className="form-control md:w-1/2 me-4">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier name" className="input input-bordered md:w-full" required />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <input type="text" name='test' defaultValue={test} placeholder="Test" className="input input-bordered md:w-full" required />
                    </div>

                </div>

                {/* 3rd row */}
                <div className='flex'>
                    <div className="form-control md:w-1/2 me-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered md:w-full" required />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered md:w-full" required />
                    </div>

                </div>

                {/* 4th row */}
                <div className='mb-8'>
                    <div className="form-control w-full me-4">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' defaultValue={photo} placeholder="Photo Url" className="input input-bordered md:w-full" required />
                    </div>

                </div>

                {/* <button className="btn btn-neutral">Neutral</button> */}
                <input className="btn btn-neutral w-full" type="submit" value="Update" />

            </form>
        </div>
    );
};

export default UpdateCoffee;