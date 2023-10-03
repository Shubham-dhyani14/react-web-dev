import React from 'react'
import VideoCard from './VideoCard'
import Sheemer from './Sheemer'

export default function Body() {
  return (
    <> 
    {/* wrapper for margins */}
    <div className='mt-12 sm:mt-20'>
   
   {/* grid for vids only */}
    <div className=" grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:px-4" >
    <VideoCard/>
    <VideoCard/>
    <VideoCard/>
    <VideoCard/>
    </div>
    </div>
     
    
    </>
   
  )
}
