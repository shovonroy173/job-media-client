import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [gigs, setGigs] = useState([]);
  useEffect(() => {
    const getGigs = async () => {
      const res = await axios.get(
        "https://jobs-media-api.onrender.com/api/gig/getInspiringGigs"
      );
      setGigs(res.data);
    };
    getGigs();
  }, []);
  // console.log(gigs);
  const navigate = useNavigate();
  return (
    <div className="px-14 py-20">
      <p className="text-4xl font-semibold mb-10 flex justify-between">
        <p>Inspiring work made on Fiverr</p>
        <p className="text-xl text-primary">
          See more
          <ChevronRightIcon />
        </p>
      </p>
      {gigs.length > 0 ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          partialVisible={false}
        >
          {gigs &&
            gigs.map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center shadow-box-shadow w-[300px]  h-[320px] rounded-md  mx-6 my-6"
                  key={index}
                  onClick={() => navigate(`/gig/${item.category}/${item._id}`)}
                >
                  <img
                    src={item?.urls[0]}
                    alt=""
                    className="w-full h-[300px] rounded-t-md object-cover overflow-hidden"
                  />
                  <div className="flex bg-white py-2">
                    <img
                      src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
                      alt=""
                      className="w-10 h-10 object-cover mr-5"
                    />
                    <div>
                      <p className="font-extrabold">{item?.title}</p>
                      <p className="text-tertiary font-bold">
                        by {item?.author?.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </Carousel>
      ) : (
        <div className="flex flex-col justify-center w-[900px] h-[200px] bg-[url('/public/nodata.svg')] bg-no-repeat bg-center bg-contain">
          <div className="bg-extreamLightGray/40 text-center px-8 py-6 rounded-lg space-y-6 text-xl text-gray font-bold">
            No Gigs Posted Till Now!!
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
