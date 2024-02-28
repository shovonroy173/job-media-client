import VerifiedIcon from '@mui/icons-material/Verified';
const Buisness = () => {
  return (
    <div className='flex items-center justify-between px-14 py-20 bg-blue text-white rounded-3xl'>
        <div>
        <p className='text-2xl font-bold mb-10 '>
            <span className='text-5xl'>jobs</span><span className='text-lightGreen'>.</span>  Buisness Solutions 
        </p>
            <p className='text-4xl font-bold mb-10'>Advanced solutions and professional talent for businesses</p>
            <div className='mb-5 flex items-center '>
            <VerifiedIcon className='mr-2'/>
            <div>
                <p className='text-lg font-semibold'>
                    
                Fiverr Pro
                </p>
                <p className='text-lg font-medium '>
                Access top freelancers and professional business tools for any project
                </p>
                </div>
            </div>
            <div className='mb-5 flex items-center'>
            <VerifiedIcon className='mr-2 '/>
            <div>
                <p className='text-lg font-semibold'>
                    
                Fiverr Pro
                </p>
                <p className='text-lg font-medium '>
                Access top freelancers and professional business tools for any project
                </p>
                </div>
            </div>
            <div className='mb-5 flex items-center'>
            <VerifiedIcon className='mr-2'/>
            <div>
                <p className='text-lg font-semibold'>
                    
                Fiverr Pro
                </p>
                <p className='text-lg font-medium '>
                Access top freelancers and professional business tools for any project
                </p>
                </div>
            </div>
            <button className='outline-none px-6 py-3 bg-white text-secondary font-bold text-xl rounded-md'>Learn more</button>
            
        </div>
        <div>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
        </div>
    </div>
  )
}

export default Buisness