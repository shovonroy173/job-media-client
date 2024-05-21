import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
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
  const navigate = useNavigate();
  const [blogs , setBlogs] = useState([]);
  useEffect(()=>{
    const getBlogs = async()=>{
      try {
        const res = await axios.get("https://jobs-media-api.onrender.com/api/blog/getBlogs");
        console.log(res.data);
        setBlogs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBlogs();
   
  } , []);
  console.log(blogs);
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
        {blogs.map((item , index)=>(
          <div className="flex flex-col items-start rounded-md  mx-6 my-6 w-[400px] " onClick={()=>(navigate(`/guide/${item._id}`))} key={index}>
          <img
            src={item?.urls[0]}
            alt=""
            className=" h-[300px] rounded-t-md"
          />
          <div className="bg-white py-2 text-xl font-bold ">
          {item.title}

          </div>
        </div>
        ))}
      
        {/* <div className="flex flex-col items-start rounded-md  mx-6 my-6 w-[400px] " onClick={()=>(navigate("/guide/ecommerce"))}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg"
            alt=""
            className=" h-[300px] rounded-t-md"
          />
          <div className="bg-white py-2 text-xl font-bold ">
          E-commerce buisness Ideas

          </div>
        </div>
        <div className="flex flex-col items-start rounded-md  mx-6 my-6 w-[400px] " onClick={()=>(navigate("/guide/ai"))}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/309ac0d5d01de83b832e421b316352a8-1690708285578/05%20-%20Article%20Cover.jpg"
            alt=""
            className=" h-[300px] rounded-t-md"
          />
          <div className="bg-white py-2 text-xl font-bold ">
          Grow your buisness with AI

          </div>
        </div>
        <div className="flex flex-col items-start rounded-md  mx-6 my-6 w-[400px] " onClick={()=>(navigate("/guide/website"))}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/8b1dcc55f5c8582b04aee0b995ae5327-1683590934905/1682363178357-Howtobuildawebsitefromscratch.jpg"
            alt=""
            className=" h-[300px] rounded-t-md"
          />
          <div className="bg-white py-2 text-xl font-bold ">
          Build a website from scratch

          </div>
        </div>
        <div className="flex flex-col items-start rounded-md  mx-6 my-6 w-[400px] " onClick={()=>(navigate("/guide/logo"))}>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/10f680cb84a2f3ef4473ecfdede3a1ba-1593438129320/business%20logo%20design-fiverr%20guide.jpg"
            alt=""
            className=" h-[300px] rounded-t-md"
          />
          <div className="bg-white py-2 text-xl font-bold ">
          Create a logo for your buisness

          </div>
        </div> */}
        
        
    
      </Carousel>
    </div>
  );
};

export default Guides;
