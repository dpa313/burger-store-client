import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(loadedUsers);

  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:3000/users/${id}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount > 0){
        alert("Deleted successfully")
        const remaining = users.filter(user=> user._id !== id)
        setUsers(remaining)
      }
    })
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Created At</th>
            <th>Last logged in</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                </td>
              </tr>
            );
          })}
          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
