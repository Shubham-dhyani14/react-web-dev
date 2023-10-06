import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import VideoCard from './VideoCard'
import Sheemer from './Sheemer'
import {API_YT_VID_DATA} from '../config'
export default function Videos() {
  const [videos , setVideos] = useState([]);
  useEffect(()=>{
    console.log('useeffect' , API_YT_VID_DATA) ;
    (async()=>{
      const response = await fetch(API_YT_VID_DATA) ;
      const data = await response.json() ;
      setVideos(data.items) ;
      // const obj = {...videos[0].snippet , ...videos[0].statistics} ;
      console.log("videos :" , videos) ; 
    })() ;
  } , [])
  return (
    <> 
    {/* wrapper for margins (no need added in header in seperate div)*/}
    {/* <div className='mt-12 sm:mt-20'> */} 
   
   {/* grid for vids only */}
    <div className=" grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:px-4" >
    {
      videos.map((video)=>{
        return   <VideoCard key={video.id}  {...{id:video.id , ...video.snippet , ...video.statistics}}/>
      })
    }
    </div>
    {/* </div> */}
     
    
    </>
   
  )
}
