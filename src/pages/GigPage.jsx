import Navbar from "../components/Navbar";
import InfoIcon from "@mui/icons-material/Info";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import CheckIcon from "@mui/icons-material/Check";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import HomeIcon from "@mui/icons-material/Home";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useRef, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";
import axios from "axios";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { loadStripe } from "@stripe/stripe-js";
const KEY =
  "pk_test_51N55v0SG4487ZVYHjPu1nZv0uWzyK13KJsIB6oxLWsfcYbuG85TG2sD31jmnAWLbE8l5NKiTXC7O5mrW1LE0YGxh00XlH0rs0X";

const GigPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const packagesRef = useRef();

  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const [name, setName] = useState("Basic");

  const location = useLocation();

  const id = location.pathname.split("/")[3];
  const [gig, setGig] = useState({});
  const [reviewerValue, setReviewerValue] = useState([]);

  const prices = gig?.basePrice;
  const [price, setPrice] = useState(prices && gig?.basePrice[0]);
  // console.log(prices&&gig?.basePrice[0]);

  useEffect(() => {
    const getGig = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/gig/getGigById/${id}`
        );
        const res2 = await axios.get(
          `http://localhost:5000/api/review/getReviews/${id}`
        );
        // console.log("LINE AT 59" , res?.data);
        setGig(res.data);
        setReviewerValue(res2.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGig();
  }, [id]);

  // console.log("Gig: ", gig);
 
  const user = useSelector((state) => state.user);
  const userId = user.currentUser._id;
  const userName = user.currentUser.name;
  const userCountry = user.currentUser.Country;
  const userLevel = user.currentUser.level;
