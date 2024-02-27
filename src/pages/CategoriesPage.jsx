import Navbar from "../components/Navbar";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import StarIcon from '@mui/icons-material/Star';
const CategoriesPage = () => {
  return (
    <>
      <Navbar />

        <div className="absolute top-32 px-14 w-full bg-pink">
          <p>
            <HomeIcon /> / Graphics & Design
          </p>
          <p>Logo Design</p>
          <p>
            Stand out from the crowd with a logo that fits your brand
            personality
          </p>
          <div className="flex justify-between items-center">
            <div className="flex">
              <input type="text" placeholder="title.." className="h-12 rounded-s-lg px-3 outline-none" />
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
          <div>
            <div className="w-[250px] bg-white font-extrabold">
                <img src="https://fiverr-res.cloudinary.com/t_gig_card_delivery_image_1x,q_auto,f_auto/attachments/delivery/asset/d586def7b35c6dec2e2709d86a633672-1677166940/malina.png" alt="" className="w-[250px] object-cover" />
                <p className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8563cebd23d715b3b35b807044964727-1611653633994/c0622120-e351-4950-95ea-ff9db5b82119.jpg" alt="" className="w-[40px] h-[40px] object-cover rounded-full" />
                        <p>Alisha</p>
                    </div>
                    Level 2
                </p>
                <p className=" font-medium">
                I will do premium creative minimalist business logo design
                </p>
                <p>
<StarIcon/> 4.9 <span className="text-tertiary">(419)</span>
                </p>
                <p>
                    From $1,741
                </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default CategoriesPage;
