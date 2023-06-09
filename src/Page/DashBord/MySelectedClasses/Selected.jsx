import Swal from "sweetalert2";
import useAddClasses from "../../../Hooks/useAddClasses";

const Selected = ({ select }) => {
  const [,refetch] = useAddClasses();
  const { name, price, image, instructor, _id } = select;

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
        fetch(`http://localhost:5000/classSelect?/${select._id}`,{
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
    <div className="flex SelectedClasses rounded-xl p-5">
      <div className="w-1/3">
        <img className="w-full rounded-xl" src={image} alt="" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Instructor: {instructor}</p>
        <p>Price: {price} <span>$</span> </p>
        <div className="card-actions justify-end">
          <button onClick={()=>handelDelete(select)} className="btn bg-[#00b8eb] text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Selected;
