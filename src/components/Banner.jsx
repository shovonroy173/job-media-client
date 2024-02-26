import Brands from "./Brands";
import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
const Banner = () => {
  return (
    <>
    <div className="bg-pink ">
      <Navbar />
      <div className="flex items-center justify-between px-14 relative">
        <div className="flex flex-col w-1/2 ">
          <div className="text-5xl font-extrabold">
            <p>Find the right freelance</p>
            <p>service, right away</p>
          </div>
          <div className="w-[700px] h-14 flex items-center rounded-lg mt-5 mb-5">
            <input
              type="text"
              placeholder="Search for any service..."
              className="w-[640px]  h-full outline-none p-4 rounded-l-md"
            />
            <div className="bg-lightGreen h-full w-[60px] p-4 rounded-r-md">
              <SearchIcon />
            </div>
          </div>
          <div className="flex items-center justify-between text-md font-semibold">
            <p>Popular:</p>
            <p className="border-2 rounded-full px-1">Website Design</p>
            <p className="border-2 rounded-full px-1">Wordpress</p>
            <p className="border-2 rounded-full px-1">Logo Design</p>
            <p className="border-2 rounded-full px-1">AI Services</p>
          </div>
        </div>
        <div className="">
          <img
            src="https://img.freepik.com/premium-psd/businessman-isolated-transparent-background_879541-1167.jpg"
            alt=""
            className="h-[700px]"
          />
          <div className="absolute bottom-10 right-16 flex items-center border-2 border-white bg-background py-2 px-4 rounded-full">
            <img
              src="https://img.freepik.com/premium-psd/businessman-isolated-transparent-background_879541-1167.jpg"
              alt=""
              className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white mr-3 "
            />

            <div className="text-white">
              <div className="flex justify-between ">
                <p className="text-md font-bold">Scarlet </p>
                <p>5*</p>
              </div>
              <p className="text-lg font-bold">Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Brands/>
    </>
  );
};

export default Banner;
