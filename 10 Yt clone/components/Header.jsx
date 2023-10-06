import React from 'react'
import { useState } from 'react'

export default function Header() {
    const [sectionShown , setSectionShown] = useState(false);
    const [isMobileSearchShown , setIsMobileSearchShown] = useState(false);
    function toggleSidebar(){
        setSectionShown(!sectionShown) ;
    }
  return (
    <>
    <header className='fixed w-full top-0 p-1 sm:p-2 md:p-4  shadow-sm  z-10  bg-white'>
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
            <section className='hidden  w-5/12 md:flex items-center gap-1 rounded-full px-2  border-black'>
                <div className='relative w-full '>
                    <input placeholder='KhOJO...' className='w-full px-2 py-1 ring-2 rounded-full ring-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-0' type="text" />
                    <ul className='absolute w-full rounded-lg translate-y-full -my-1 py-2 bottom-0 left-0 ring-1 ring-gray-200 bg-white shadow-md'>
                        <li className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>item</li>
                        <li className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>item</li>
                        <li className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>item</li>
                    </ul>
                </div>
                <button className='px-2 py-1 rounded-full border-2 bg-gray-600 hover:bg-gray-500 text-gray-50'><i className="fa-solid fa-magnifying-glass"></i></button>
            </section>
            {/* nav left - sign */}
            <div className='flex gap-1 items-center'>
                
                <button onClick={()=>{setIsMobileSearchShown(false)}}  className={ `sm:hidden px-2 py-1 rounded-full border-2 bg-gray-600 hover:bg-gray-500 text-gray-50`}>
                    <label htmlFor="search"><i className="fa-solid fa-magnifying-glass fa-"></i>
                    </label>
                </button>
                <button className='bg-indigo-600 hover:bg-indigo-500 px-2 text-sm md:text-base py-1 text-gray-50 rounded-lg'>About</button> 
                {/* mobile only- search bar */}
                <div className={`absolute ${!isMobileSearchShown ? 'block' : 'hidden'}   top-0 left-0 w-full flex gap-6  items-center sm:hidden p-2 bg-gray-100  border-gray-300`}>
                    <div onClick={()=>{setIsMobileSearchShown(true)}}  className='self-start'><i className="fa-solid fa-arrow-left"></i></div>
                    <div className=''>
                    <input id='search' placeholder='KhOJO...' className='w-64 ml-3 self-center px-2 py-0 flex-1 ring-2 rounded-full ring-gray-400 focus:outline-none focus:ring-blue-300 focus:border-0' type="text" />
                    </div>
                    <ul className={`absolute w-full  translate-y-full  rounded-b-md py-2 bottom-0 left-0 ring-1 ring-gray-400   bg-gray-100 shadow-md`}>
                        <li className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>item</li>
                        <li className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>item</li>
                        <li className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>item</li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    {/* mb for element show below fixed header  */}
    <div className='mb-12 sm:mb-16'></div>
    </>
    
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

            <li className="hover:bg-slate-300 px-1 py-1 rounded-lg transition-all duration-200" ><a href="/" className='flex items-center '>
                <span className="material-symbols-rounded">subscriptions</span><p className='ml-3 md:ml-5'>Subscriptions</p> </a></li>
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


/*
search queries 
    {query : src code page}
    use button as label : https://stackoverflow.com/questions/37504383/button-inside-a-label

*/