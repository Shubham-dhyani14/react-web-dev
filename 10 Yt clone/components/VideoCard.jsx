import React from 'react'

export default function VideoCard() {
  return (
    <>
      <div className="w-full  sm:w-11/12 mx-auto  bg-white drop-shadow-sm rounded-lg ">
            <img className='bg-slate-300 sm:rounded-md'
            src="https://i.ytimg.com/vi/ZgcIwHoLGKE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEMw8fx68dH4uqpLIYC1fX_Jdq4w" alt="thumbnail" />
        {/* <!-- vid info --> */}
            <div className="p-2 space-y-2">
              <div className="flex ">
                {/* thumb */}
                <img className="rounded-full w-10 h-10 mr-2" src="https://yt3.ggpht.com/cCpapDxnGXB3gr7KmxWY-nt3HMUCfEAVzCu5hVtHh6AQ8Mx0FvJs46Iess0zEgAaFoCQEIFmZBU=s68-c-k-c0x00ffffff-no-rj" alt=""/>
                <div className="">

                <div className="text-sm md:text-base font-semibold ">
                GANAPATH | Hindi Teaser | Amitabh B, Tiger S, Kriti S ❘ Vikas B, Jackky B....
                {/* <!-- vid -info --> */}
                <div>
                  <div className="text-sm text-gray-900">T-Series</div>
                  <div className="flex items-center">
                  <span className="text-sm  text-gray-800">100k views</span>
                  <span className="h-1 w-1 bg-gray-500 mx-1 mt-1  rounded-full"></span>
                  <span className="text-sm text-gray-800" >3 hr ago</span>
                  </div>
                </div>
                </div>

                
              </div>
        </div>
    </div>
    </div>

    </>
  )
}
