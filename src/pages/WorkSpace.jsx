
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const WorkSpace = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-36 '>
      <div className=" flex flex-col items-center h-screen  bg-[url('/public/work.svg')] bg-no-repeat bg-center bg-contain">
        <div className='w-[900px] bg-extreamLightGray/40 rounded-xl px-5 py-3'>
        <div className='flex text-xl font-bold text-gray gap-5 '>
        <Link to={"/user"} className='hover:underline hover:text-lightBlue'>Want to upload gig? Click here.</Link>
        <Link to={"/hire"} className='hover:underline hover:text-lightBlue'>Do you want to offer professional services? Click here.</Link>
        </div>
        <div className='flex flex-col justify-start items-start'>
        <p className='text-lightGray font-semibold text-xl'>Your Gigs</p>
        
        </div>
        <div className='flex flex-col justify-start items-start'>
        <p className='text-lightGray font-semibold text-xl'>Your Sold Gigs</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default WorkSpace