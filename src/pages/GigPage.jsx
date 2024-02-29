import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoIcon from "@mui/icons-material/Info";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import CheckIcon from '@mui/icons-material/Check';

const GigPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute top-36 px-14 w-full h-screen flex items-start justify-between ">
        <div className="w-[700px] space-y-10 pb-24">
          <p className="text-4xl font-bold">
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
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/300427605/original/c8c181ffe1ff04e84fb558c2ae80b1437c153d1e/design-unique-modern-minimalist-and-business-logo-design.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-xl font-bold mb-4">
              What people loved about this seller
            </p>
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
            <p className="text-xl font-bold">About the seller</p>
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
          <div>
            <p>Compare packages</p>
            <table >
              <tr >
                <th className="border-[1px] border-extreamLightGray text-left p-3">Package</th>
                <th className="border-[1px] border-extreamLightGray text-left p-3">
                  <p>₹1,742</p>
                  <p>Basic</p>
                  <p>Basic</p>
                  <p>1 Logo concept + High-Quality JPG + Transparent PNG + 3D Mockup</p>
                </th>
                <th className="border-[1px] border-extreamLightGray text-left p-3">
                  <p>₹3,483</p>
                  <p>Standard</p>
                  <p>BEST MATCH</p>
                  <p>
                  2 Logo concepts + High-Quality JPG + Transparent PNG + 3D Mockup + Source Files
                  </p>
                </th>
                <th className="border-[1px] border-extreamLightGray text-left p-3">
                  <p>₹6,094</p>
                  <p>Premium</p>
                  <p>PREMIUM</p>
                  <p>
                  3 Logo concepts + High-Quality JPG + Transparent PNG + 3D Mockup + Social media kit
                  </p>
                </th>
              </tr>
              <tr >
                <td className="border-[1px] border-extreamLightGray text-left p-3">Logo transparency</td>
                <td className="border-[1px] border-extreamLightGray text-left p-3"><CheckIcon/></td>
                <td className="border-[1px] border-extreamLightGray text-left p-3"><CheckIcon/></td>
                <td className="border-[1px] border-extreamLightGray text-left p-3"><CheckIcon/></td>
              </tr>
              <tr>
                <td >Centro comercial Moctezuma</td>
                <td >Francisco Chang</td>
                <td >Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
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
        <div className="fixed right-14">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230208/4_nvo3yk.jpg"
            alt=""
            className="w-[500px] h-[300px]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GigPage;
