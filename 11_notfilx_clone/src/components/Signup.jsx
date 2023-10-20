import React from 'react'
import { img_bg_home } from '../constants'
export default function Signup() {
  return (
    <>
      <div className='w-full h-max min-h-screen lg:h-[120vh] relative flex justify-center '>
        <img src={img_bg_home} alt="" className='w-full h-full lg:h-[120vh] absolute top-0  object-cover ' />
        {/* overlay */}
        <div className={`w-full h-full absolute top-0   bg-gradient-to-b from-gray-950/90 via-gray-950/50  to-gray-950/80`}></div>
        {/* sign-up cont */}
        <div className='h-max start-1 mt-36 mb-28 lg:mb-0 w-5/6 md:w-6/12 lg:w-4/12 rounded-md  md:top-1/4 px-8 py-4 md:px-16 md:py-16 bg-gray-950/70 z-20 text-white flex flex-col justify-center gap-6 '> 
            <h1 className='text-3xl text-gray-300 font-semibold mb-4'>Sign-In</h1>
            <input type="text" placeholder='Email' className='w-full h-10 px-4 bg-slate-600 text-gray-200 outline-none focus:ring-2 focus:ring-blue-300 rounded-md'/>
            <input type="text" placeholder='Password' className='w-full h-10 px-4 bg-slate-600 text-gray-200 outline-none focus:ring-2 focus:ring-blue-300 rounded-md'/>

            <button className='w-full h-10 px-4 bg-red-600 focus:ring-2 focus:ring-red-400 font-semibold text-gray-200 outline-none rounded-md mt-4'>Sign In</button>

          <p className='text-slate-500 text-sm -mt-4'>Dhyani Bhai</p>
          <p> <span className='text-gray-400'> New to NotFlix?</span> <span className="cursor-pointer hover:underline">Sign-up now</span></p>
        </div>

      </div>
    </>
    
  )
}
