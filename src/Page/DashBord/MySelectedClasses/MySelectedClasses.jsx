import React from "react";
import useAddClasses from "../../../Hooks/useAddClasses";
import Selected from "./Selected";
import "./Selected.css";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
  const [classSelect] = useAddClasses();
  console.log(classSelect);
  const total = classSelect.reduce((sum, cls) => cls.price + sum, 0);
  const handelDelete = select =>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/classSelect/${select._id}`,{
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        if(data.deleteCount > 0){
          refetch()
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  })
}
  return (
    <div>
      <div className="flex justify-between mb-6">
        <div >
          <h1 className="text-2xl font-semibold">
            Total Class : {classSelect.length}
          </h1>
          <h1>Total Price for Classes: {total} $</h1>
        </div>
        <button className="btn pay-btn mt-4">Payment</button>
      </div>
      <div>
        <div className="grid items-center grid-cols-1 gap-6">
          {classSelect.map((select) => (
            <div className="flex SelectedClasses rounded-xl p-5" key={select._id}>
            <div className="w-1/3">
              <img className="w-full rounded-xl" src={select.image} alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">{select.name}</h2>
              <p>Instructor: {select.instructor}</p>
              <p>Price: {select.price} <span>$</span> </p>
              <div className="card-actions justify-end">
                <button onClick={()=>handelDelete(select)} className="btn bg-[#00b8eb] text-white">Delete</button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySelectedClasses;
