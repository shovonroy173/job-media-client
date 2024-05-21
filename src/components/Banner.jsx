import Brands from "./Brands";
import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
import bg from "../assets/bg.png";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  // const user = useSelector((state) => state.user);
  const [text, setText] = useState("");
  const [gigs, setTGigs] = useState([]);
  const [open3, setOpen3] = useState(true);

  const searchedGigs = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/gig/getSearchGig/gigs?q=${text}`
      );
      setTGigs(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    text && searchedGigs();
  }, [text]);

  const handleClick = () => {
    searchedGigs();
  };
  const handleCancel = () => {
    setOpen3(false);
  };
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-between px-14 bg-green relative">
          <div className="flex flex-col w-1/2 ">
            <div className="text-5xl font-extrabold text-white">
              <p>Find the right freelance</p>
              <p>service, right away</p>
            </div>
            <div className="w-[700px] h-14 flex items-center rounded-lg mt-5 mb-5">
              <input
                type="text"
                placeholder="Search for any service..."
                className="w-[640px]  outline-none p-[7.5px] rounded-l-md"
                onChange={(e) => setText(e.target.value)}
              />
              <div className="bg-lightGreen text-center w-[60px] p-1.5 rounded-r-md text-white">
                <SearchIcon onClick={handleClick} />
              </div>
              {(text && open3 ) &&<div className="absolute bottom-14 flex flex-col items-start justify-between py-2 px-4  w-[300px] bg-searchedBack mt-[135px] z-10 shadow-box-shadow rounded-lg">
                {(text &&
                  open3 )&&
                  gigs.map((item, index) => {
                    return (
                      <div className="flex space-x-2 text-white cursor-default"  key={index} >
                        <div className="flex space-x-2" onClick={
                        () =>{navigate(`/gig/${item.category}/${item._id}` )}} >
                        <img
                          src={item?.urls[0]}
                          alt=""
                          className="h-10 w-10 object-cover rounded-lg mr-2"
                        />
                        <div>
                          <p>{item?.title}</p>
                          <p>Rating : {item?.rating} *</p>
                        </div>
                        </div>
                        <CloseIcon onClick={handleCancel} />
                      </div>
                    );
                  })}
              </div>}
            </div>
            <div className="flex items-center justify-between text-md font-semibold text-extreamLightGray">
              <p className="text-lightGray">Popular:</p>
              <p className="border-2 rounded-full px-2 cursor-default" onClick={
      () =>{navigate(`/categories/Programming & Tech` , {state:"Website Design"})}}>Website Design</p>
              <p className="border-2 rounded-full px-2 cursor-default" onClick={
      () =>{navigate(`/categories/Programming & Tech` , {state:"Wordpress"})}}>Wordpress</p>
              <p className="border-2 rounded-full px-2 cursor-default" onClick={
      () =>{navigate(`/categories/Graphics & Design ` , {state:"Logo Design"})}}>Logo Design</p>
              <p className="border-2 rounded-full px-2 cursor-default" onClick={
      () =>{navigate(`/categories/Programming & Tech` , {state:"AI Services"})}}>AI Services</p>
            </div>
          </div>

          <div className="">
            <img src={bg} alt="" className=" " />
            <div className="absolute bottom-1 right-28 flex items-center border-2 border-white bg-background py-1 px-2 rounded-full ">
              <img
                src={bg}
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white mr-3 "
              />

              <div className="text-white">
                <div className="flex justify-between ">
                  <p className="text-sm font-bold">Kane Williamson</p>
                  <p>5*</p>
                </div>
                <p className="text-md font-bold">Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Brands />
      {/* <ToastContainer /> */}
    </>
  );
};

export default Banner;
