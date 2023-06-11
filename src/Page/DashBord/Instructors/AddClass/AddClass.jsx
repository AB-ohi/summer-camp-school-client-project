import { useForm } from "react-hook-form";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { reload } from "firebase/auth";
const img_hosting_token = import.meta.env.VITE__Image_Upload_token;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    console.log(data);
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { price, name, instructor, email } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            image: imgURL,
            instructor,
            email,
          };
          console.log(newItem);
          fetch("http://localhost:5000/classes", {
            method: "POST",
            headers:{
              'content-type':'application/json'
          },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              if (data.insertedId) {
                reload()
                Swal.fire({
                  title: "success",
                  text: "Do you want to continue",
                  icon: "submit",
                  confirmButtonText: "Cool",
                });
              }
            });
        }
      });
  };
  return (
    <div className="w-full  ">
      <SectionTitle Heading="Add A Nwe Class"></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#e4e4e4] m-[70px] p-[50px]"
      >
        <div className="md:flex w-full gap-6">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-black">
                Class Name<span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Class name"
              class="input text-black input-bordered w-full bg-white"
              {...register("name", { required: true, maxLength: 120 })}
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-black">
                Class Image<span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              class="file-input bg-transparent file-input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div>
          <label className="label">
            <span className="label-text font-semibold text-black">
              Instructor Name and Email
              <span className="text-red-700">(read-only)*</span>
            </span>
          </label>
          <input
            {...register("instructor")}
            type="text"
            defaultValue={user.displayName}
            readOnly
            class="input text-black input-bordered w-full bg-white"
          />
        </div>
        <div className="mt-6">
          <input
            {...register("email")}
            type="email"
            readOnly
            defaultValue={user.email}
            class="input text-black input-bordered w-full bg-white"
          />
        </div>
        <div className="md:flex w-full gap-6">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-black">
                Available seats<span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Available seats"
              class="input text-black input-bordered w-full bg-white"
              {...register("seats", { required: true })}
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-black">
                Price<span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Price"
              class="input text-black input-bordered w-full bg-white"
              {...register("price", { required: true, maxLength: 120 })}
            />
          </div>
        </div>
        <button
          className="btn flex items-center py-4 px-[30px] mt-8 gap-2 text-white"
          style={{
            background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
          }}
        >
          Add Item<FaUtensils></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddClass;
