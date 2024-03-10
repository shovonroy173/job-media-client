import {  useState } from "react";
import { useDispatch} from "react-redux";
import { login } from "../redux/apiCalls.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errStatus, setErrStatus] = useState("");
  const dispatch = useDispatch();
  const handleClick = async (e) => {
    // console.log("ok");
    e.preventDefault();

    if (email === "") {
      toast.error("email is required!", {
        position: "top-right",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-right",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-right",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-right",
      });
    } else {
      const res = await login(dispatch, { email, password });
      // console.log("LINE AT 34", res.response.status);
      if(res.email ){
        setErrStatus( 200);
      }
      else{
        setErrStatus(res.response.status);
        
      }
    
      if(errStatus === 404){
toast.error("User not found!!" , {
  position: "top-right",
});
      }else if(errStatus === 403){
        toast.error("Incorrect password!!" , {
          position: "top-right",
        });
      }
      else if(errStatus === 500){
        toast.error("Server error!!" , {
          position: "top-right",
        });
      }
      else{
        toast.success("Login successfull!!" , {
          position: "top-right",
        });
        setTimeout(()=>{
          navigate("/");
        } , 2000)
       
      }
    }
  };
  const navigate = useNavigate();
  const handleRedirect = () => {
    // console.log("ok");
    navigate("/register");
  };

  return (
    <div className="relative">
      <div className="absolute inset-x-1/3 top-20 ">
        <div className="flex flex-col justify-between h-96">
          <p className="">Sign In</p>
          <input
            type="text"
            placeholder="email"
            className=""
            name="name"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className=""
            name="genre"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="" onClick={handleClick}>
            Sign In
          </button>
          <button className="" onClick={handleRedirect}>
            New here? Click here to register.
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
