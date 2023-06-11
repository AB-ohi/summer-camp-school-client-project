import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { reload } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
    const {googleSingIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const HandelGoogleSingIn = () =>{
        googleSingIn()
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
            const saveUser = {name: loggedUser.displayName, email: loggedUser.email, image:loggedUser.photoURL}
            fetch("https://summer-camp-school-server-project-ab-ohi.vercel.app/users",{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then((data) => {
                if(data.insertedId){
                }
            });
            navigate(from, { replace: true });
            reload()
            
            
        })
    }
    return (
        <div>
            <button onClick={HandelGoogleSingIn} className="btn btn-outline btn-primary w-full md:my-[60px]"><img className="w-[20px]" src="https://i.ibb.co/hYh0gXW/google-logo-9808.png" alt="" /> Log in with Google</button>
        </div>
    );
};

export default SocialLogin;