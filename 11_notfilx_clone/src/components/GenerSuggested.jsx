import React from 'react'
import {getVideos} from '../db'
import {imgBaseUrl} from '../constants'

export default function GenerSuggested() {
    const videos = getVideos.results ;
  return (
    <div className='bg-zinc-900 pt-1'>
      {/* slider - wrapper */}
        <div className='md:-mt-44 relative z-20'>
          {/* slider */}
          {Array(6).fill('x').map(e=>{
            return (<div className="my-10 md:my-14">
            <h2 className='text-3xl mb-4 md:mb-5 ml-8 text-white font-bold'>Popular</h2>
            <div className='w-full flex gap-5 overflow-x-scroll no-scrollbar pl-6'>
            <img  src={imgBaseUrl + videos[0].backdrop_path} alt=""  className='w-56 rounded-md '/>
            <img  src={imgBaseUrl + videos[0].backdrop_path} alt=""  className='w-56 rounded-md '/>
            <img  src={imgBaseUrl + videos[0].backdrop_path} alt=""  className='w-56 rounded-md '/>
            <img  src={imgBaseUrl + videos[0].backdrop_path} alt=""  className='w-56 rounded-md '/>
            <img  src={imgBaseUrl + videos[0].backdrop_path} alt=""  className='w-56 rounded-md '/>
            <img  src={imgBaseUrl + videos[0].backdrop_path} alt=""  className='w-56 rounded-md '/>
            <img  src={imgBaseUrl + videos[0].backdrop_path} alt=""  className='w-56 rounded-md '/>
            <img  src={imgBaseUrl + videos[0].backdrop_path} alt=""  className='w-56 rounded-md '/>
            <img  src={imgBaseUrl + videos[0].backdrop_path} alt=""  className='w-56 rounded-md '/>
            <img  src={imgBaseUrl + videos[0].backdrop_path} alt=""  className='w-56 rounded-md '/>
            </div>
        </div>)
          })}
        
      </div>
    </div>
  )
}


// search : https://dev.to/derick1530/how-to-create-scrollable-element-in-tailwind-without-a-scrollbar-4mbd