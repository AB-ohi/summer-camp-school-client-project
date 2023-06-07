import "./Login.css";
const Login = () => {
  return (
    <div className="flex login-bg w-full">
      <div className="w-1/2">
        <img src="https://i.ibb.co/XbHJXxb/Artboard-28-2x.png" alt="" />
      </div>
      <div className="w-1/2 pt-20">
        <div className="flex items-center">
          <img
            className="w-8"
            src="https://i.ibb.co/pb7sgpd/Artboard-1-2x.png"
            alt=""
          />
          <h1 className="form-heder">Melody Music Academy</h1>
        </div>
        <p className="text-[#898D93] mt-2">Welcome, Please login to your account.</p>
        <button className="btn btn-outline btn-primary w-full md:my-[60px]"><img className="w-[20px]" src="https://i.ibb.co/hYh0gXW/google-logo-9808.png" alt="" /> Log in with Google</button>
        <div className="divider text-blue-600 w-2/3 m-auto"> login For External User</div>
        <form>
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
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
