import React, { useEffect, useState } from 'react'
import {API_YT_CHANNEL_DATA ,API_KEY} from '../config'
export default function VideoCard({id,title ,channelId, channelTitle , thumbnails , viewCount}) {

  const [channelInfo , setChannelInfo] = useState({}) ;
  useEffect(()=>{
    // console.log('channel api' , API_YT_CHANNEL_DATA+`&id=${channelId}`+`&key=${API_KEY}`) ;
    (async()=>{
      const resp = await fetch(API_YT_CHANNEL_DATA+`&id=${channelId}`+`&key=${API_KEY}`) ;
      const json = await resp.json() ;
      // console.log(json) ;
      setChannelInfo({...json.items[0].snippet , ...json.items[0].statistics}) ;
    })()

  } , [])
  return (
    
    <>
      <div className="w-full group   sm:w-11/12 mx-auto bg-white drop-shadow-sm sm:rounded-lg cursor-pointer hover:drop-shadow-md overflow-hidden transition-all duration-200">
        <a href="/">
           <figure className='overflow-hidden rounded-none relative w-full h-56'>
            <img className='bg-slate-300 absolute top-0 left-0 w-full rounded-none sm:rounded-md group-hover:scale-105 block transition-all duration-200'
        src={ thumbnails.maxres?.url ||  thumbnails.medium?.url} alt="thumbnail" />
        </figure>
        {/* <!-- vid info --> */}
        <div className="p-2 space-y-2 cursor-pointer">
              <div className="flex ">
                {/* channel logo */}
                <img className="rounded-full w-10 h-10 mr-2 object-cover ring-2 ring-gray-200" src={channelInfo?.thumbnails?.default?.url || "https://yt3.ggpht.com/cCpapDxnGXB3gr7KmxWY-nt3HMUCfEAVzCu5hVtHh6AQ8Mx0FvJs46Iess0zEgAaFoCQEIFmZBU=s68-c-k-c0x00ffffff-no-rj"} alt=""/>
                {/* <!-- vid -info --> */}
                <div className="">

                <div className="text-sm md:text-base font-semibold ">
                {title}
                <div>
                  <div className="text-sm text-gray-900 ">{channelTitle}</div>
                  <div className="flex items-center">
                  <span className="text-sm  text-gray-800">{Intl.NumberFormat('en',{notation:'compact'}).format(viewCount)}</span>
                  <span className="h-1 w-1 bg-gray-500 mx-1 mt-1  rounded-full"></span>
                  <span className="text-sm text-gray-800" >3 hr ago</span>
                  </div>
                </div>
                </div>

                
              </div>
        </div>
        </div>
        </a>
       
    </div>

    </>
  )
}



// google searches : 

/*
    views formatter : (view were in number like 123456 i need in k,M etc)
    query : How to Format a Number in Thousands K and Millions M in javascript
    link : https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
*/

/*

  time difference calculations : 
    porblem : api is giving upload date as string some how i need to get time difference to show in video info 
    like 2 weeks ago , 3 days ago etc 

  query : find difference between time javascript
  src : https://stackoverflow.com/questions/1787939/check-time-difference-in-javascript
  soln : subtrack both dates

  sub problem : i need to declare date dataType form date string as api was giving of string
  query : declare date in java script 
  src : https://www.w3schools.com/js/js_dates.asp
  soln : give string as it is in new Date('date-str')

  sub problem : date difference was in ms need further conversion
  query : millisecound to days javascript
  src : https://gist.github.com/Erichain/6d2c2bf16fe01edfcffa
  soln : have fun() defined in util

*/ 