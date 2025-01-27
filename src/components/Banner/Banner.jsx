import React from 'react'
 //import BooksStack from "../../assets/website/books-stack.png";
import LibraryImg from "../../assets/website/library.jpg";
//import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const Banner = () => {
  return (
    <>
     <div className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <img
                data-aos="zoom-in"
                  src={LibraryImg}
                  alt=""
                   className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                />
              </div>
              {/* text content section */}
                 <div 
                 data-aos="slide-up"
                 className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Library at your fingertips
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio?
                </p>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <GrSecure  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                        <p>Quality Books</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <GrSecure  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                        <p>Fast Delivery</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <GrSecure  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                        <p>Easy Payment method</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <GrSecure  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                        <p>Get offers on books</p>
                    </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner