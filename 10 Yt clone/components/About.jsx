import React from 'react'
import 'dotenv/config'

console.log('dotev',process.env.API) // remove this after
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div className='mt-2 mx-4'>
      <div>Made with ❤️ by <span className='text-red-600 font-semibold text-lg'>Dhyani Bhai</span> .
      
    </div>
    <p>
      Special Thank to <Link to={'/watch?v=SSsJSPeNlJQ'} className='text-purple-700 font-semibold text-md'>Dehati Madam
      <span className='text-blue-500'> (link) </span>
      </Link>
      who helped me to learn and Conqueror over English . Whithout <span className="font-semibold">Dehati Madam </span>
       I can't even thought to write this in English.
    </p>

    <div className='font-bold text-xl my-2'>Attached Videos 📌</div>

    <div>
        <p>1. Learn English From Dehati Mam 😊</p>
    <iframe id="ytplayer" type="text/html" className=' w-full mb-3 mt-2 aspect-video h-52 md:h-96 md:w-11/12 lg:w-6/12 sm:rounded-md'
src={`https://www.youtube.com/embed/SSsJSPeNlJQ?autoplay=0`} allow="autoplay" allowFullScreen></iframe>

        <p>2. Learn Coding this way 💻</p>
    <iframe id="ytplayer" type="text/html" className='  w-7/12 mb-3 mt-2 h-96 rounded-md'
src={`https://www.youtube.com/embed/GPhbe-__RLM?autoplay=0`} allow="autoplay" allowFullScreen></iframe>
        
        <p>3. How 10 years of coding looks like  🔥</p>
    <iframe id="ytplayer" type="text/html" className=' w-7/12 mb-3 mt-2 h-96 rounded-md'
src={`https://www.youtube.com/embed/FIZI3k7mTvA?autoplay=0`} allow="autoplay" allowFullScreen></iframe>
   
    </div>
    </div>
  )
}
// https://youtube.com/shorts/u_eG4EaZ6uk?si=yI1vlhi9_qhwKJ61 //internal pointer variable