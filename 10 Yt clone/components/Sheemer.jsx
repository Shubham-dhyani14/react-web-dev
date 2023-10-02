import React from 'react'

export default function Sheemer() {
  return (
    <div  class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4 " 
    >
        <div class="w-full sm:w-10/12 mx-auto  lg:w-80 bg-white drop-shadow-sm rounded-lg ">
            <div class="animate-pulse w-full h-52 bg-slate-300"></div>
            <div class="p-2 space-y-2">
                <div class="animate-pulse w-2/3 h-6 bg-slate-300"></div>
                <div class="animate-pulse w-2/4 h-3 bg-slate-300"></div>
              </div>
        </div>
  </div>
  )
}
