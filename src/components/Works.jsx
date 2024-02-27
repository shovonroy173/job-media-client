import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Works = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-14 py-20">
      <p className="text-4xl font-semibold mb-10 flex justify-between">
        <p>Inspiring work made on Fiverr</p>
        <p className="text-xl text-primary">
          See more
          <ChevronRightIcon />
        </p>
      </p>

      <Carousel responsive={responsive} infinite={true} partialVisible={false}>
        <div className="flex flex-col items-center shadow-box-shadow w-[300px]  h-[320px] rounded-md  mx-6 my-6">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg"
            alt=""
            className=" w-[300px]  rounded-t-md"
          />
          <div className="flex bg-white py-2">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
              alt=""
              className="w-10 h-10 object-cover mr-5"
            />
            <div>
              <p className="font-extrabold">Flyer Design</p>
              <p className="text-tertiary font-bold">by spickex</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center shadow-box-shadow w-[300px]  h-[320px] rounded-md  mx-6 my-6">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg"
            alt=""
            className=" w-[300px] rounded-t-md"
          />
          <div className="flex bg-white py-2">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
              alt=""
              className="w-10 h-10 object-cover mr-5"
            />
            <div>
              <p className="font-extrabold">Flyer Design</p>
              <p className="text-tertiary font-bold">by spickex</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center shadow-box-shadow w-[300px]  h-[320px] rounded-md  mx-6 my-6">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg"
            alt=""
            className=" w-[300px] rounded-t-md"
          />
          <div className="flex bg-white py-2">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
              alt=""
              className="w-10 h-10 object-cover mr-5"
            />
            <div>
              <p className="font-extrabold">Flyer Design</p>
              <p className="text-tertiary font-bold">by spickex</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center shadow-box-shadow w-[300px]  h-[320px] rounded-md  mx-6 my-6">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg"
            alt=""
            className=" w-[300px] rounded-t-md"
          />
          <div className="flex bg-white py-2">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
              alt=""
              className="w-10 h-10 object-cover mr-5"
            />
            <div>
              <p className="font-extrabold">Flyer Design</p>
              <p className="text-tertiary font-bold">by spickex</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center shadow-box-shadow w-[300px]  h-[320px] rounded-md  mx-6 my-6">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg"
            alt=""
            className=" w-[300px] rounded-t-md"
          />
          <div className="flex bg-white py-2">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
              alt=""
              className="w-10 h-10 object-cover mr-5"
            />
            <div>
              <p className="font-extrabold">Flyer Design</p>
              <p className="text-tertiary font-bold">by spickex</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center shadow-box-shadow w-[300px]  h-[320px] rounded-md  mx-6 my-6">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg"
            alt=""
            className=" w-[300px] rounded-t-md"
          />
          <div className="flex bg-white py-2">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
              alt=""
              className="w-10 h-10 object-cover mr-5"
            />
            <div>
              <p className="font-extrabold">Flyer Design</p>
              <p className="text-tertiary font-bold">by spickex</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center shadow-box-shadow w-[300px]  h-[320px] rounded-md  mx-6 my-6">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg"
            alt=""
            className=" w-[300px] rounded-t-md"
          />
          <div className="flex bg-white py-2">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
              alt=""
              className="w-10 h-10 object-cover mr-5"
            />
            <div>
              <p className="font-extrabold">Flyer Design</p>
              <p className="text-tertiary font-bold">by spickex</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Works;
