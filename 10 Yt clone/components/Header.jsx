import React from 'react'
import { useState } from 'react'

export default function Header() {
    const [sectionShown , setSectionShown] = useState(false);
    function toggleSidebar(){
        setSectionShown(!sectionShown) ;
    }
  return (
    <header className='w-full top-0 p-1 sm:p-2 md:p-4  shadow-sm fixed z-10 m bg-white'>
        <Sidebar sectionShown={sectionShown} setSectionShown={setSectionShown} toggleSidebar={toggleSidebar}/>
        <nav className='flex justify-between items-center'>
            {/* logo and toogle-menu */}
            <div className='flex items-center'>
                <div className='w-8 h-8  p-1 text-center rounded-full hover:bg-slate-300'
                onClick={toggleSidebar}
                >
                    <i className="fa-solid fa-bars fa-lg"></i>
                </div>
                <img className='h-5 ml-1 md:h-6 md:ml-4' src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="logo-Yt" />
            </div>
            {/* search bar */}
            <section className='hidden  w-6/12 md:flex gap-1  rounded-full px-2  border-black'>
                <input placeholder='KhOJO...' className='w-10/12 px-2 ring-2 rounded-full ring-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-0' type="text" />
                <button className='px-2 py-1 rounded-full border-2 bg-gray-600 hover:bg-gray-500 text-gray-50'><i class="fa-solid fa-magnifying-glass"></i></button>
            </section>
            {/* sign */}
            <button className='bg-indigo-600 hover:bg-indigo-500 px-2 text-sm md:text-base py-1 text-gray-50 rounded-lg'>About</button>
        </nav>
    </header>
  )
}


function Sidebar({sectionShown , toggleSidebar}){
    
    return (
    <> 
    <aside className= {`w-42  p-1 sm:p-2 md:p-4  ${sectionShown && '-translate-x-48' }  transition-transform duration-300 bg-gray-200  bg-opacity-95  absolute top-0 left-0 h-screen`} >
        {/* logo and toogle-menu */}
        <div className='flex items-center'>
                <div className='w-8 h-8  p-1 text-center rounded-full hover:bg-slate-300'
                onClick={toggleSidebar}
                
                >
                    <i className="fa-solid fa-bars fa-lg"></i>
                </div>
                <img className='h-5 ml-1 md:h-6 md:ml-4' src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="logo-Yt" />
        </div>
        {/* menu options */}
        <ul className='mt-4'>
            <li className="hover:bg-slate-300 px-1 py-1 rounded-lg transition-all duration-200"  ><a href="/" className='flex items-center'><span className="material-symbols-rounded">home</span> <p className='ml-3 md:ml-5'>Home</p> </a></li>


            <li  className="hover:bg-slate-300 px-1 py-1 rounded-lg transition-all duration-200" ><a href="/" className='flex items-center '><span className="material-symbols-rounded">movie</span> <p className='ml-3 md:ml-5'>Shorts</p> </a></li>
            <hr />

            <li className="hover:bg-slate-300 px-1 py-1 rounded-lg transition-all duration-200" ><a href="/" className='flex items-center '><span className="material-symbols-rounded "><span className="material-symbols-rounded">
subscriptions
</span></span> <p className='ml-3 md:ml-5'>Subscriptions</p> </a></li>
            <hr />

            <li className="hover:bg-slate-300 px-1 py-1 rounded-lg transition-all duration-200"  ><a href="/" className='flex items-center  '><span className="material-symbols-rounded">
video_library
</span><p className='ml-3 md:ml-5'>Shorts</p> </a></li>
            <hr />
        </ul>
        {/* mr-4 md:mr-6 */}
    </aside>
    </>)
}