import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from ".././assets/Gemini_Generated_Image.jpg"
import axios from "axios";
import { useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase.js";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const User = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [inputs, setInputs] = useState();
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  console.log(urls);

  const handleChange = (e)=>{
    setInputs((prev)=>{
      return {...prev , [e.target.name]:e.target.value}
    });
  };
const user = useSelector((state)=>state.user);
const userId = user.currentUser._id;
// console.log(userId);
const handleImage = (e) => {
  for (let i = 0; i < e.target.files.length; i++) {
    const newImage = e.target.files[i];
    newImage["id"] = Math.random();
    setImages((prevState) => [...prevState, newImage]);
  }
};
const uploadFile = (images) => {
  const promises = [];
  images.map((file)=>{
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

  Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
};
useEffect(() => {
  images && uploadFile(images);
}, [images]);
  const handleClick = async()=>{
    const formData = new FormData();

    [...images].map((image) => {
      formData.append(`images`, image);
    });
    console.log(formData);
    const res = await axios.post("http://localhost:5000/api/gig" , {urls , inputs , userId});
    console.log(res.data);
  }
  const handlePrice = (e)=>{
    const prices = e.target.value.split(",");
    prices.map((price)=>{
      setInputs( 
        (prevState)=>{
          return {...prevState , [e.target.name]:price}
    })})
  }
  return (
    <>
      <Navbar />
      <div className="flex pt-36 px-14 ">
        <div className="flex flex-col mr-5 w-1/4  space-y-10">
          <button
            className={
              open1
                ? `bg-extreamLightGray w-18 h-10 px-4 py-2 rounded-md text-green font-bold text-xl text-center border-b-[4px] border-lightGray`
                : ` w-18 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl`
            }
            onClick={() => {
              setOpen1(true);
              setOpen2(false);
              setOpen3(false);
              setOpen4(false);
            }}
          >
            Update User
          </button>
          <button
            className={
              open2
                ? `bg-extreamLightGray w-18 h-10 px-4 py-2 rounded-md text-green font-bold text-xl text-center border-b-[4px] border-lightGray`
                : ` w-18 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl`
            }
            onClick={() => {
              setOpen2(true);
              setOpen1(false);
              setOpen3(false);
              setOpen4(false);
            }}
          >
            Gig Upload
          </button>
          <button
            className={
              open3
                ? `bg-extreamLightGray w-18 h-10 px-4 py-2 rounded-md text-green font-bold text-xl text-center border-b-[4px] border-lightGray`
                : ` w-18 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl`
            }
            onClick={() => {
              setOpen3(true);
              setOpen1(false);
              setOpen2(false);
              setOpen4(false);
            }}
          >
            Subscribed Gigs
          </button>
          <button
            className={
              open4
                ? `bg-extreamLightGray w-18 h-10 px-4 py-2 rounded-md text-green font-bold text-xl text-center border-b-[4px] border-lightGray`
                : ` w-18 h-10 px-4 py-2 rounded-md text-gray font-medium text-xl`
            }
            onClick={() => {
              setOpen4(true);
              setOpen1(false);
              setOpen2(false);
              setOpen3(false);
            }}
          >
            Wishlist <FavoriteBorderIcon/>
          </button>
        </div>
      {(!open1 && !open2) && 
      <img src={img} alt="" className="w-3/4 rounded-xl" />
      }
        {open1 && (
          <div className="flex flex-col w-3/4 ">
            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="text-2xl font-semibold">
                Name
              </label>
              <textarea
                type="text"
                name=""
                id=""
                className="bg-extreamLightGray"
              />
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="text-2xl font-semibold">
                Email
              </label>
              <textarea
                type="text"
                name=""
                id=""
                className="bg-extreamLightGray"
              />
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="text-2xl font-semibold">
                Password
              </label>
              <textarea
                type="text"
                name=""
                id=""
                className="bg-extreamLightGray"
              />
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="text-2xl font-semibold">
                Image
              </label>
              <textarea
                type="text"
                name=""
                id=""
                className="bg-extreamLightGray"
              />
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
            </div>

            <label htmlFor="" className="text-2xl font-semibold">
              Country
            </label>

            <label htmlFor="" className="text-2xl font-semibold">
              Language
            </label>

            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="text-2xl font-semibold">
                Description
              </label>
              <textarea
                type="text"
                name=""
                id=""
                className="bg-extreamLightGray"
              />
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
            </div>
            <label htmlFor="">Response Time</label>
            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="text-2xl font-semibold">
                Specialization
              </label>
              <textarea
                type="text"
                name=""
                id=""
                className="bg-extreamLightGray"
              />
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
            </div>
          </div>
        )}
        {open2 && (
          <div className="flex flex-col w-3/4 space-y-5 mb-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="text-2xl font-semibold">
                Title
              </label>
              <textarea
                type="text"
                name="title"
                id=""
                onChange={handleChange}
                className="bg-extreamLightGray"
              />
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
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
                className="bg-extreamLightGray"
              />
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
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
                className="bg-extreamLightGray"
              />
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="text-2xl font-semibold">
                Images
                </label>
              
              <input type="file" multiple accept="image/*" name="images" className=" w-full h-10 text-md text-gray border border-lightgGray rounded-lg cursor-pointer bg-extreamLightGray focus:outline-none  " onChange={handleImage}/>
              
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
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
                className="bg-extreamLightGray"
              />
              <button className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium">
                Update
              </button>
            </div>
            <button className="bg-green hover:bg-lightGreen text-white text-xl font-bold w-full text-center h-14 px-2 py-2 rounded-md " onClick={handleClick}>
                Upload
              </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default User;
