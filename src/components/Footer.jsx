import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
const Footer = () => {
  return (
    <div className=" bg-white text-tertiary  bottom-0 w-full flex justify-between px-14 items-center h-16 border-t-2">
      <div className="flex ">
        <p className="text-2xl font-bold">
          jobs <span>.</span>
        </p>
        <p className=" text-xl font-medium">shovon & co.</p>
      </div>
      <div className=" font-xl">
        <FacebookIcon />
        <YouTubeIcon />
        <XIcon />
        <LinkedInIcon />
        <PinterestIcon />
      </div>
    </div>
  );
};

export default Footer;
