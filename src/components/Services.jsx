import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
const Services = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const navigate = useNavigate();
  return (
    <div className='px-14   py-20'>
        <p className='text-4xl font-semibold mb-10'>Popular Services</p>
    <Carousel responsive={responsive} infinite={true}  swipeable={true}
  draggable={true}
  >
    <div className='relative text-white' onClick={
      () =>{navigate(`/categories/Graphics & Design/AI Artists` , {state:"AI Artists"})}}
    >
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png" alt="" className='rounded-md w-[300px] h-[400px]' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Add talent to AI</p>
        <p className='text-2xl font-bold'>AI Artists</p>
      </div>
    </div>
    <div className='relative text-white' onClick={
      () =>{navigate(`/categories/Graphics & Design/Logo Design`, {state:"Logo Design"})}}>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" alt="" className='rounded-md   w-[300px] h-[400px]' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Build your brand</p>
        <p className='text-2xl font-bold'>Logo Design</p>
      </div>
    </div>
    <div className='relative text-white' onClick={
      () =>{navigate(`/categories/Programming & Tech/WordPress` , {state:"WordPress"})}}>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png" alt="" className=' rounded-md  w-[300px] h-[400px]' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Customize your website</p>
        <p className='text-2xl font-bold'>WordPress</p>
      </div>
    </div>
    <div className='relative text-white'onClick={
      () =>{navigate(`/categories/Music & Audio/Voice Over` , {state:"Voice Over"})}}>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png" alt="" className=' rounded-md  w-[300px] h-[400px]' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Share your mesage</p>
        <p className='text-2xl font-bold'>Voice Over</p>
      </div>
    </div>
    <div className='relative text-white' onClick={
      () =>{navigate(`/categories/Video & Animation/Video Explainer`) , {state:"Video Explainer"}}}>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png" alt="" className=' rounded-md  w-[300px] h-[400px]' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Engage your audience</p>
        <p className='text-2xl font-bold'>Video Explainer</p>
      </div>
    </div>
    <div className='relative text-white' onClick={
      () =>{navigate(`/categories/Digital Marketing/Social Media"`) , {state:"Social Media"}}}>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png" alt="" className=' rounded-md  w-[300px] h-[400px]' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Reach more customers</p>
        <p className='text-2xl font-bold'>Social Media</p>
      </div>
    </div>
    <div className='relative text-white' onClick={
      () =>{navigate(`/categories/Writing & Translation/Transalation`) , {state:"Transalation"}}}>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/translation-2x.png" alt="" className=' rounded-md  w-[300px] h-[400px]' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Go global</p>
        <p className='text-2xl font-bold'>Transalation</p>
      </div>
    </div>
    <div className='relative text-white' onClick={
      () =>{navigate(`/categories/Data/Data Entry`) , {state:"Data Entry"}}}>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161248/data-entry-2x.png" alt="" className=' rounded-md  w-[300px] h-[400px]' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Learn your buisness</p>
        <p className='text-2xl font-bold'>Data Entry</p>
      </div>
    </div>
    <div className='relative text-white' onClick={
      () =>{navigate(`/categories/Digital Marketing/SEO`) , {state:"SEO"}}}>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/27f914ed7984fdd2d55aa1fb5e74bd6a-1690384243592/seo-2x.png" alt="" className=' rounded-md  w-[300px] h-[400px]' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Unlock growth online</p>
        <p className='text-2xl font-bold'>SEO</p>
      </div>
    </div>
  </Carousel>
    </div>
  )
}

export default Services