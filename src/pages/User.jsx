import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const User = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState();
  return (
    <>
      <Navbar />
      <div className="flex pt-36 px-14 ">
        <div className="flex flex-col mr-5 w-1/4 ">
          <button
            className={
              open1
                ? `bg-extreamLightGray w-18 h-10 px-4 py-2 rounded-md text-green font-bold text-xl text-center border-b-[4px] border-lightGray`
                : ` w-18 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl`
            }
            onClick={() => {
              setOpen1(true);
              setOpen2(false);
            }}
          >
            Update User
          </button>
          <button
            className={
              open2
                ? `bg-extreamLightGray w-18 h-10 px-4 py-2 rounded-md text-green font-bold text-xl text-center border-b-[4px] border-lightGray`
                : ` w-18 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl`
            }
            onClick={() => {
              setOpen2(true);
              setOpen1(false);
            }}
          >
            Gig Upload
          </button>
        </div>
        <div className="flex flex-col w-3/4 ">
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-2xl font-semibold">
              Name
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="bg-extreamLightGray"
            />
            <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
              Update
            </button>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-2xl font-semibold">
              Email
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="bg-extreamLightGray"
            />
            <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
              Update
            </button>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-2xl font-semibold">
              Password
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="bg-extreamLightGray"
            />
            <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
              Update
            </button>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-2xl font-semibold">
              Image
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="bg-extreamLightGray"
            />
            <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
              Update
            </button>
          </div>

          <label htmlFor="" className="text-2xl font-semibold">
            Country
          </label>

          <label htmlFor="" className="text-2xl font-semibold">
            Language
          </label>

          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-2xl font-semibold">
              Description
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="bg-extreamLightGray"
            />
            <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
              Update
            </button>
          </div>
          <label htmlFor="">Response Time</label>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-2xl font-semibold">
              Specialization
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="bg-extreamLightGray"
            />
            <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
              Update
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default User;
