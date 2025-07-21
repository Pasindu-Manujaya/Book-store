import React, { useEffect, useState } from 'react';
import Bookcard from '../book/Bookcard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Recommended = () => {
    const[books,setbooks]=useState([]);
      
    
     useEffect(()=>{
        fetch("Books.json").then(res=>res.json())
        .then((data)=>setbooks(data))
        },[])

  return (
    <div className='py-16'>
      <h2 className='font-semibold text-2xl'>Recommended for you</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
           1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Navigation]}
        className="mySwiper mt-7"
      >
        {
          books.length > 0 && books.slice(8,18).map(
                    (book,index)=> (
                    <SwiperSlide key={index}><Bookcard  book={book}/></SwiperSlide>
                    
                    ))
                    
        }
        
        
      </Swiper>
    </div>
  )
}

export default Recommended
