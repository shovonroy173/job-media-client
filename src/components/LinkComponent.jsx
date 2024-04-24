import { useState } from "react";
import PropTypes from 'prop-types';
const LinkComponent = ({setLinks }) => {
  // console.log(setLinks );
  LinkComponent.propTypes = {
    setLinks: PropTypes.func.isRequired, // Ensure setLinks is a function and is required
    // Add other prop types as needed
  };

  const [link, setLink] = useState("");
  const handleLinks = () => {
    setLinks((prev) => [...prev, link]);

  };
//   const [links, setLinks] = useState([]);
  return (
    <div className="flex justify-between items-center">
      <textarea
        type="text"
        name="links"
        id=""
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="bg-extreamLightGray mr-2 w-full"
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

export default LinkComponent;
