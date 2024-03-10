import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Guides = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-14 py-20">
      <p className="text-4xl font-semibold mb-10 flex justify-between">
        <p>Blogs</p>
        <p className="text-xl text-primary">
          See more
          <ChevronRightIcon />
        </p>
      </p>

      <Carousel responsive={responsive} infinite={true} partialVisible={false}>
        <div className="flex flex-col items-start rounded-md  mx-6 my-6 w-[400px] ">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg"
            alt=""
            className=" h-[300px] rounded-t-md"
          />
          <div className="bg-white py-2 text-xl font-bold ">
          Start a side business

          </div>
        </div>
        <div className="flex flex-col items-start rounded-md  mx-6 my-6 w-[400px] ">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg"
            alt=""
            className=" h-[300px] rounded-t-md"
          />
          <div className="bg-white py-2 text-xl font-bold ">
          Start a side business

          </div>
        </div>
        <div className="flex flex-col items-start rounded-md  mx-6 my-6 w-[400px] ">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg"
            alt=""
            className=" h-[300px] rounded-t-md"
          />
          <div className="bg-white py-2 text-xl font-bold ">
          Start a side business

          </div>
        </div>
        <div className="flex flex-col items-start rounded-md  mx-6 my-6 w-[400px] ">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg"
            alt=""
            className=" h-[300px] rounded-t-md"
          />
          <div className="bg-white py-2 text-xl font-bold ">
          Start a side business

          </div>
        </div>
        
        
    
      </Carousel>
    </div>
  );
};

export default Guides;
