import React from 'react'
// import { useSearchParams } from 'react-router-dom'
import { useSearchParams } from "react-router-dom" ;

export default function WatchPage() {
  // get id form search query from params
  let [id, setId] = useSearchParams() ;
   
console.log( 'param' , id.get('v')) ;//  baseUrl/vidio?v=34I4b34
  return (
    <div className='h-[90vh] flex justify-center bg-gray-200 md:pt-7'>
      <iframe id="ytplayer" type="text/html" className=' w-full h-2/6 sm:h-3/6 md:h-5/6 lg:h-5/6 md:w-11/12 lg:w-7/12 sm:rounded-md'
src={`https://www.youtube.com/embed/${id.get('v')}?autoplay=1`} allow="autoplay" allowFullScreen></iframe>
    </div>
  )
}
