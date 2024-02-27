import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Services = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='px-14   py-20'>
        <p className='text-4xl font-semibold mb-10'>Popular Services</p>
    <Carousel responsive={responsive} infinite={true}  swipeable={false}
  draggable={false}
  >
    <div className='relative text-white'>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" alt="" className='rounded-md' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Build your brand</p>
        <p className='text-2xl font-bold'>Logo Design</p>
      </div>
    </div>
    <div className='relative text-white'>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" alt="" className='rounded-md' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Build your brand</p>
        <p className='text-2xl font-bold'>Logo Design</p>
      </div>
    </div>
    <div className='relative text-white'>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" alt="" className='rounded-md' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Build your brand</p>
        <p className='text-2xl font-bold'>Logo Design</p>
      </div>
    </div>
    <div className='relative text-white'>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" alt="" className='rounded-md' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Build your brand</p>
        <p className='text-2xl font-bold'>Logo Design</p>
      </div>
    </div>
    <div className='relative text-white'>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" alt="" className='rounded-md' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Build your brand</p>
        <p className='text-2xl font-bold'>Logo Design</p>
      </div>
    </div>
    <div className='relative text-white'>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" alt="" className='rounded-md' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Build your brand</p>
        <p className='text-2xl font-bold'>Logo Design</p>
      </div>
    </div>
    <div className='relative text-white'>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" alt="" className='rounded-md' />
      <div className='absolute top-3 left-3'>
        <p className='text-sm font-medium'>Build your brand</p>
        <p className='text-2xl font-bold'>Logo Design</p>
      </div>
    </div>
  </Carousel>
    </div>
  )
}

export default Services