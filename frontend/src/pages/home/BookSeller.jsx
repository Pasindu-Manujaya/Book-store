import React, { useEffect } from 'react'
import { useState } from 'react'
import Bookcard from '../book/Bookcard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const catagories=["Choose a genre","Business","Fiction","Horror","Adventure"];

const BookSeller = () => {
  const[books,setbooks]=useState([]);
  const[selectedCategory,setSelectedCategory]=useState("Choose a genre");

  useEffect(()=>{
    fetch("Books.json").then(res=>res.json())
    .then((data)=>setbooks(data))
    },[])
    
    

    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => 
                          book.category === selectedCategory.toLowerCase())
    
    return (
    <div className='py-10'>
      <h2 className='font-semibold text-2xl'>Top Sellers</h2>
      <div className='mt-2 mb-2 flex items-center'>
             <select className='bg-[#EAEAEA] rounded-md py-2 px-4 border
                  border-gray-300 focus:outline-none' onChange={(e)=>setSelectedCategory(e.target.value)}>
                  {
                    catagories.map((catagory,index)=>(
                              <option key={index} value={catagory} >{catagory}</option>
                    
                    ))
                  }

             </select>
             
      </div>
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
          filteredBooks.length > 0 && filteredBooks.map(
                    (book,index)=> (
                    <SwiperSlide key={index}><Bookcard  book={book}/></SwiperSlide>
                    
                    ))
                    
        }
        
        
      </Swiper>
      
    </div>
  )
}

export default BookSeller
