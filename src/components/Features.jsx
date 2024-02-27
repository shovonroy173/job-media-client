import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Features = () => {
  return (
    <div className='flex items-center justify-between px-14 py-20 bg-lightGreen'>
        <div>
            <p className='text-4xl font-bold mb-10'>The best part? Everything.</p>
            <div className='mb-5'>
                <p className='text-2xl font-semibold'>
                    <CheckCircleOutlineIcon className='mr-2'/>
                    Stick to your budget
                </p>
                <p className='text-lg font-medium text-tertiary'>
                Find the right service for every price point. No hourly rates, just project-based pricing.
                </p>
            </div>
            <div className='mb-5'>
                <p className='text-2xl font-semibold'>
                    <CheckCircleOutlineIcon className='mr-2'/>
                    Get quality work done quickly
                </p>
                <p  className='text-lg font-medium text-tertiary'>
                Hand your project over to a talented freelancer in minutes, get long-lasting results.
                </p>
            </div>
            <div className='mb-5'>
                <p className='text-2xl font-semibold'>
                    <CheckCircleOutlineIcon className='mr-2'/>
                    Pay when you are happy
                </p>
                <p  className='text-lg font-medium text-tertiary'>
                Upfront quotes mean no surprises. Payments only get released when you approve.
                </p>
            </div>
            <div className='mb-5'>
                <p className='text-2xl font-semibold'>
                    <CheckCircleOutlineIcon className='mr-2'/>
                    Count on 24/7 support
                </p>
                <p  className='text-lg font-medium text-tertiary'>
                Our round-the-clock support team is available to help anytime, anywhere.
                </p>
            </div>
        </div>
        <div>
            <video src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" autoPlay controls className='w-[600px]'></video>
        </div>
    </div>
  )
}

export default Features