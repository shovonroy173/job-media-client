import Navbar from "../components/Navbar";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const items = [
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/6391413/original/1f6d61882949cf993d547729665b20eb32f82ad7.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/6391413/original/1f6d61882949cf993d547729665b20eb32f82ad7.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/6391413/original/1f6d61882949cf993d547729665b20eb32f82ad7.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/6391413/original/1f6d61882949cf993d547729665b20eb32f82ad7.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148451927/original/8fd88e53637c1a51087e5b8a5adbfb8507d3936b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148451927/original/8fd88e53637c1a51087e5b8a5adbfb8507d3936b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/16778964/original/463ceb3884c70f72d3128d51ae4fe87a233d303b.png",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/16778964/original/463ceb3884c70f72d3128d51ae4fe87a233d303b.png",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/313210882/original/e8594c9a8c78c0cd5dcc0736a0548321a24c8879.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/139714492/original/26b0232c1666efb38959c1453d990dade64d0d4c.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/327590710/original/f64c53e2a06cc996368097c22a4b37cc2bd64c3b.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/110928855/original/c3fc46f6ac4d0287a2511cf5b06144aaa499326d.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
  {
    img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/152144644/original/b3d1df422b12277a3f26d57f263f91b53c044f30.jpg",
    name: "Alisha",
    level: "Level 2",
    desc: "I will design unique modern minimalist and business logo design",
    rating: "4.9",
    votes: "422",
    price: "1742",
  },
];
const CategoriesPage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const [gigs , setGigs] = useState([]);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = gigs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(gigs.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };
  const location = useLocation();
  console.log(location);
  const pathType = location.pathname.split("/")[2];
  
  // const convert = (pathType)=>{
  //   return pathType
  //   .split('&')
  //   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //   .join(' & ');
  // };
  // const type = convert(pathType);
  const type = decodeURIComponent(pathType).replace(/ /g, '')
  console.log(type);
  // const title = (location.state).split(' ').join('');

const options = {
  method: 'POST',
  url: 'https://api.textcortex.com/v1/texts/products/titles',
  headers: {'Content-Type': 'application/json', Authorization: `Bearer gAAAAABl7L9c1zIHNGHE9eVJkuRdOGa-gkO9UGY3aHDS0ZNysTMxoFm0rnzbdpC3yWZsCNUBOcwRBxrGclFT8TbOvNXuYU81_1f368OK_9pkLQCXOth65RDcLSGsMMgK2mctGeu9UYKr `},
  data: {
    brand: pathType,
    category: location.state,
    description: pathType + location.state,
    formality: 'default',
    keywords: ['authentic' , 'exclusive' , 'astonishing' , 'masterpiece' , 'stand out'],
    max_tokens: 2048,
    model: 'chat-sophos-1',
    n: 1,
    name: 'jobs-media',
    source_lang: "en",
    target_lang: 'en',
    temperature: 0.65
  }
};

const [desc , setDesc] = useState("")
useEffect(()=>{
  axios.request(options).then(function (response) {
    setDesc(response.data.data.outputs[0].text);
  }).catch(function (error) {
    console.error(error);
  });
} , []);

useEffect(()=>{
const getGigs = async()=>{
  const res = await axios.get(`http://localhost:5000/api/gig/getGigsByTypes/${location.state}/${pathType}` );
  console.log("LINE AT 340" , res.data);
  setGigs(res.data);
}
getGigs();
} , [location.state , pathType])

const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="px-14 w-full  ">

        <div className="flex flex-col justify-between pt-36 ">
          <p className="flex items-center font-semibold ">
            <NavLink to="/"><HomeIcon  /> </NavLink>
            <span className="mx-5">/</span>
            <span>{type}</span>
          </p>
          <p className="text-4xl font-extrabold">Logo Design</p>
          <p className="text-tertiary font-semibold">
            {desc}
          </p>
          <div className="flex justify-between items-center ">
            <div className="flex">
              <input
                type="text"
                placeholder="title.."
                className="h-12 rounded-s-lg px-3 outline-none"
              />
              <div className="h-12 bg-lightGreen p-3 rounded-e-lg">
                <SearchIcon />
              </div>
            </div>
            <div className="flex justify-between w-[350px]">
              <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Sort by:
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="age"
                    label="Sort by:"
                    //   onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Filter by:
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="age"
                    label="Filter by:"
                    //   onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>

        <div className="my-10 flex items-center flex-wrap justify-between ">
          {currentItems.map((item, index) => (
            <div
              className="w-[300px] h-[350px]  font-extrabold mb-5 relative"
              key={index}
              onClick={()=>navigate(`/gig/${pathType}/${item._id}`)}
            >
              <img
                src={item.urls[0]}
                alt=""
                className="w-[300px] object-cover rounded-xl "
              />
              <FavoriteBorderIcon className="absolute top-3 right-3 hover:scale-150 rounded-full" />
              <div className="flex flex-col justify-around h-[150px]">
                <p className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8563cebd23d715b3b35b807044964727-1611653633994/c0622120-e351-4950-95ea-ff9db5b82119.jpg"
                      alt=""
                      className="w-[30px] h-[30px] object-cover rounded-full"
                    />
                    <p>{item.author.name}</p>
                  </div>
                  <p>Level {item.author.level}</p>
                  
                </p>
                <p className=" font-medium">{item.description}</p>
                <p className="flex items-center">
                  <StarIcon /> {item.rating}{" "}
                  <span className="text-tertiary">({item.votes})</span>
                </p>
                <p>From ${item.basePrice[0]}</p>
              </div>
            </div>
          ))}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="flex items-center justify-center h-20 mb-20"
          pageLinkClassName="rounded-full mx-5 text-xl font-bold text-lightGreen "
          activeClassName="px-0 py-2 rounded-full mx-5 text-xl font-bold bg-white border-2 border-lightGreen"
          previousClassName="font-lg font-semibold text-lightGreen"
          nextClassName="font-lg font-semibold text-lightGreen"
        />
      </div>
      <Footer/>
    </>
    
  );
};

export default CategoriesPage;
