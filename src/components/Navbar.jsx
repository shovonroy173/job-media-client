import SearchIcon from "@mui/icons-material/Search";
// import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Avatar from '@mui/material/Avatar';
// import DashboardIcon from '@mui/icons-material/Dashboard';
import logo from "../assets/logo.png";
const explore = [
  { data1: "Discover", data2: "Inspiring projects made on Fiverr" , url:"/categories/graphics" },
  { data1: "Community", data2: "Connect with Fiverr's team and community" , url:"/hire"},
  { data1: "Guides", data2: "In-depth guides covering buisness topics" , url:"/guide/type"},
  { data1: "Podcast", data2: "Inside tips from top buisness minds " , url:"https://podcasts.google.com/"},
  { data1: "Learn", data2: "Professional online courses , led by experts" , url:"/categories/digitalamarketing" },
  { data1: "Blog", data2: "News , information and community stories" , url:"https://medium.com/" },
  { data1: "Logo Maker", data2: "Create your logo instantly" , url:"https://www.freelogodesign.org/"  },
  { data1: "Fiverr Workspace", data2: "One place to manage your buisness" , url:"/workspace" },
];
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/authRedux";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../assets/looking.png";
import img2 from "../assets/management-service.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(true);
  // const [modal, setModal] = useState(false);
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  // console.log(pathname);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.addEventListener("scroll", isActive);
    };
  }, []);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [gigs, setTGigs] = useState([]);
  const searchedGigs = async () => {
    try {
      const res = await axios.get(
        `https://jobs-media-api.onrender.com/api/gig/getSearchGig/gigs?q=${text}`
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
  // console.log("LINE AT 70" , user);
  return (
    <>
      <div
        className={
          active || pathname !== "/"
            ? `flex items-center justify-between h-20  fixed w-full bg-white border-b-2 border-tertiary z-50 px-14`
            : `flex items-center justify-between h-20  w-full px-14 text-lg bg-green text-white`
        }
      >
        <div
          className="cursor-default"
          onClick={() => {
            navigate("/");
          }}
          onKeyDown={() => {
            navigate("/");
          }}
        >
          <img
            src={logo}
            alt=""
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
        {active && (
          <>
            <div className={`flex items-center h-10 `}>
              <input
                type="text"
                placeholder="find services "
                className="w-[350px] h-full border border-lightGray px-1 outline-none"
                onChange={(e) => setText(e.target.value)}
              />
              <div className="bg-black text-white h-full text-center w-8">
                <SearchIcon className="mt-2" onClick={handleClick} />
              </div>
            </div>
          </>
        )}

        <div
          className={
            user.currentUser
              ? `flex items-center justify-evenly w-1/2 relative cursor-default`
              : `flex items-center justify-evenly w-1/2 relative cursor-not-allowed`
          }
        >
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
            <div className="absolute top-14 left-0.5  w-[450px] flex flex-col justify-evenly p-5 space-y-4 rounded-[7px] shadow-box-shadow bg-white z-30 text-black">
              <div className=" flex items-center justify-evenly  border border-extreamLightGray rounded-[10px] px-1 py-2" onClick={()=> navigate("/hire")}>
                <img src={img1} alt="" className="w-16 h-16" />
                <div className="w-2/3">
                  <p className="font-semibold">I&apos;m looking to hire</p>
                  <p className="text-sm text-lightGray">
                    I would like to work with Pro freelancers and agencies while
                    using buisness tool.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-evenly  border border-extreamLightGray rounded-[10px] px-1 py-2" onClick={()=> navigate("/proservice")}>
                <img src={img2} alt="" className="w-16 h-16" />

                <div className="w-2/3">
                  <p className="font-semibold">I want to offer pro service</p>
                  <p className="text-sm text-lightGray">
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
            <div className="absolute top-14  h-content w-[400px] flex flex-col  p-4 rounded-[7px] shadow-box-shadow bg-white z-20 text-black">
              {explore.map((item, index) => (
                <>
                <Link to={item.url}>
                <div className=" flex items-center mb-2 " key={index} >
                    <div className="">
                      <p className="text-xl font-semibold text-gray">
                        {item.data1}
                      </p>
                      <p className="text-nowrap text-sm text-lightGray">
                        {item.data2}
                      </p>
                    </div>
                  </div>
                </Link>
                  
                </>
              ))}
            </div>
          )}
          {/* <p onClick={() => setModal(!modal)}>
            <LanguageIcon /> Language
          </p>
          {modal && (
            <div className="absolute top-64 -left-28 w-3/5 h-56 shadow-box-shadow2 bg-white p-2 flex flex-col justify-evenly text-xl font-medium z-20 text-black">
              <p className="hover:bg-secondary p-2 cursor-pointer">English</p>
              <p className="hover:bg-secondary p-2 cursor-pointer">French</p>
              <p className="hover:bg-secondary p-2 cursor-pointer">Italian</p>
              <p className="hover:bg-secondary p-2 cursor-pointer">Hindi</p>
            </div>
          )} */}

          {user.currentUser ? (
            <>
            {/* <Avatar sx={{ bgcolor: "green" }}>{user.currentUser.name[0]}</Avatar> */}
            <p className="w-50 h-50 rounded-full bg-green px-2 py-.9 text-white font-extrabold">{user.currentUser.name[0]}</p>
              <LogoutIcon
                onClick={() => {
                  dispatch(logOut());
                }}
              />{" "}
              <AccountCircleIcon
                onClick={() => {
                  navigate("/user");
                }}
              />
              {/* <DashboardIcon/> */}
            </>
          ) : (
            <>
              <p>Become a seller</p>
              <NavLink to="/login">Sign in</NavLink>
              <p className="py-2 px-4 rounded-md border">Join</p>
            </>
          )}
        </div>
      </div>

      <div
        className={
          active || pathname !== "/"
            ? `flex items-center justify-between h-10 px-14 fixed w-full bg-white mt-20 border-b-2 border-tertiary z-10`
            : `hidden`
        }
      >
        <p
          onClick={() => {
            navigate(`/categories/Graphics & Design`);
          }}
          className="cursor-default"
        >
          Graphics & Design{" "}
        </p>
        <p
          onClick={() => {
            navigate(`/categories/Programming & Tech`);
          }}
          className="cursor-default"
        >
          Programming & Tech
        </p>
        <p
          onClick={() => {
            navigate(`/categories/Digital Marketing`);
          }}
          className="cursor-default"
        >
          Digital Marketing
        </p>
        <p
          onClick={() => {
            navigate(`/categories/Video & Animation`);
          }}
          className="cursor-default"
        >
          Video & Animation
        </p>
        <p
          onClick={() => {
            navigate(`/categories/Writing & Translation`);
          }}
          className="cursor-default"
        >
          Writing & Translation
        </p>
        <p
          onClick={() => {
            navigate(`/categories/Music & Audio`);
          }}
          className="cursor-default"
        >
          Music & Audio
        </p>
        <p
          onClick={() => {
            navigate(`/categories/Business`);
          }}
          className="cursor-default"
        >
          Business
        </p>
        <p
          onClick={() => {
            navigate(`/categories/Consulting`);
          }}
          className="cursor-default"
        >
          Consulting
        </p>
        <p
          onClick={() => {
            navigate(`/categories/Data`);
          }}
          className="cursor-default"
        >
          Data
        </p>
        <p
          onClick={() => {
            navigate(`/categories/AI Services`);
          }}
          className="cursor-default"
        >
          AI Services
        </p>
      </div>
      <>
        {text && open3 && (
          <div
            className={
              active || pathname !== "/"
                ? `flex flex-col items-start justify-between py-2 px-4 fixed w-[300px] bg-searchedBack mt-[135px] z-10`
                : `hidden`
            }
          >
            {/* {" "}
            onClick=
            {() => {
              navigate(`/categories/Programming & Tech`);
            }} */}
            {text &&
              open3 &&
              gigs.map((item, index) => {
                return (
                  <div className="flex space-x-2 text-white cursor-default"  key={index}>
                      <div className="flex space-x-2" onClick={
                    () =>{navigate(`/gig/${item.category}/${item._id}` )}}>
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
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;
