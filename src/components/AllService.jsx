const AllService = () => {
  const services = [
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg",
      title: "Graphics & Design",
    },
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg",
      title: "Digital Marketing",
    },
    {
        img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg",
        title: "Writing & Translation",
      },
    {
      img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg",
      title: "Video & Animation",
    },
    {
        img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg",
        title: "Music & Audio",
      },
      {
        img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg",
        title: "Programming & Tech",
      },
      {
        img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg",
        title: "Business",
      },
      {
        img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg",
        title: "Lifestyle",
      },
      {
        img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg",
        title: "Data",
      },
      {
        img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg",
        title: "Photography",
      },
  ];
  return (
    <div className="flex flex-col items-start px-14 py-20 ">
      <p className="text-4xl font-bold mb-10">You need it, we&apos;ve got it</p>
      <div className="flex flex-wrap items-center justify-center">
        {services.map((item , index)=>(
            <div className="flex flex-col items-center w-[250px]" key={index}>
            <img
              src={item.img}
              alt=""
              className="w-[100px] h-[100px] border-b-2 border-tertiary hover:border-lightGreen"
            />
            <p>{item.title}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default AllService;
