import { Link } from "react-router-dom";
import "../Login/Login.css";
const SignUp = () => {
    return (
        <div className="md:grid gap-6 grid-cols-2 login-bg w-full mb-4">
      <div className="md:w-full bottom-0  pt-20">
        <img className="rounded-2xl" src="https://i.ibb.co/VmvhF9R/9-2x.png" alt="" />
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
        <p className="text-[#898D93] mt-2">Welcome, Please create to your account.</p>
        <button className="btn btn-outline btn-primary w-full md:my-[60px]"><img className="w-[20px]" src="https://i.ibb.co/hYh0gXW/google-logo-9808.png" alt="" /> Log in with Google</button>
        <div className="divider text-blue-600 w-2/3 m-auto"> Create Your Account</div>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="email"
              className="input input-bordered"
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
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>already have an account <Link to='/login'><span className="text-blue-600">Login Now!!</span></Link></p>
      </div>
    </div>
    );
};

export default SignUp;