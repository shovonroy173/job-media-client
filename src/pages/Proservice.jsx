import { useState } from "react";
import Navbar from "../components/Navbar";
import CloseIcon from '@mui/icons-material/Close';
// import AddIcon from '@mui/icons-material/Add';

const Proservice = () => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState("");
  console.log(services);
  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };
  const handleRemoveService = (itemToRemove) => {
    const updatedItems = services.filter(item => item !== itemToRemove);
    setServices(updatedItems);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-36   bg-[url('/public/service.svg')] bg-no-repeat bg-center bg-contain">
        <div className="bg-extreamLightGray/40 w-[600px] px-8 py-6 rounded-lg space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-xl font-semibold">
              Name
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="bg-extreamLightGray rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-xl font-semibold">
              Email
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="bg-extreamLightGray rounded-md"
            />
          </div>
          <div className="flex  space-y-1">
            <label htmlFor="servicePro" className="text-xl font-semibold">
              Want to become a Professional Service Provider?*
            </label>
           
             <input type="checkbox" id="servicePro" name="servicePro" />
          </div>
          <div className="flex flex-col space-y-1">

          
            <label htmlFor="" className="text-xl font-semibold">
              BasePrice
            </label>
            <textarea
              type="text"
              name=""
              id=""
              className="bg-extreamLightGray rounded-md"
            />
           
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-xl font-semibold">
              Services
            </label>
            {services.length > 0 &&
            <div className="flex flex-wrap gap-3 pb-2">
              {services.map((item, index) => <p key={index} className="flex items-center gap-1 bg-white py-1 px-3 rounded-2xl font-bold">
                {item}
                <CloseIcon  className="bg-extreamLightGray rounded-full p-1" onClick={() => handleRemoveService(item)}/>
                </p>)}

            </div>
            }

            <textarea
              type="text"
              name=""
              id=""
              className="bg-extreamLightGray rounded-md"
              onChange={(e) => setService(e.target.value)}
            />
            <button
              className="bg-lightGreen w-24 h-10 px-2 py-2 rounded-md font-medium flex justify-center items-center text-white gap-1"
              onClick={() => handleAddService(service)}
            >
              Add
              {/* <AddIcon/> */}
            </button>
          </div>

          <div
            className="bg-green hover:bg-lightGreen text-white text-xl text-center font-bold w-full  h-14 py-3 rounded-md"
            // onClick={handleClick}
          >
            Upload & Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proservice;
