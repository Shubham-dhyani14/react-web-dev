import React from 'react'
import {getImages, popularMovies , getVideos} from '../db'
import {imgBaseUrl} from '../constants'
import SuggestedMovies from './GenerSuggested'
export default function FeaturedMovie() {
  return (
    // h-screen to below for h = screen 
    <>
    <div className='w-full relative overflow-hidden '>
      <iframe className='aspect-video w-full '  src="https://www.youtube.com/embed/1qgWburt3b8?autoplay=0&mute=1&loop=1&si=aov1zMRTA0MXq5yM&playlist=1qgWburt3b8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
      {/* overlay-info */}
      <div className='flex  items-center absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-950/80 to-transparent'>
        <div className="flex md:w-5/12 lg:w-4/12 ml-8 gap-4 flex-col text-white">
          <img className='w-9/12 hidden md:block' src={imgBaseUrl + getImages.logos[0].file_path} alt="" />
          <div className="info text-sm lg:text-lg hidden md:block">{popularMovies.results[0].overview.slice(0,140)+'...'}</div>
          {/* btn */}
          <div className="flex gap-3 lg:text-2xl flex-col md:flex-row ">
            <button className='bg-gray-100/90 hover:bg-slate-100 text-black  font-bold px-5 py-2 rounded-md flex items-center justify-center gap-2'>
            <ion-icon name="play"></ion-icon>  Play</button>
            <button className='bg-slate-700/40 hover:bg-slate-700/50  flex items-center gap-2  font-bold px-5 py-2 rounded-md'>
            <ion-icon name="information-circle-outline"></ion-icon><span className='mb-1'>More Info</span></button>
          </div>
        </div>
      </div>
    </div>
    <SuggestedMovies/>
    </>

  )
}


// https://stackoverflow.com/questions/26617154/responsive-fullscreen-youtube-video-with-no-black-bars