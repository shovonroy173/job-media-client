import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase.js";
const LinkComponentDetails = ({ setLinkDetails, setUrls  }) => {
  //   console.log(setLinkDetails);
  LinkComponentDetails.propTypes = {
    setLinkDetails: PropTypes.func.isRequired, // Ensure setLinkDetails is a function and is required
    setUrls: PropTypes.func.isRequired, // Ensure setLinkDetails is a function and is required
   
    // Add other prop types as needed
  };


  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const [images, setImages] = useState([]);
  const [inputs, setInputs] = useState();

  const handleLinks = () => {
    setLinkDetails((prev) => [...prev, inputs]);
  };
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
  return (
    <div className="flex flex-col justify-start space-y-1">
      <label htmlFor="" className="text-2xl font-semibold">
        Title
      </label>
      <textarea
        type="text"
        name="title"
        id=""
        onChange={handleChange}
        className="bg-extreamLightGray mr-2"
      />
      <label htmlFor="" className="text-2xl font-semibold">
        Image 1
      </label>

      <input
        type="file"
        multiple
        accept="image/*"
        name="images"
        className=" w-full h-10 text-md text-gray border border-lightgGray rounded-lg cursor-pointer bg-extreamLightGray focus:outline-none  "
        onChange={handleImage}
      />
      <label htmlFor="" className="text-2xl font-semibold">
        Description
      </label>
      <textarea
        type="text"
        name="desc"
        id=""
        onChange={handleChange}
        className="bg-extreamLightGray mr-2"
      />
            <label htmlFor="" className="text-2xl font-semibold">
        Image 2
      </label>

      <input
        type="file"
        multiple
        accept="image/*"
        name="images"
        className=" w-full h-10 text-md text-gray border border-lightgGray rounded-lg cursor-pointer bg-extreamLightGray focus:outline-none  "
        onChange={handleImage}
      />
      <button
        className="bg-extreamLightGreen w-16 h-10 px-2 py-2 rounded-md font-medium"
        onClick={handleLinks}
      >
        Update
      </button>
    </div>
  );
};

export default LinkComponentDetails;
