import { useState } from "react";
// import {login} from "log-func";
import {useDispatch} from "react-redux";
import { register } from "../redux/apiCalls.js";
import {useNavigate} from "react-router-dom";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import app from "../firebase.js";

const Register = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);
  const dispatch = useDispatch();
  const handleClick = ()=>{
    // console.log("ok");
    register(dispatch , {name , email , password , isAdmin} );
  };
  const navigate = useNavigate();
  const handleRedirect = ()=>{
    // console.log("ok");
    navigate("/login")
  }
  return (
    <div className="relative h-screen w-full bg-[url('/public/reg.jpg')] bg-no-repeat bg-center bg-cover">
      
      <div className="absolute inset-x-1/3 top-20 bg-white/60 shadow-box-shadow3 rounded-xl px-5 py-10">
        <div className="flex flex-col justify-between h-96">
          <img src="/public/logo.png" alt="" className="w-14 h-14 object-cover rounded-full" />
          <p className="text-green text-2xl font-bold ">Sign Up</p>
          <input
            type="text"
            placeholder="Name.."
            className="bg-white/10  outline-none border-b-[1px] border-lightGray text-gray font-semibold text-md py-1"
            name="name"
            onChange={((e)=>(setName(e.target.value)))}
          />
          <input
            type="text"
            placeholder="Email.."
            className="bg-white/10  outline-none border-b-[1px] border-lightGray text-gray font-semibold text-md py-1"
            name="name"
            onChange={((e)=>(setEmail(e.target.value)))}
          />
          <input
            type="password"
            placeholder="Password.."
            className="bg-white/10  outline-none border-b-[1px] border-lightGray text-gray font-semibold text-md py-1"
            name="genre"
            onChange={((e)=>(setPassword(e.target.value)))}
          />

        <button className="bg-green text-white  text-xl rounded-md font-semibold py-3 " onClick={handleClick} >
          Sign Up
        </button>
        <button className="hover:underline text-gray font-semibold" onClick={handleRedirect} >
          Already registerd? Click here to login.
        </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
