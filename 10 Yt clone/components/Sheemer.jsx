import React from 'react'

function VideosSheemer() {
  return (
    // <div  className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4 " 
    // >
        <div className="w-full sm:w-11/12 mx-auto bg-white drop-shadow-sm rounded-lg ">
            <div className="animate-pulse w-full h-52 bg-slate-300"></div>
            <div className="p-2 space-y-2">
                <div className="animate-pulse w-2/3 h-6 bg-slate-300"></div>
                <div className="animate-pulse w-2/4 h-3 bg-slate-300"></div>
              </div>
        </div>
  // </div>
  )
}

export default function Sheemer(){
  return <>
          {

            Array(9).fill(' ').map((el)=>{return <VideosSheemer/>})
          }
        </>
}