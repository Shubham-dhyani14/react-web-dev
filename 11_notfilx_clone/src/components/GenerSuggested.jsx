import React, { useState } from 'react'
import {getVideos} from '../db'
import {imgBaseUrl} from '../constants'
import useFetch from '../hooks/useFetch'
import {fetchMoviesOptions} from '../constants'

export default function GenerSuggested({url , type}) {
  const { data, loading, error } = useFetch(url);
  if(!data) return null ;
  const videos = data.results ;
  // if (!videos.length) return null;
  console.log('rendring movies gener suggestions...');
  {/* slider - wrapper */}
  return (<>
          <div className="my-10 md:my-14">
  
  <h2 className='text-3xl mb-4 md:mb-5 ml-8 text-white font-bold'>{type || 'Movies'}</h2>
      {/* slider */}
    <div className='w-full flex gap-3 overflow-x-scroll no-scrollbar pl-6'>
      {
        videos.map(video=>{
          if(video.backdrop_path)
          {
          return <img key={video.id} src={imgBaseUrl + video.backdrop_path} alt="movie poster"  className='w-56 min-w-[14rem]  aspect-video bg-slate-800 rounded-md '/>
          }
        }) 
      }
    </div>
  </div>
  </>
     
  )
}


// search : https://dev.to/derick1530/how-to-create-scrollable-element-in-tailwind-without-a-scrollbar-4mbd