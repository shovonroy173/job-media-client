import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import video from "../assets/video.mp4";

const Reviews = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [reviews, setReviews] = useState();
  useEffect(() => {
    const getReviews = async () => {
      const res = await axios.get(
        "https://jobs-media-api.onrender.com/api/fiverReview/getReviews"
      );
      setReviews(res.data);
    };
    getReviews();
  }, []);
  // console.log(reviews);
  return (
    <div className=" px-14 py-20 bg-pink">
      <Carousel responsive={responsive} infinite={true} keyBoardControl={true}>
        {reviews &&
          reviews.map((item, index) => (
            <div className="flex" key={index}>
              <video
                src={item?.urls[0]}
                type="video/*"
                controls
                autoPlay
                className="rounded-lg h-[300px] mr-20"
              />
              {/* <ReactPlayer url={"https://www.youtube.com/watch?v=0SFXh0DEAbQ"} controls loop={true} className="rounded-lg h-[300px] mr-20" autoPlay playing /> */}
              <div className="w-2/3">
                <div className="flex items-center mb-8">
                  <p className="text-2xl text-tertiary font-bold">
                    {item?.userId?.name} | {item?.userId?.country} | 
                  </p>

                  <img
                    src="/public/reviews.svg"
                    alt=""
                    className="ml-5 h-10"
                  />
                </div>
                <p className="text-4xl font-semibold text-lightGreen w-5/6">
                  &quot;{item?.review}&quot;
                </p>
              </div>
            </div>
          ))}

        <div className="flex  justify-between">
          <video
            src={video}
            controls
            autoPlay
            className="rounded-lg h-[300px] mr-20"
          ></video>
          <div className="w-2/3">
            <div className="flex items-center mb-8">
              <p className="text-2xl text-tertiary font-bold">
                Caillin Tormey , Chief Commercial Officer
              </p>

              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png"
                alt=""
                className="h-10"
              />
            </div>
            <p className="text-4xl font-semibold text-lightGreen w-5/6">
              &quot;We&apos;ve used Fiverr for Shopify web development, graphic
              design, and backend web development. Working with Fiverr makes my
              job a little easier every day.&quot;
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Reviews;
