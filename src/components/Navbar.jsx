import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const explore = [
  { data1: "Discover", data2: "Inspiring projects made on Fiverr" },
  { data1: "Community", data2: "Connect with Fiverr's team and community" },
  { data1: "Guides", data2: "In-depth guides covering buisness topics" },
  { data1: "Podcast", data2: "Inside tips from top buisness minds " },
  { data1: "Learn", data2: "Professional online courses , led by experts" },
  { data1: "Blog", data2: "News , information and community stories" },
  { data1: "Logo Maker", data2: "Create your logo instantly" },
  { data1: "Fiverr Workspace", data2: "One place to manage your buisness" },
];
import { useEffect, useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(false);
  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }
  useEffect(()=>{
    window.addEventListener("scroll" , isActive);
    return ()=>{
    window.addEventListener("scroll" , isActive);
    };
  } , []);
  return (
    <>
    <div className={active ? `flex items-center justify-around h-20 px-8 fixed w-full bg-white border-b-2 border-tertiary z-10` : `flex items-center justify-around h-20 px-8 w-full`} >
      <div>
        <p>
          jobs <span>.</span>
        </p>
      </div>
      <div className="flex items-center  ">
        <input type="text" placeholder="find services" className="w-[350px]" />
        <div>
          <SearchIcon />
        </div>
      </div>
      <div className="flex items-center justify-evenly w-1/2 relative">
        <p>
          Fiverr Pro
          <KeyboardArrowDownIcon
            onClick={() => {
              setOpen(!open);
              setOpen2(false);
            }}
            className={open && `rotate-180`}
          />
        </p>
        {open && (
          <div className="absolute top-14 left-0.5 h-72 w-1/2 flex flex-col justify-evenly px-4 rounded-[7px] shadow-box-shadow bg-white z-10">
            <div className=" flex items-center justify-evenly  border border-gray-300 rounded-[10px]">
              <div>
                <RemoveRedEyeIcon
                  sx={{
                    fontSize: 50,
                  }}
                />
              </div>
              <div className="w-2/3">
                <p>I am looking to hire</p>
                <p>
                  I would like to work with Pro freelancers and agencies while
                  using buisness tool.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-evenly  border border-gray-300 rounded-[10px]">
              <div>
                <RemoveRedEyeIcon
                  sx={{
                    fontSize: 50,
                  }}
                />
              </div>
              <div className="w-2/3">
                <p>I am looking to hire</p>
                <p>
                  I would like to work with Pro freelancers and agencies while
                  using buisness tool.
                </p>
              </div>
            </div>
          </div>
        )}

        <p>
          Explore{" "}
          <KeyboardArrowDownIcon
            onClick={() => {
              setOpen(false);
              setOpen2(!open2);
            }}
            className={open2 && `rotate-180`}
          />
        </p>
        {open2 && (
          <div className="absolute top-14  h-[500px] w-[400px] flex flex-col  p-4 rounded-[7px] shadow-box-shadow bg-white z-10">
            {explore.map((item , index)=>(
              <>
              <div className=" flex items-center mb-2 " key={index}>
              <div className="w-2/3">
                <p className="text-xl font-semibold">{item.data1}</p>
                <p className="text-nowrap text-tertiary font-medium">{item.data2}</p>
              </div>
            </div>
            </>
            ))}
          </div>
        )}
        <p onClick={() => setModal(!modal)} className="hover:cursor-pointer">
          <LanguageIcon /> Language
        </p>
        {modal && (
          <div className="absolute top-64 -left-28 w-3/5 h-56 shadow-box-shadow2 bg-white p-2 flex flex-col justify-evenly text-xl font-medium ">
            <p className="hover:bg-secondary p-2 cursor-pointer">English</p>
            <p className="hover:bg-secondary p-2 cursor-pointer">French</p>
            <p className="hover:bg-secondary p-2 cursor-pointer">Italian</p>
            <p className="hover:bg-secondary p-2 cursor-pointer">Hindi</p>
          </div>
        )}

        <p>Become a seller</p>
        <p>Sign in</p>
        <p className="py-2 px-4 rounded-md border">Join</p>
      </div>
    </div>
    <div className={active ? `flex items-center justify-around h-10 px-8 fixed w-full bg-white mt-20 border-b-2 border-tertiary z-10` : `hidden`}>
      <p>Graphics & Design </p>
      <p>Programming & Tech</p>
      <p>Digital Marketing</p>
      <p>Video & Animation
</p>
      <p>Writing & Translation</p>
      <p>Music & Audio</p>
      <p>Business</p>
      <p>Consulting</p>
      <p>Data</p>
      <p>AI Servies</p>
    </div>
    </>
  );
};

export default Navbar;
