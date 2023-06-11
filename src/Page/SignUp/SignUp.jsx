import { Link,useLocation, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Login/SocialLogin";
import Swal from "sweetalert2";
import { reload } from "firebase/auth";
const SignUp = () => {
  const {
    register,handleSubmit,
  } = useForm();
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'


  const onSubmit = (data) =>{
    console.log(data)
    if (data.email.trim() === "" || data.password.trim() === "") {
      return Swal.fire({
        icon: "error",
        title: "Email and password cannot be empty",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (data.password !== data.confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passwordRegex.test(data.password)) {
    setPasswordError(
      "Password must be at least 6 characters long, contain a capital letter, and a special character."
    );
    return Swal.fire({
      
      icon: "error",
      title:
        "Password must be at least 6 characters long, contain a capital letter, and a special character.",
      showConfirmButton: false,
      timer: 1500,
    });
  }
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      Swal.fire({
        icon: 'success',
        title: 'Login Success!!',
        showConfirmButton: false,
        timer: 1500
      })
      updateUserProfile(data.name, data.photoURL)
      .then(()=>{
        const saveUser = {name: data.name, email: data.email, image:data.photoURL}
        fetch("http://localhost:5000/users",{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(saveUser)
        })
      })
      reload()
    })
  };

  return (
    <div className="md:grid items-end gap-6 grid-cols-2 login-bg w-full mb-4">
      <div className="md:w-full bottom-0  pt-20">
        <img
          className="rounded-2xl"
          src="https://i.ibb.co/VmvhF9R/9-2x.png"
          alt=""
        />
      </div>
      <div className="md:w-full m-auto pt-20">
        <div className="flex items-center">
          <img
            className="w-8"
            src="https://i.ibb.co/pb7sgpd/Artboard-1-2x.png"
            alt=""
          />
          <h1 className="form-heder">Melody Music Academy</h1>
        </div>
        <p className="text-[#898D93] mt-2">
          Welcome, Please create to your account.
        </p>
        <SocialLogin></SocialLogin>
        <div className="divider text-blue-600 w-2/3 m-auto">
          
          Create Your Account
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("name")}
              />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input input-bordered"
              {...register("confirmPassword")}
            />
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm mb-4">{passwordError}</p>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photoURL")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>
          already have an account
          <Link to="/login">
            <span className="text-blue-600">Login Now!!</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
