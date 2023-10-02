import React from 'react'

export default function Header() {
  return (
    <header className='mx-4 mt-4 '>
        <Sidebar/>
        <nav>
            {/* logo and toogle-menu */}
            <div className='flex items-center'>
                <i className="fa-solid fa-bars fa-lg"></i>
                <img className='h-5 ml-4 md:h-8 md:ml-6' src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="logo-Yt" />
            </div>
        </nav>
    </header>
  )
}


function Sidebar(){
    return (
    <>
    <aside className='px-2 pt-4 bg-gray-200 w-42 absolute top-0 left-0 h-screen'>
        {/* logo and toogle-menu */}
        <div className='flex items-center mb-6 px-2'>
                <i className="fa-solid fa-bars fa-lg hover:bg-slate-300 rounded-full px-2 py-4 border-red-400 cursor-pointer"></i>
                <img className='h-5 ml-1 md:h-8 md:ml-3' src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="logo-Yt" />
        </div>
        <ul>
            <li className="hover:bg-slate-300 px-2 py-1 rounded-lg transition-all duration-200"  ><a href="/" className='flex items-center'><span className="material-symbols-rounded">home</span> <p className='ml-3 md:ml-5'>Home</p> </a></li>


            <li  className="hover:bg-slate-300 px-2 py-1 rounded-lg transition-all duration-200" ><a href="/" className='flex items-center '><span className="material-symbols-rounded">movie</span> <p className='ml-3 md:ml-5'>Shorts</p> </a></li>
            <hr />

            <li className="hover:bg-slate-300 px-2 py-1 rounded-lg transition-all duration-200" ><a href="/" className='flex items-center '><span className="material-symbols-rounded "><span className="material-symbols-rounded">
subscriptions
</span></span> <p className='ml-3 md:ml-5'>Subscriptions</p> </a></li>
            <hr />

            <li className="hover:bg-slate-300 px-2 py-1 rounded-lg transition-all duration-200"  ><a href="/" className='flex items-center  '><span class="material-symbols-rounded">
video_library
</span><p className='ml-3 md:ml-5'>Shorts</p> </a></li>
            <hr />
        </ul>
        {/* mr-4 md:mr-6 */}
    </aside>
    </>)
}