import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinkComponent from "../components/LinkComponent.jsx";
import LInkComponentDetails from "../components/LInkComponentDetails.jsx";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [inputs, setInputs] = useState();
  const [addLink, setAddLink] = useState([null]);
  const [links, setLinks] = useState([""]);
  const [linkDetails, setLinkDetails] = useState([{}]);
  const [addLinkDetails, setAddLinkDetails] = useState([null]);
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [imgPerc, setImgPerc] = useState([]);
  console.log(urls, linkDetails, links);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  console.log(links);
  const user = useSelector((state) => state.user);
  const userId = user.currentUser._id;
  console.log(typeof userId);

  const handleImage = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };
  const uploadFile = (images) => {
    const promises = [];
    images.map((file) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setImgPerc(Math.floor(progress));
          // urlType === "imgUrl"
          //   ? setImgUploadPerc(Math.round(progress))
          //   : setVideoUploadPerc(Math.round(progress));

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          // switch (error.code) {
          //   case "storage/unauthorized":
          //     // User doesn't have permission to access the object
          //     break;
          //   case "storage/canceled":
          //     // User canceled the upload
          //     break;

          //   // ...

          //   case "storage/unknown":
          //     // Unknown error occurred, inspect error.serverResponse
          //     break;
          // }
          console.log(error);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrls((prevState) => [...prevState, downloadURL]);
            console.log("File available at", downloadURL);
          });
        }
      );
    });

    // Promise.all(promises)
    //   .then(() => {toast.success("Image(s)/Video(s) uploaded!!", {
    //     position: "top-right",
    //   })})
    //   .catch((err) => {console.log(err);
    //   toast.error("Upload Failed!!", {
    //     position: "top-right",
    //   })});
  };
  useEffect(() => {
    images &&
     uploadFile(images)
     ;
    //  if(images.length > 0){
    //   toast.success("Image(s)/Video(s) uploaded!!", {
    //     position: "top-right",
    //   });
    // } 
    // else{
    //   toast.error("Upload Failed!!", {
    //     position: "top-right",
    //   });
    // }
  }, [images]);
  
  const handleClick = async () => {
    const formData = new FormData();

    [...images].map((image) => {
      formData.append(`images`, image);
    });
    // console.log(formData);
    try {
      await axios.post("https://jobs-media-api.onrender.com/api/gig", {
      urls,
      inputs,
      userId,
    });
    toast.success("Gig uploaded!!", {
      position: "top-right",
    })
    } catch (error) {
      console.log(error);
      toast.error("Gig upload failed!!", {
        position: "top-right",
      })
    }
    
    // console.log(res.data);
  };
  const handlePrice = (e) => {
    const prices = e.target.value.split(",");
    prices.map((price) => {
      setInputs((prevState) => {
        return { ...prevState, [e.target.name]: price };
      });
    });
  };
  const handleReview = async () => {
    const formData = new FormData();

    [...images].map((image) => {
      formData.append(`images`, image);
    });
    // console.log(formData);
    try {
      await axios.post("https://jobs-media-api.onrender.com/api/fiverReview", {
        urls,
        inputs,
        userId,
      });
      toast.success("Review uploaded!!", {
        position: "top-right",
      })
    } catch (error) {
      console.log(error);
      toast.error("Reviewing failed!!", {
        position: "top-right",
      })
    }
   
    // console.log(res.data);
  };

  const addNewLink = () => {
    const newKey = addLink.length;
    setAddLink((prev) => [
      ...prev,
      <LinkComponent setLinks={setLinks} key={newKey} />,
    ]);
  };
  const addNewLinkDetails = () => {
    const newKey = addLinkDetails.length;
    setAddLinkDetails((prev) => [
      ...prev,
      <LInkComponentDetails
        setLinkDetails={setLinkDetails}
        setUrls={setUrls}
        setInputs={setInputs}
        key={newKey}
      />,
    ]);
  };
  const handleBlog = async () => {
    const formData = new FormData();

    [...images].map((image) => {
      formData.append(`images`, image);
    });
    // console.log(formData);
    try {
      const res = await axios.post("https://jobs-media-api.onrender.com/api/blog", {
        userId,
        urls,
        inputs,
        links,
        linkDetails,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("LINE AT 158" , linkDetails);
  const [paidGigs, setPaidGigs] = useState([]);
  useEffect(() => {
    const getPaidGigs = async () => {
      const res = await axios.get(
        `https://jobs-media-api.onrender.com/api/auth/getByPaidGigs/${userId}`
      );
      // console.log("LINE AT 188", res.data);
      setPaidGigs(res.data);
    };
    getPaidGigs();
  }, [userId]);
  console.log("LINE AT 194", paidGigs);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="relative flex pt-36 px-14 pb-10 ">
        <div className="flex flex-col  items-center mr-5 w-1/4 h-max  space-y-5 py-4 rounded-lg bg-almostWhite ">
          <button
            className={
              open1
                ? ` w-64 h-10 px-4 py-2 rounded-md  bg-gray text-extreamLightGreen  font-medium text-xl  `
                : `   w-64 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl hover:bg-lightGray hover:text-white`
            }
            onClick={() => {
              setOpen1(true);
              setOpen2(false);
              setOpen3(false);
              setOpen4(false);
              setOpen5(false);
              setOpen6(false);
            }}
          >
            Update User
          </button>
          <button
            className={
              open2
                ? `w-64 h-10 px-4 py-2 rounded-md  bg-gray text-extreamLightGreen  font-medium text-xl   `
                : `  w-64 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl hover:bg-lightGray hover:text-white`
            }
            onClick={() => {
              setOpen2(true);
              setOpen1(false);
              setOpen3(false);
              setOpen4(false);
              setOpen5(false);
              setOpen6(false);
            }}
          >
            Gig Upload
          </button>
          <button
            className={
              open3
                ? `w-64 h-10 px-4 py-2 rounded-md  bg-gray text-extreamLightGreen  font-medium text-xl`
                : `    w-64 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl hover:bg-lightGray hover:text-white`
            }
            onClick={() => {
              setOpen3(true);
              setOpen1(false);
              setOpen2(false);
              setOpen4(false);
              setOpen6(false);
              setOpen5(false);
            }}
          >
            Subscribed Gigs
          </button>
          <button
            className={
              open4
                ? `w-64 h-10 px-4 py-2 rounded-md  bg-gray text-extreamLightGreen  font-medium text-xl`
                : `    w-64 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl hover:bg-lightGray hover:text-white`
            }
            onClick={() => {
              setOpen4(true);
              setOpen1(false);
              setOpen2(false);
              setOpen3(false);
              setOpen5(false);
              setOpen6(false);
            }}
          >
            Wishlist <FavoriteBorderIcon />
          </button>
          <button
            className={
              open5
                ? `w-64 h-10 px-4 py-2 rounded-md  bg-gray text-extreamLightGreen  font-medium text-xl`
                : `   w-64 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl hover:bg-lightGray hover:text-white`
            }
            onClick={() => {
              setOpen5(true);
              setOpen1(false);
              setOpen2(false);
              setOpen3(false);
              setOpen4(false);
              setOpen6(false);
            }}
          >
            Add Review
          </button>
          <button
            className={
              open6
                ? `w-64 h-10 px-4 py-2 rounded-md  bg-gray text-extreamLightGreen  font-medium text-xl`
                : `   w-64 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl hover:bg-lightGray hover:text-white`
            }
            onClick={() => {
              setOpen6(true);
              setOpen1(false);
              setOpen2(false);
              setOpen3(false);
              setOpen5(false);
              setOpen4(false);
            }}
          >
            Create Blog
          </button>
        </div>
        {!open1 && !open2 && !open3 && !open4 && !open5 && !open6 && (
          <img
            src="/public/upadate.svg"
            alt=""
            className="w-3/4 rounded-xl h-[500px]"
          />
        )}
        {open1 && (
          <div className="flex flex-col w-3/4  bg-[url('/public/user_update.svg')] bg-no-repeat bg-center bg-contain">
            <div className="bg-extreamLightGray/40 w-full px-8 py-6 rounded-lg space-y-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
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
                <label htmlFor="" className="text-2xl font-semibold">
                  Email
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Password
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Image
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  className="bg-extreamLightGray rounded-md"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Country
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  className="bg-extreamLightGray rounded-md"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Language
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  className="bg-extreamLightGray rounded-md"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Description
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Response Time
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Specialization
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div
                className="bg-green hover:bg-lightGreen text-white text-xl text-center font-bold w-full  h-14 py-3 rounded-md"
                onClick={handleClick}
              >
                Upload & Save
                <CheckIcon />
              </div>
            </div>
          </div>
        )}
        {open2 && (
          <div className="flex flex-col w-3/4  bg-[url('/public/upload.svg')] bg-no-repeat bg-center bg-contain">
            <div className="bg-extreamLightGray/40 w-full px-8 py-6 rounded-lg space-y-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Title
                </label>
                <textarea
                  type="text"
                  name="title"
                  id=""
                  onChange={handleChange}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Category
                </label>
                <textarea
                  type="text"
                  name="category"
                  id=""
                  onChange={handleChange}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  id=""
                  onChange={handleChange}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                {imgPerc > 0 ? <p>Uploading {imgPerc}%</p> : null}
                <label htmlFor="" className="text-2xl font-semibold">
                  Images
                </label>

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  name="images"
                  className=" w-full h-10 text-md text-gray border border-lightgGray rounded-lg cursor-pointer bg-extreamLightGray focus:outline-none  "
                  onChange={handleImage}
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  BasePrice
                </label>
                <textarea
                  type="number"
                  name="basePrice"
                  id=""
                  onChange={handlePrice}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <button
                className="flex justify-center items-center gap-4 bg-green hover:bg-lightGreen text-white text-xl font-bold w-full text-center h-14 px-2 py-2 rounded-md "
                onClick={handleClick}
              >
                Save & Upload
                <CheckIcon />
              </button>
            </div>
          </div>
        )}
        {open3 && (
          <div className="flex flex-col  space-y-4">
            {paidGigs.length > 0 ? (
              paidGigs?.paidGigs.map((item, index) => {
                const title = item.title;
                return (
                  <div
                    key={index}
                    className="w-full flex items-center justify-between rounded-lg border border-extreamLightGray p-2"
                    onClick={() => {
                      navigate(`/gig/${item?.category}/${item?._id}`, {
                        state: title,
                      });
                    }}
                  >
                    <img
                      src={item?.urls[0]}
                      alt=""
                      className="w-[300px] h-[300px] object-cover rounded-xl mr-6"
                    />
                    <p className="text-xl font-bold text-lightGray">
                      {item?.description}
                    </p>
                    <div>
                      <p className="text-lg font-extrabold text-gray">
                        {item?.title}
                      </p>
                      <p className="text-lg font-extrabold text-gray">
                        {item?.rating}*
                      </p>
                      <p className="text-lg font-extrabold text-gray">
                        ${item?.basePrice[0]}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col w-[900px] h-[500px] bg-[url('/public/nodata.svg')] bg-no-repeat bg-center bg-contain">
                <div className="bg-extreamLightGray/40 text-center px-8 py-6 rounded-lg space-y-6 text-xl text-gray font-bold">
                  No Subscribed Gigs Till Now!!
                </div>
              </div>
            )}
          </div>
        )}
        {open4 && (
          <div className="flex flex-col  space-y-4">
            {paidGigs.length > 0 ? (
              paidGigs?.wishlist.map((item, index) => {
                const title = item.title;
                return (
                  <div
                    key={index}
                    className="w-full flex items-center justify-between rounded-lg border border-extreamLightGray p-2"
                    onClick={() => {
                      navigate(`/gig/${item?.category}/${item?._id}`, {
                        state: title,
                      });
                    }}
                  >
                    <img
                      src={item?.urls[0]}
                      alt=""
                      className="w-[300px] h-[300px] object-cover rounded-xl mr-6"
                    />
                    <p className="text-xl font-bold text-lightGray">
                      {item?.description}
                    </p>
                    <div>
                      <p className="text-lg font-extrabold text-gray">
                        {item?.title}
                      </p>
                      <p className="text-lg font-extrabold text-gray">
                        {item?.rating}*
                      </p>
                      <p className="text-lg font-extrabold text-gray">
                        ${item?.basePrice[0]}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col w-[900px] h-[500px] bg-[url('/public/nodata.svg')] bg-no-repeat bg-center bg-contain">
                <div className="bg-extreamLightGray/40 text-center px-8 py-6 rounded-lg space-y-6 text-xl text-gray font-bold">
                  No Wishlisted Gigs Till Now!!
                </div>
              </div>
            )}
          </div>
        )}
        {open5 && (
          <div className="flex flex-col w-3/4  bg-[url('/public/review.svg')] bg-no-repeat bg-center bg-contain">
            <div className="bg-extreamLightGray/40 w-full px-8 py-6 rounded-lg space-y-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Review
                </label>
                <textarea
                  type="text"
                  name="review"
                  id=""
                  onChange={handleChange}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>

              <div className="flex flex-col space-y-1">
                {imgPerc>0 ? `Uploading ${imgPerc}%` : null}
                <label htmlFor="" className="text-2xl font-semibold">
                  Video
                </label>

                <input
                  type="file"
                  accept="video/*"
                  name="images"
                  className=" w-full h-10 text-md text-gray border border-lightgGray rounded-lg cursor-pointer bg-extreamLightGray focus:outline-none  "
                  onChange={handleImage}
                />
              </div>
              <button
                className="flex justify-center items-center gap-5 bg-green hover:bg-lightGreen text-white text-xl font-bold w-full text-center h-14 px-2 py-2 rounded-md "
                onClick={handleReview}
              >
                Upload
                <CheckIcon />
              </button>
            </div>
          </div>
        )}
        {open6 && (
          <div className="flex flex-col w-3/4  bg-[url('/public/blog.svg')] bg-no-repeat bg-center bg-contain">
            <div className="bg-extreamLightGray/40 w-full px-8 py-6 rounded-lg space-y-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Title1
                </label>
                <textarea
                  type="text"
                  name="title1"
                  id=""
                  onChange={handleChange}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Description
                </label>
                <textarea
                  type="text"
                  name="desc"
                  id=""
                  onChange={handleChange}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Author
                </label>
                <textarea
                  type="text"
                  name="author"
                  id=""
                  onChange={handleChange}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Cover Image
                </label>

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  name="images"
                  className=" w-full h-10 text-md text-gray border border-lightgGray rounded-lg cursor-pointer bg-extreamLightGray focus:outline-none  "
                  onChange={handleImage}
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Summary
                </label>
                <textarea
                  type="text"
                  name="summary"
                  id=""
                  onChange={handlePrice}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Title2
                </label>
                <textarea
                  type="text"
                  name="title"
                  id=""
                  onChange={handlePrice}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Description 2
                </label>
                <textarea
                  type="text"
                  name="desc2"
                  id=""
                  onChange={handlePrice}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Title3
                </label>
                <textarea
                  type="text"
                  name="title3"
                  id=""
                  onChange={handlePrice}
                  className="bg-extreamLightGray rounded-md"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Links
                </label>
                <button
                  className="bg-extreamLightGreen w-28 h-10 px-1 py-2 rounded-md font-medium"
                  onClick={addNewLink}
                >
                  Add a link
                </button>
                {addLink.map((link, index) => (
                  <div key={index}>{link}</div>
                ))}
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-2xl font-semibold">
                  Link Details
                </label>
                <button
                  className="bg-extreamLightGreen w-36 h-10 px-2 py-2 rounded-md font-medium"
                  onClick={addNewLinkDetails}
                >
                  Add a linkDetails
                </button>
                {addLinkDetails &&
                  addLinkDetails.map((link, index) => (
                    <div key={index}>{link}</div>
                  ))}
              </div>
              <button
                className="flex items-center justify-center gap-5 bg-green hover:bg-lightGreen text-white text-xl font-bold w-full text-center h-14 px-2 py-2 rounded-md "
                onClick={handleBlog}
              >
                Save & Upload
                <CheckIcon />
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default User;
