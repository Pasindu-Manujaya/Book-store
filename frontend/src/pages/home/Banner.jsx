import React from 'react'
import BannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className='flex md:flex-row-reverse flex-col'>
        <div className='md:w-1/2 w-full flex justify-end md:mb-0 mb-2'>
            <img src={BannerImg}/>
        </div>
        <div className='md:w-1/2 w-full'>
             <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
             <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world.
               From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
              <button className='btn-primary'>Subscribe</button> 
        </div>

        
    </div>
  )
}

export default Banner
