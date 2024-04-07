/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffee }) => {

    const { _id, name, quantity, supplier, test, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining =  coffees.filter(cof => cof._id !== _id)
                            setCoffee(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl py-16">
            <img className="h-40" src={photo} alt="Coffee" />
            <div className="flex w-full justify-between pr-2">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Category: {category}</p>
                    <p>Test: {test}</p>

                </div>

                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                        <button className="btn bg-black text-white">View</button>
                        <Link to={`updatecoffee/${_id}`}>
                            <button className="btn bg-black text-white">Edit</button>
                        </Link>
                        <button
                            onClick={() => { handleDelete(_id) }}
                            className="btn bg-red-800 text-white">X</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoffeeCard;