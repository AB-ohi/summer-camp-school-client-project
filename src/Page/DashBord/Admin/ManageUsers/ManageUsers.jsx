import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["user"], async () => {
    const res = await fetch("http://localhost:5000/users");
    console.log(users);
    return res.json();
  });

  const handelMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `is an admin Now !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handelInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `is an admin Now !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handelDelete = (user) => {
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
          fetch(`http://localhost:5000/users/${user._id}`,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
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
  };

  return (
    <div>
      <h1>Total Member: {users.length}</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role Admin</th>
                <th>Role Instructor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user.email}
                    </span>
                  </td>
                  <td className="text-center">
                    {user.role === "admin" ? (
                      <FaUserShield className="text-green-400 text-2xl m-auto" />
                    ):(
                      <button
                        onClick={() => handelMakeAdmin(user)}
                        className="btn"
                      >
                        Admin
                      </button>
                    ) }
                  </td>
                  <td className="text-center">
                  {user.role === "instructor" ? (
                      <FaUserTie className="text-red-600 text-2xl m-auto" />
                    ):(
                      <button
                        onClick={() => handelInstructor(user)}
                        className="btn m-auto"
                      >
                        Instructor
                      </button>
                    ) }
                  </td>

                  <th>
                    <button
                      onClick={() => handelDelete(user)}
                      className="btn bg-[#00b8eb] text-white"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
