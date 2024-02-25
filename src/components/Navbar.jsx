import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-around h-20 bg-pink ">
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
            }}
            className={open && `rotate-180`}
          />
        </p>
        {open && (
          <div className="absolute top-14 left-0.5 h-72 w-1/2 flex flex-col justify-evenly px-4 rounded-[7px] shadow-box-shadow">
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
          Explore <KeyboardArrowDownIcon />
        </p>
        <p>
          <LanguageIcon /> Language
        </p>
        <p>Become a seller</p>
        <p>Sign in</p>
        <p>Join</p>
      </div>
    </div>
  );
};

export default Navbar;
