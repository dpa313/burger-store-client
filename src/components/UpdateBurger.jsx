import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateBurger = () => {
  const loadedBurger = useLoaderData()

  const handleUpdateSubmit = e =>{
    e.preventDefault()
    // shortcut system
    // const formData = new FormData(e.target)
    // const {name,quantity,supplier,taste,category,details,photoUrl} = Object.fromEntries(formData)
    const form = e.target
    const name = form.name.value
    const quantity = form.quantity.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photoUrl = form.photoUrl.value

    const updateBurger = {name,quantity,supplier,taste,category,details,photoUrl}

    // const {name,quantity,supplier,taste,category,details,photoUrl} = burger

    fetch(`http://localhost:3000/burger/${loadedBurger._id}`,{
      method: 'PUT',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updateBurger)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Success!',
          text: 'Item updated successfully!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <>
    <div className="container mx-auto flex flex-col items-center bg-slate-300 py-12 px-48 rounded-md">
      <h2 className="text-3xl font-bold pb-5 uppercase">Update a Burger {}</h2>
      <form 
        onSubmit={handleUpdateSubmit}
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
              defaultValue={loadedBurger.name}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control  w-1/2">
            <div className="label">
              <span className="label-text">Quantity</span>
            </div>
            <input
              type="number"
              placeholder="Quantity"
              name="quantity"
              defaultValue={loadedBurger.quantity}
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
              defaultValue={loadedBurger.supplier}
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
              defaultValue={loadedBurger.taste}
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
              // defaultValue={category}
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
              defaultValue={loadedBurger.details}
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
              defaultValue={loadedBurger.photoUrl}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <button className="w-full text-lg uppercase btn btn-neutral">update burger</button>
      </form>
    </div>
    </>
  )
}

export default UpdateBurger