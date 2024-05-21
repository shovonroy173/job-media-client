import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls.js";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
      // console.log("LINE AT 34", res);
      if (res.email) {
        setErrStatus(200);
      } else {
        setErrStatus(res.response.status);
      }
// console.log(errStatus);
      if (errStatus === 404) {
        toast.error("User not found!!", {
          position: "top-right",
        });
      } else if (errStatus === 403) {
        toast.error("Incorrect password!!", {
          position: "top-right",
        });
      } else if (errStatus === 500) {
        toast.error("Server error!!", {
          position: "top-right",
        });
      } else {
        toast.success("Login successfull!!", {
          position: "top-right",
        });
        setTimeout(() => {
          (errStatus === 200) && navigate("/");
        }, 2000);
      }
    }
  };
  const navigate = useNavigate();
  const handleRedirect = () => {
    // console.log("ok");
    navigate("/register");
  };

  return (
    <div className="relative bg-almostWhite h-screen ">
      <div className="flex justify-center py-44">
        <div className="flex justify-between items-center bg-white rounded-xl w-[900px] h-[450px]">
          <div className="flex flex-col justify-between w-[600px] h-96 px-10 py-5">
          <img src="/public/logo.png" alt="" className="w-14 h-14 object-cover rounded-full" />
            <p className="text-green text-2xl font-bold ">Sign In</p>
            <input
              type="text"
              placeholder="email"
              className="outline-none border-b-[1px] border-lightGray"
              name="name"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="outline-none border-b-[1px] border-lightGray"
              name="genre"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="bg-green text-white  text-xl rounded-md font-semibold py-3 " onClick={handleClick}>

              Sign In
            </button>
            <button className="hover:underline text-gray font-semibold" onClick={handleRedirect}>
              New here? Click here to register.
            </button>
          </div>
          <div className="h-full">
            <img src="/public/login.jpg" className="h-full rounded-r-xl" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
