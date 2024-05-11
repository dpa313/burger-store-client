import React from "react";
import Swal from 'sweetalert2'

const AddBurger = () => {

  const handleFormSubmit = e =>{
    e.preventDefault()
    // shortcut system
    const formData = new FormData(e.target)
    const {name,quantity,supplier,taste,category,details,photoUrl} = Object.fromEntries(formData)
    // const form = e.target
    // const name = form.name.value
    // const quantity = form.quantity.value
    // const supplier = form.supplier.value
    // const taste = form.taste.value
    // const category = form.category.value
    // const details = form.details.value
    // const photoUrl = form.photoUrl.value

    const newBurger = {name,quantity,supplier,taste,category,details,photoUrl}
    console.log(newBurger)

    fetch('http://localhost:3000/burger',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newBurger)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Item added successfully!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <div className="container mx-auto flex flex-col items-center bg-slate-300 py-12 px-48 rounded-md">
      <h2 className="text-3xl font-bold pb-5 uppercase">Add a Burger</h2>
      <form 
        onSubmit={handleFormSubmit}
        className="w-full space-y-4">
        <div className="flex gap-2">
          <label className="form-control w-1/2">
            <div className="label">
              <span className="label-text">Burger Name</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control  w-1/2">
            <div className="label">
              <span className="label-text">Quantity</span>
            </div>
            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="flex gap-2">
          <label className="form-control  w-1/2">
            <div className="label">
              <span className="label-text">Supplier Name</span>
            </div>
            <input
              type="text"
              placeholder="Supplier Name"
              name="supplier"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control  w-1/2">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              placeholder="Taste"
              name="taste"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="flex gap-2">
          <label className="form-control  w-1/2">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              placeholder="category"
              name="category"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control  w-1/2">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              placeholder="Details"
              name="details"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              placeholder="Photo URL"
              name="photoUrl"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <button className="w-full text-lg uppercase btn btn-neutral">add burger</button>
      </form>
    </div>
  );
};

export default AddBurger;
