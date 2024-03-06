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
import { useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import Footer from "../components/Footer";
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
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  return (
    <>
      <Navbar />
      <div className="pt-36 px-14 w-full  items-start justify-between space-y-10  min-[1280px]:flex">
        <div className="w-[700px] space-y-10 ">
          <p className="text-gray">
            <HomeIcon /> / Graphics & Design / Logo Design
          </p>
          <p className="text-4xl font-bold text-gray">
            I will design unique modern minimalist and business logo design
          </p>
          <div className="flex">
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/8563cebd23d715b3b35b807044964727-1611653633994/c0622120-e351-4950-95ea-ff9db5b82119.jpg"
              alt=""
              className="w-[80px] h-[80px] object-cover rounded-full"
            />
            <div>
              <p className="text-xl font-bold">
                Alisha{" "}
                <span className="text-lg font-semibold ml-2">Level 2</span>
              </p>
              <p className="font-lg font-bold">
                4.9{" "}
                <span className="font-medium pr-2 border-r-2 border-tertiary">
                  (422)
                </span>{" "}
                <span className="font-medium">123 Orders in Queue</span>
              </p>
            </div>
          </div>
          <div>
            <Carousel responsive={responsive} infinite={true}>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/300427605/original/c8c181ffe1ff04e84fb558c2ae80b1437c153d1e/design-unique-modern-minimalist-and-business-logo-design.png"
                alt=""
              />
              <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/300427605/original/c1fbf39713e96c5eef4fd63b53652fbfccfca0ab/design-unique-modern-minimalist-and-business-logo-design.png"
                alt=""
              />
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230208/5_g6uids.jpg"
                alt=""
              />
              <img
                src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/6d2d266fa5e4d555181055df602eff60-1677387070/magoz/design-unique-modern-minimalist-and-business-logo-design.png"
                alt=""
              />
            </Carousel>
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
                  Alisha
                  <span className="text-lg font-semibold mx-2">Level 2</span>
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
          <div className="space-y-4">
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
                  <p>₹1,742</p>

                  <button className="bg-black text-white rounded-md px-10 py-2 text-xl font-bold">
                    Select
                  </button>
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <p>₹1,742</p>

                  <button className="bg-black text-white rounded-md px-10 py-2 text-xl font-bold">
                    Select
                  </button>
                </td>
                <td className="border-[1px] border-extreamLightGray text-center p-3">
                  <p>₹1,742</p>

                  <button className="bg-black text-white rounded-md px-10 py-2 text-xl font-bold">
                    Select
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <div></div>
          <div className="space-y-5">
            <p className="text-2xl font-bold">Reviews</p>
            <div className="flex">
              <input
                type="text"
                placeholder="enter your review.."
                className="w-[600px] h-[60px] text-xl font-semibold outline-none border-2 border-tertiary rounded-s-lg px-3"
              />
              <button className="bg-lightGreen w-[100px] h-[60px] px-2 rounded-e-lg">
                Send
              </button>
            </div>
            <hr />
            <div className="flex">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8563cebd23d715b3b35b807044964727-1611653633994/c0622120-e351-4950-95ea-ff9db5b82119.jpg"
                alt=""
                className="w-[60px] h-[60px] object-cover rounded-full mr-4"
              />
              <div>
                <p>ivancoole</p>
                <p>United States</p>
                <p>5 star</p>
                <p>
                  Once again, an absolute pleasure! I am receiving precisely
                  what I require to establish the brand for my new company, This
                  Seller has successfully created and delivered my logo,
                  website, Launch Party invitation, letterhead, and business
                  cards
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[100px] min-[1280px]:fixed min-[1280px]:right-14">
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
              }}
            >
              Premium
            </button>
          </div>
          <div>
            {btn1 && (
              <div className="space-y-5 p-5 border-[1px] border-extreamLightGray">
                <div>
                  <p className="text-3xl font-extrabold text-gray">₹1,742</p>
                  <p className="text-gray">Save up to 15% with <span className="text-green">
                  Subscribe to Save</span> </p>
                </div>

                <p className="text-gray text-wrap">
                  <span className="font-medium text-lg">BASIC</span> 1 Logo concept + High-Quality JPG + <p>Transparent PNG + 3D
                  Mockup</p> 
                </p>
                <p className="text-gray space-x-4 font-semibold"><AccessTimeIcon/> 2 Days <FlipCameraAndroidIcon/>   Delivery Unlimited Revisions </p>
                <div className="text-lightGray">
                  <p >
                    <CheckIcon className="text-black"  /> 1 concept included
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
                    <CheckIcon />Include 3D mockup

                  </p>
                  <p>
                    <CheckIcon /> Include source file
                  </p>
                  <p>
                    <CheckIcon /> Include social media kit
                  </p>
                </div>
                <button className="bg-black text-white font-extrabold text-xl w-full py-3 rounded-lg">Continue</button>
              </div>
            )}
            {btn2 && 
            <div className="space-y-5 p-5 border-[1px] border-extreamLightGray">
                <div>
                  <p className="text-3xl font-extrabold text-gray">₹3,480</p>
                  <p className="text-gray">Save up to 15% with <span className="text-green">
                  Subscribe to Save</span> </p>
                </div>

                <p className="text-gray text-wrap">
                  <span className="font-medium text-lg">BEST MATCH </span> 2 Logo concepts + High-Quality JPG + <p>Transparent PNG + 3D
                  Mockup</p> 
                </p>
                <p className="text-gray space-x-4 font-semibold"><AccessTimeIcon/> 2 Days <FlipCameraAndroidIcon/>   Delivery Unlimited Revisions </p>
                <div className="text-lightGray">
                  <p >
                    <CheckIcon className="text-black"  /> 1 concept included
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
                    <CheckIcon className="text-black"/>Include 3D mockup

                  </p>
                  <p>
                    <CheckIcon className="text-black"/> Include source file
                  </p>
                  <p>
                    <CheckIcon /> Include social media kit
                  </p>
                </div>
                <button className="bg-black text-white font-extrabold text-xl w-full py-3 rounded-lg">Continue</button>
              </div>
              }
            {btn3 && <div className="space-y-5 p-5 border-[1px] border-extreamLightGray">
                <div>
                  <p className="text-3xl font-extrabold text-gray">₹6,090
</p>
                  <p className="text-gray">Save up to 15% with <span className="text-green">
                  Subscribe to Save</span> </p>
                </div>

                <p className="text-gray text-wrap">
                  <span className="font-medium text-lg">PREMIUM </span> 3 Logo concepts + High-Quality JPG +<p>Transparent PNG + 3D Mockup + Social media kit</p> 
                </p>
                <p className="text-gray space-x-4 font-semibold"><AccessTimeIcon/> 2 Days <FlipCameraAndroidIcon/>   Delivery Unlimited Revisions </p>
                <div className="text-lightGray">
                  <p >
                    <CheckIcon className="text-black"  /> 1 concept included
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
                    <CheckIcon className="text-black"/>Include 3D mockup

                  </p>
                  <p>
                    <CheckIcon className="text-black"/> Include source file
                  </p>
                  <p>
                    <CheckIcon className="text-black"/> Include social media kit
                  </p>
                </div>
                <button className="bg-black text-white font-extrabold text-xl w-full py-3 rounded-lg">Continue</button>
              </div>}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default GigPage;
