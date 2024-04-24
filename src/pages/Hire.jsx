import { useState } from "react";
import Navbar from "../components/Navbar";

const Hire = () => {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <Navbar />
      <div className="pt-36 ">
        <div className="relative ">
          <div
            className="bg-green shadow-2xl w-[320px] flex flex-col  items-center py-5 rounded-lg gap-2 z-50"
            
          >
            <img
              src="/public/logo.png"
              alt="umg"
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-lg font-semibold text-almostWhite text-center">
              <p>user 1</p>
              <p>user1@gmail.com</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-extreamLightGreen text-gray font-bold rounded-2xl py-1 px-10" onClick={() => setOpen(!open)}>Details</button>

              <button className="bg-almostWhite text-lightGreen font-bold rounded-2xl py-1 px-10">Hire</button>
            </div>
          </div>

          <div
            className={
              open
                ? `absolute top-0 translate-x-[320px] transition -z-20 bg-almostWhite h-[250px] rounded-r-xl px-4 py-2`
                : `absolute top-0  transition -z-20 bg-almostWhite h-[250px] rounded-r-xl px-4 py-2`
            }
          >
            
            <p className="text-lightGray  font-semibold">Country: <span className="text-gray font-extrabold">USA</span> </p>
            <p className="text-lightGray font-semibold">Language: <span className="text-gray font-extrabold">English</span> </p>
            <p className="text-lightGray font-semibold">BasePrice: <span className="text-gray font-extrabold">1234</span> </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hire;
