import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import avatarImg from "../assets/avatar.png";

const Navbar = () => {
   const [IsdropdownOpen,setIsdropdownOpen] = useState(false);
   

   const naviagation = [
      {name:'Dashboard',href:'/dashboard'},
      {name:'Orders',href:'/order'},
      {name:'Cart page',href:'/cart'},
      {name:'Check out',href:'/checkout'}
   ]

   const currentuser=false;
    return(
     <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center ' >
          {/*left section */}
          <div className='flex items-center gap-4 md:gap-16'>
               <Link to="/">
                  <HiOutlineBars3CenterLeft className='w-6 h-6 focus:outline-none'/>
               </Link>
               {/*search input*/}
               <div className='relative w-40 sm:w-72 space-x-2'>
                  <IoSearchOutline className='absolute inline-block left-3 inset-y-2'/>
                  <input type='text' placeholder='Search here' className='bg-[#EAEAEA] w-full focus: outline-none rounded-md px-6 py-1 md:px-8'></input>
               </div>
          </div>
          {/*right section */} 
          <div className='flex items-center space-x-2 md:space-x-3 '>
            <div >{
                  currentuser ? <><button onClick={()=> setIsdropdownOpen(!IsdropdownOpen)}> <img src={avatarImg} className={`w-6 h-6 rounded-full ${currentuser ? 'ring-2 ring-blue-500' :''}`}></img></button>
                  {/*show drop down*/}
                  {
                     IsdropdownOpen && (
                        <div className='absolute right-0 mt-2 rounded-md w-48 bg-white shadow-lg z-40'>
                            <ul>
                               {
                                 naviagation.map((item)=> (
                                      <li key={item.name} onClick={()=>setIsdropdownOpen(false)}>
                                        <Link to={item.href} className='block hover:bg-gray-100 px-4 py-2 text-sm'> {item.name}</Link>
                                      </li>
                                 ))
                               }
                            </ul>
                        </div>
                     )
                  }
                  </>
                  : <Link to='/login'><FaRegUser className='w-6 h-6'/></Link>
                       }
            </div>
            
            <button className='hidden md:block'><IoIosHeartEmpty className='w-6 h-6' /></button>
            <Link to='/cart' className='bg-primary flex items-center rounded-sm p-1 px-2 sm:px-6'>
               <BsCart3 />
               <span className='font-semibold text-sm sm:ml-1'>0</span>
            </Link>
          </div>
        </nav>

     </header>
    )
}

export default  Navbar;





