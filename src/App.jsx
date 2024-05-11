import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "./App.css";
import BurgerCard from "./components/BurgerCard";

function App() {
  const loadedBurgers = useLoaderData();
  const [burgers,setBurgers] = useState(loadedBurgers)

  // console.log(burgers);

  const handleDelete = (_id) =>{
    // console.log(_id);
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
        fetch(`http://localhost:3000/burger/${_id}`,{
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount > 0){
             Swal.fire({
              title: "Deleted!",
              text: "Your burger has been deleted.",
              icon: "success"
            });
            const remaining = burgers.filter(burg => burg._id !== _id)
            setBurgers(remaining)
          }
        })
      }
    });
  }

  return (
    <>
      <h2>Total burger length : {burgers.length}</h2>
      <h3>Our Society</h3>
      <div className="grid grid-cols-2 gap-5">
      {burgers.map((burger) => {
        // console.log(burger)
        return (
          <div key={burger._id} className="">
            <div className="flex items-center justify-between p-2 bg-base-100 shadow-xl">
              <figure className="w-[300px] h-[200px]">
                <img src={burger.photoUrl} alt="Movie" />
              </figure>
              <div className="flex flex-col">
                <h2 className="card-title">{burger.name}</h2>
                <p>{burger.quantity}</p>
                <p>{burger.supplier}</p>
              </div>
              <div className="flex flex-col gap-1">
                  <button className="btn btn-outline btn-primary">View</button>
                  <Link to={`/updateburger/${burger._id}`}>
                    <button className="btn btn-outline btn-success">Edit</button>
                  </Link>
                  <button
                    onClick={()=>handleDelete(burger._id)}
                    className="btn btn-outline btn-error">Delete</button>
                </div>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default App;