const paymentDetails = {price,name}
  const handlePayment = async () => {
    const stripe = await loadStripe(KEY);
    const res = await axios.post("http://localhost:5000/api/checkout/payment", {
      paymentDetails,
      id,   
      userId
    });

    const result = stripe.redirectToCheckout({
      sessionId: res.data.id,
    });

    if ((await result).error) {
      console.log((await result).error);
    }
  };
  const pathType = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const urls = gig?.urls;

  // console.log(prices);

  const [review, setReview] = useState(null);
  const [text, setText] = useState("");

  const handleClick = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/review", {
      id,
      userId,
      text,
      userName , 
      userCountry , 
      userLevel
    });
    // console.log(res.data);
    setReview(res.data);
    // window.location.reload();
    
  } catch (error) {
    console.log(error);
  }
    

  };
  // console.log(review);
  // const reviews = gig?.reviews;

  // useEffect(() => {
  //   const getReviews = async () => {
  //     try {
        
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getReviews();
  // }, [id]);

  // console.log('LINE AT 151' , user?.currentUser?.paidGigs);
  const [paymentFlag , setPaymentFlag] = useState(true);
  useEffect(()=>{
    const setFlag = ()=>{
      user?.currentUser?.paidGigs.map((item)=>{
        {(item === id)&&setPaymentFlag(false)}
        
      });
      
    };
    setFlag();
  } , [id , user?.currentUser?.paidGigs]);
  
  // console.log(paymentFlag);

  return (
    <>
      <Navbar />
      <div className="pt-36 px-14 w-full  items-start justify-between space-y-10  min-[1280px]:flex">
        <div className="w-[700px] space-y-10 ">
          <p className="text-gray">
            <NavLink to="/">
              <HomeIcon />
            </NavLink>
            /
            <span
              onClick={() => {
                navigate(`/categories/${pathType}`, { state: gig.title });
              }}
            >
              Graphics & Design
            </span>
            / {gig.title}
          </p>
          <p className="text-4xl font-bold text-gray">{gig.description}</p>
          <div className="flex">
            <img
              src="{gig}"
              alt=""
              className="w-[80px] h-[80px] object-cover rounded-full"
            />
            <div>
              <p className="text-xl font-bold">
                {gig?.author?.name}
                <span className="text-lg font-semibold ml-2">
                  Level {gig?.author?.level}
                </span>
              </p>
              <p className="font-lg font-bold">
                pending 4.9{" "}
                <span className="font-medium pr-2 border-r-2 border-tertiary">
                  (422)
                </span>{" "}
                <span className="font-medium">123 Orders in Queue</span>
              </p>
            </div>
          </div>
          <div>
            {urls && (
              <Carousel responsive={responsive} infinite={true}>
                {urls?.map((url, index) => (
                  <img src={url} alt="" key={index} />
                ))}
              </Carousel>
            )}
          </div>
          <div>
            <p className="text-xl font-bold mb-4 text-gray">
              What people loved about this seller
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              containerClass="bg-almostWhite"
            >
              <div className="border-2 border-extreamLightGray py-2 px-3 flex">
                <img
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/670183/original/portrait.png"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-extrabold text-gray">
                    Ivancoole{" "}
                    <span className="font-medium text-extreamLightGray">
                      United States
                    </span>{" "}
                    <span className="text-gray">5 star</span>
                  </p>
                  <p className="font-medium text-lightGray">
                    As a modern minimalist designer, I specialize in creating
                    sleek and simple logos that convey your brand&apos;s message
                    with style and sophistication.
                  </p>
                  <p className="font-normal  text-extreamLightGray">
                    4 weeks ago
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-bold text-gray">About this gig</p>
            <p className="text-lg font-bold text-lightGray">Hello,</p>
            <p className="text-md font-normal text-lightGray">
              Welcome to my modern minimalist business logo design gig! I am a
              professional logo designer with 6 years of experience creating
              high-quality, memorable logos for clients just like you.
            </p>
            <p className="text-md font-normal text-lightGray">
              {" "}
              As a modern minimalist designer, I specialize in creating sleek
              and simple logos that convey your brand&apos;s message with style
              and sophistication. Whether you&apos;re starting a new business or
              rebranding an existing one, I&apos;ll work with you to understand
              your vision and create a logo that perfectly captures the essence
              of your brand.
            </p>
            <p className="text-lg font-bold text-lightGray">Why me?</p>
            <ul className="text-md font-normal text-lightGray">
              <li>
                <HdrStrongIcon /> Fast response time
              </li>
              <li>
                <HdrStrongIcon /> Professional, minimalist and modern
              </li>
              <li>
                <HdrStrongIcon /> 100% customer satisfaction
              </li>
              <li>
                <HdrStrongIcon /> Full copyrights
              </li>
              <li>
                <HdrStrongIcon /> TOP NOTCH Quality and 100% satisfaction
                guaranteed
              </li>
              <li>
                <HdrStrongIcon /> Unlimited revisions (Until you are satisfied)
              </li>
              <li>
                <HdrStrongIcon /> Swift and reliable communication
              </li>
              <li>
                <HdrStrongIcon /> Express 24 hours delivery
              </li>
              <li>
                <HdrStrongIcon /> Guaranteed on-time delivery
              </li>
            </ul>

            <p className="text-md font-normal text-lightGray">
              I&apos;m committed to delivering a logo that exceeds your
              expectations and helps you stand out from the competition. So, why
              wait? Order now and let&apos;s get started on creating a memorable
              logo for your business!
            </p>
          </div>
          <div className="border-[1px] border-extreamLightGray p-4">
            <p className="text-gray font-extrabold">
              {" "}
              <InfoIcon className="text-lightGray" />
              Delivery style preference
            </p>
            <p className="text-lightGray">
              Please inform the freelancer of any preferences or concerns
              regarding the use of AI tools in the completion and/or delivery of
              your order.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-bold text-gray">About the seller</p>
            <div className="flex">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/8563cebd23d715b3b35b807044964727-1611653633994/c0622120-e351-4950-95ea-ff9db5b82119.jpg"
                alt=""
                className="w-[100px] h-[100px] object-cover rounded-full"
              />
              <div>
                <p className="text-xl font-bold">
                  {gig?.author?.name}
                  <span className="text-lg font-semibold mx-2">
                    Level {gig?.author?.level}
                  </span>
                  <span>Online</span>
                </p>
                <p className="font-lg font-bold">
                  4.9 <span className="font-medium">(422)</span>{" "}
                </p>
              </div>
            </div>
            <button className="border-[1px] border-gray px-4 py-2 rounded-md font-extrabold text-gray">
              Contact me
            </button>

            <div className="border-[1px] border-extreamLightGray p-5">
              <div className="h-[200px] flex flex-col flex-wrap">
                <div>
                  <p className="text-lg font-medium text-lightGray">From</p>
                  <p className="text-xl font-bold text-gray">Sri Lanka</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-lightGray">
                    Avg. response time
                  </p>
                  <p className="text-xl font-bold text-gray">1 hour</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-lightGray">
                    Languages
                  </p>
                  <p className="text-xl font-bold text-gray">English</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-lightGray">
                    Member since
                  </p>
                  <p className="text-xl font-bold text-gray">Jan 2021</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-lightGray">
                    Last delivery
                  </p>
                  <p className="text-xl font-bold text-gray">about 4 hours</p>
                </div>
              </div>
              <hr className="text-lightGray" />
              <div className="text-lg font-medium text-lightGray mt-5">
                Hi everyone. My name is Alisha and I am an experienced graphics
                designer having more than 8 years of experience in design almost
                every sort of brand. I always focus on quality rather than
                quantity. My expertise in Logo designing helps me design modern,
                unique and amazing logos.
              </div>
            </div>
          </div>
          <div className="space-y-4" ref={packagesRef}>
            <p className="text-2xl font-bold text-gray">Compare packages</p>
            <table>
              <tr>
                <th className="border-[1px] border-extreamLightGray text-left p-3">
                  Package
                </th>
                <th className="border-[1px] border-extreamLightGray text-left p-3">
                  <p>₹1,742</p>
                  <p>Basic</p>
                  <p>Basic</p>
                  <p>
                    1 Logo concept + High-Quality JPG + Transparent PNG + 3D
                    Mockup
                  </p>
                </th>
                <th className="border-[1px] border-extreamLightGray text-left p-3">
                  <p>₹3,483</p>
                  <p>Standard</p>
                  <p>BEST MATCH</p>
                  <p>
                    2 Logo concepts + High-Quality JPG + Transparent PNG + 3D
                    Mockup + Source Files
                  </p>
                </th>
                <th className="border-[1px] border-extreamLightGray text-left p-3">
                  <p>₹6,094</p>
                  <p>Premium</p>
                  <p>PREMIUM</p>
                  <p>
                    3 Logo concepts + High-Quality JPG + Transparent PNG + 3D
                    Mockup + Social media kit
                  </p>
                </th>
              </tr>
              <tr className="bg-almostWhite">
                <td className="border-[1px] border-extreamLightGray text-left p-3">
                  Logo transparency
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
              </tr>
              <tr>
                <td className="border-[1px] border-extreamLightGray text-left p-3">
                  Vector file
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon className="text-lightGray" />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
              </tr>
              <tr className="bg-almostWhite">
                <td className="border-[1px] border-extreamLightGray text-left p-3">
                  Printable file
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
              </tr>
              <tr>
                <td className="border-[1px] border-extreamLightGray text-left p-3">
                  3D mockup
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
              </tr>
              <tr className="bg-almostWhite">
                <td className="border-[1px] border-extreamLightGray text-left p-3">
                  Source file
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon className="text-lightGray" />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
              </tr>
              <tr>
                <td className="border-[1px] border-extreamLightGray text-left p-3">
                  Social media kit
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon className="text-lightGray" />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon className="text-lightGray" />
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <CheckIcon />
                </td>
              </tr>
              <tr className="bg-almostWhite">
                <td className="border-[1px] border-extreamLightGray text-left p-3">
                  Number of concepts included
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  1
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  2
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  3
                </td>
              </tr>
              <tr>
                <td className="border-[1px] border-extreamLightGray text-left p-3">
                  Revisions
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  Unlimited
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  Unlimited
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  Unlimited
                </td>
              </tr>
              <tr className="bg-almostWhite">
                <td className="border-[1px] border-extreamLightGray text-left p-3">
                  Delivery Time
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="2 days"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="2 days"
                        control={<Radio />}
                        label="2 days"
                      />
                      <FormControlLabel
                        value="1 day"
                        control={<Radio />}
                        label="1 day"
                      />
                    </RadioGroup>
                  </FormControl>
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="2 days"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="2 days"
                        control={<Radio />}
                        label="2 days"
                      />
                      <FormControlLabel
                        value="1 day"
                        control={<Radio />}
                        label="1 day"
                      />
                    </RadioGroup>
                  </FormControl>
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="2 days"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="2 days"
                        control={<Radio />}
                        label="2 days"
                      />
                      <FormControlLabel
                        value="1 day"
                        control={<Radio />}
                        label="1 day"
                      />
                    </RadioGroup>
                  </FormControl>
                </td>
              </tr>
              <tr>
                <td className="border-[1px] border-extreamLightGray text-left p-3"></td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <p>₹{prices && gig?.basePrice[0]}</p>

                  <button
                    className="bg-black text-white rounded-md px-10 py-2 text-xl font-bold"
                    onClick={() => {
                      setBtn1(true);
                      setBtn2(false);
                      setBtn3(false);
                    }}
                  >
                    Select
                  </button>
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <p>₹{prices && gig?.basePrice[1]}</p>

                  <button
                    className="bg-black text-white rounded-md px-10 py-2 text-xl font-bold"
                    onClick={() => {
                      setBtn1(false);
                      setBtn2(true);
                      setBtn3(false);
                    }}
                  >
                    Select
                  </button>
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <p>₹{prices && gig?.basePrice[2]}</p>

                  <button
                    className="bg-black text-white rounded-md px-10 py-2 text-xl font-bold"
                    onClick={() => {
                      setBtn1(false);
                      setBtn2(false);
                      setBtn3(true);
                    }}
                  >
                    Select
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <div className="space-y-5">
            <p className="text-2xl font-bold">Reviews</p>
            <div className="flex">
              <input
                type="text"
                placeholder="enter your review.."
                className="w-[600px] h-[60px] text-xl font-semibold outline-none border-2 border-tertiary rounded-s-lg px-3"
                value={review && ""}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className="bg-lightGreen w-[100px] h-[60px] px-2 rounded-e-lg"
                onClick={handleClick}
              >
                Send
              </button>
            </div>
            <hr />
            <div className="flex flex-col space-y-2">
              {review && <div className="flex" >
                      {review && (
                        <div className="flex bg-almostWhite">
                          <img
                            src={review && review?.img}
                            alt=""
                            className="w-[60px] h-[60px] object-cover rounded-full mr-4"
                          />
                          <div>
                            <div className="flex justify-center items-center text-lightGray font-medium">
                            <p>{review && review.userName} | </p> 
                            <p>{review && review.userCountry} | </p>  
                            <p> {review && review?.userLevel} star</p>
                            </div>
                            <p className="text-gray">{review.text}</p>
                          </div>
                        </div>
                      )}
                    </div>}
              {reviewerValue &&
                reviewerValue.map((item, index) => {
                  //                   const reviewer = item.userId
                  //                   ? new Promise((resolve, reject) => {
                  //                       getReviewer(item.userId)
                  //                         .then((res) => {
                  //                           // console.log("LINE AT 637", res);
                  //                           resolve(res); // Resolve the Promise with the result
                  //                         })
                  //                         .catch((err) => {
                  //                           console.log(err);
                  //                           reject(err); // Reject the Promise with the error
                  //                         });
                  //                     })
                  //                   : null;
                  //                   let reviewerFuncCalled = false;

                  // const reviewerValueFunc = async () => {
                  //   try {
                  //     if (!reviewerFuncCalled) {
                  //       // Execute the function logic only if it hasn't been called before
                  //       reviewerFuncCalled = true;
                  //       const value = await reviewer;
                  //       // console.log(value);
                  //       setReviewerValue(value);

                  //       // Update the flag to indicate that the function has been called

                  //       console.log(reviewerFuncCalled);
                  //     }
                  //   } catch (error) {
                  //     console.error(error);
                  //   }
                  // };

                  // reviewerFuncCalled && reviewerValueFunc();

                  return (
                    <div className=" bg-almostWhite p-2 rounded-xl" key={index}>
                      {item && (
                        <div className="flex">
                          <img
                            src={item && item?.img}
                            alt=""
                            className="w-[60px] h-[60px] object-cover rounded-full mr-4"
                          />
                          <div >
                            <div className="flex items-center text-lightGray font-medium">
                            <p>{item && item.userName}</p>
                            <p>{item && item.userCountry}</p>
                            <p>{item && item?.userLevel} star</p>
                            </div>
                            <p className="text-gray">{item.text}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="min-[1280px]:bottom-16 min-[1280px]:fixed  min-[1280px]:right-14">
          <div className="border-[1px] border-almostWhite">
            <button
              className={
                btn1
                  ? `border-b-2 border-black text-black py-4 max-[1280px]:w-1/3 w-[150px]  font-bold`
                  : `text-gray py-4  font-bold border-[1px] border-extreamLightGray bg-almostWhite max-[1280px]:w-1/3 w-[150px] `
              }
              onClick={() => {
                setBtn1(true);
                setBtn2(false);
                setBtn3(false);
                setPrice(prices && gig?.basePrice[0]);
                setName("Basic");
              }}
            >
              Basic
            </button>
            <button
              className={
                btn2
                  ? ` border-b-2 border-black text-black py-4 max-[1280px]:w-1/3 w-[150px] font-bold`
                  : `text-gray py-4 max-[1280px]:w-1/3 w-[150px] font-bold border-[1px] border-extreamLightGray bg-almostWhite  `
              }
              onClick={() => {
                setBtn1(false);
                setBtn2(true);
                setBtn3(false);
                setPrice(prices && gig?.basePrice[1]);
                setName("Standard");
              }}
            >
              Standard
            </button>
            <button
              className={
                btn3
                  ? ` border-b-2 border-black text-black py-4 max-[1280px]:w-1/3 w-[150px] font-bold`
                  : `text-gray py-4 max-[1280px]:w-1/3   w-[150px] font-bold border-[1px] border-extreamLightGray bg-almostWhite `
              }
              onClick={() => {
                setBtn1(false);
                setBtn2(false);
                setBtn3(true);
                setPrice(prices && gig?.basePrice[2]);
                setName("Premium");
              }}
            >
              Premium
            </button>
          </div>
          <div>
            <div className="space-y-3  py-2 px-5 border-[1px] border-extreamLightGray">
              {btn1 && (
                <>
                  <div>
                    <p className="text-3xl font-extrabold text-gray">
                      ₹{prices && gig?.basePrice[0]}
                    </p>
                    <p className="text-gray">
                      Save up to 15% with{" "}
                      <span className="text-green">Subscribe to Save</span>{" "}
                    </p>
                  </div>

                  <p className="text-gray text-wrap">
                    <span className="  text-lg">BASIC</span> 1 Logo concept +
                    High-Quality JPG + <p>Transparent PNG + 3D Mockup</p>
                  </p>
                  <p className="text-gray space-x-4 font-semibold">
                    <AccessTimeIcon /> 2 Days <FlipCameraAndroidIcon /> Delivery
                    Unlimited Revisions{" "}
                  </p>
                  <div className="text-lightGray">
                    <p>
                      <CheckIcon className="text-black" /> 1 concept included
                    </p>
                    <p>
                      <CheckIcon className="text-black" /> Logo transparency
                    </p>
                    <p>
                      <CheckIcon /> Vector file
                    </p>
                    <p>
                      <CheckIcon className="text-black" /> Printable file
                    </p>
                    <p>
                      <CheckIcon />
                      Include 3D mockup
                    </p>
                    <p>
                      <CheckIcon /> Include source file
                    </p>
                    <p>
                      <CheckIcon /> Include social media kit
                    </p>
                  </div>
                </>
              )}
              {btn2 && (
                <>
                  <div>
                    <p className="text-3xl font-extrabold text-gray">
                      ₹{prices && gig?.basePrice[1]}
                    </p>
                    <p className="text-gray">
                      Save up to 15% with{" "}
                      <span className="text-green">Subscribe to Save</span>{" "}
                    </p>
                  </div>

                  <p className="text-gray text-wrap">
                    <span className="  text-lg">BEST MATCH </span> 2 Logo
                    concepts + High-Quality JPG +{" "}
                    <p>Transparent PNG + 3D Mockup</p>
                  </p>
                  <p className="text-gray space-x-4 font-semibold">
                    <AccessTimeIcon /> 2 Days <FlipCameraAndroidIcon /> Delivery
                    Unlimited Revisions{" "}
                  </p>
                  <div className="text-lightGray">
                    <p>
                      <CheckIcon className="text-black" /> 1 concept included
                    </p>
                    <p>
                      <CheckIcon className="text-black" /> Logo transparency
                    </p>
                    <p>
                      <CheckIcon /> Vector file
                    </p>
                    <p>
                      <CheckIcon className="text-black" /> Printable file
                    </p>
                    <p>
                      <CheckIcon className="text-black" />
                      Include 3D mockup
                    </p>
                    <p>
                      <CheckIcon className="text-black" /> Include source file
                    </p>
                    <p>
                      <CheckIcon /> Include social media kit
                    </p>
                  </div>
                </>
              )}
              {btn3 && (
                <>
                  <div>
                    <p className="text-3xl font-extrabold text-gray">
                      ₹{prices && gig?.basePrice[2]}
                    </p>
                    <p className="text-gray">
                      Save up to 15% with{" "}
                      <span className="text-green">Subscribe to Save</span>{" "}
                    </p>
                  </div>

                  <p className="text-gray text-wrap">
                    <span className="  text-lg">PREMIUM </span> 3 Logo concepts
                    + High-Quality JPG +
                    <p>Transparent PNG + 3D Mockup + Social media kit</p>
                  </p>
                  <p className="text-gray space-x-4 font-semibold">
                    <AccessTimeIcon /> 2 Days <FlipCameraAndroidIcon /> Delivery
                    Unlimited Revisions{" "}
                  </p>
                  <div className="text-lightGray">
                    <p>
                      <CheckIcon className="text-black" /> 1 concept included
                    </p>
                    <p>
                      <CheckIcon className="text-black" /> Logo transparency
                    </p>
                    <p>
                      <CheckIcon className="text-black" /> Vector file
                    </p>
                    <p>
                      <CheckIcon className="text-black" /> Printable file
                    </p>
                    <p>
                      <CheckIcon className="text-black" />
                      Include 3D mockup
                    </p>
                    <p>
                      <CheckIcon className="text-black" /> Include source file
                    </p>
                    <p>
                      <CheckIcon className="text-black" /> Include social media
                      kit
                    </p>
                  </div>
                </>
              )}

              {paymentFlag ? 
              <button
                className="bg-black text-white font-extrabold text-xl w-full py-3 rounded-lg"
                onClick={handlePayment}
              >
                Continue
              </button> 
              :
              <p
              className="text-center cursor-not-allowed text-green font-extrabold text-xl bg-almostWhite w-full py-3 rounded-lg"
              
            >
             <CheckCircleRoundedIcon/> Already bought !!
            </p>
              }
              <p
                className="text-center cursor-default"
                onClick={() => {
                  packagesRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Compare <ArrowForwardIcon />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GigPage;
