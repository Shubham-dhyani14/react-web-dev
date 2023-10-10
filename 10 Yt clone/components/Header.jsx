import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

import {API_AUTOCOMPLETE, API_SEARCH_RESULTS, API_VIDEO_BY_ID } from '../config'

import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import {setVideos} from '../utils/appSlice'

export default function Header() {
    const [sectionShown , setSectionShown] = useState(false);
    const [isMobileSearchShown , setIsMobileSearchShown] = useState(false);
    const [query , setQuery] = useState('') ;
    const [autoCompleteValues , setAutoCompleteValues] = useState([]) ;

    const dispatch = useDispatch() ;

    function toggleSidebar(){
        setSectionShown(!sectionShown) ;
    }

    function handleSearch(value){
        console.log('dom ',document.activeElement.classList);
        if( !value) setAutoCompleteValues([]) ;// !Compulsory -> for hide suggestion fast not dependent on fetch
        console.log('set' , value) ;
        setQuery(value)
    }

    //search auto-complete
    useEffect(()=>{
        if (document.activeElement.classList.contains('search') )
        {
            const timer = setTimeout(()=> fetchAutocompleteApi(),200) ;
            return ()=>{
                clearTimeout(timer) ;
            } 
        }
    },[query.trim()])

    //searched videos from query
    async function handelSearchVideo(suggestedValue)
    {
        dispatch(setVideos([])) ; //show shimmer
        setQuery(suggestedValue) ;
        setAutoCompleteValues([]) ; // hide suggestions
        setIsMobileSearchShown(false) ;

        const resp = await fetch(API_SEARCH_RESULTS + suggestedValue) ; //all searched videos - no statics (views,like,etc)
        const json = await resp.json() ;
        const data = json.items ;
        // console.log('serched vids', data) ;
        const items = [] ;// store all single fetched video
        // items.push(1,2,3);
        // console.log('it', items);
        const responses = await Promise.all(
            data.map(async (video)=>{
            const id = video.id.videoId ;
            return fetch(API_VIDEO_BY_ID + id) ;
        }))  
        await Promise.all(responses.map(async resp=>{
            const json = await resp.json() ;
            json.items[0] && items.push(json.items[0]) ;
        })).then(console.log('itms' , items)) ;
        dispatch(setVideos(items)) ;
    }

    // set auto-com search suggestions
    async function fetchAutocompleteApi(){
            console.log('api auto com' ,API_AUTOCOMPLETE + query) ;
            const resp = await fetch(API_AUTOCOMPLETE + query) ;
            const json = await resp.json() ;
            console.log('auto com', json[1]) ;
            setAutoCompleteValues(json[1]);
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
                    <input  onChange={(e)=>handleSearch(e.target.value)} placeholder='KhOJO...' className='w-full px-2 py-1 ring-2 rounded-full ring-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-0 search' value={query} type="text" />
                    {
                        (autoCompleteValues.length) ?
                        <ul className='absolute w-full rounded-lg translate-y-full -my-1 py-2 bottom-0 left-0 ring-1 ring-gray-200 bg-white shadow-md'>
                            {/* <li className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>item</li>
                            <li className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>item</li>
                            <li className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>item</li> */
                            autoCompleteValues.map(val=>{return <Link to={'/'}> 
                            <li onClick={(e)=>handelSearchVideo(e.target.innerText)} className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>{val}</li>
                            </Link>})
                            }
                        </ul> :false 
                    }
                </div>
                <button onClick={()=>handelSearchVideo(query)} className='px-2 py-1 rounded-full border-2 bg-gray-600 hover:bg-gray-500 text-gray-50'><i className="fa-solid fa-magnifying-glass"></i></button>
            </section>
            {/* nav left - sign */}
            <div className='flex gap-1 items-center'>
                
                <button onClick={()=>{setIsMobileSearchShown(true)}}  className={ `sm:hidden px-2 py-1 rounded-full border-2 bg-gray-600 hover:bg-gray-500 text-gray-50`}>
                    <label htmlFor="search"><i className="fa-solid fa-magnifying-glass fa-"></i>
                    </label>
                </button>
                <button className='bg-red-600 hover:bg-red-500 px-2 text-sm md:text-base py-1 text-gray-50 rounded-lg'>About</button> 
                {/* mobile only- search bar */}
                <div className={`absolute ${isMobileSearchShown ? 'block' : 'hidden'}   top-0 left-0 w-full flex gap-6  items-center sm:hidden p-2 bg-gray-100  border-gray-300`}>
                    <div onClick={()=>{setIsMobileSearchShown(false)}}  className='self-start'><i className="fa-solid fa-arrow-left"></i></div>
                    <div className=''>
                        
                    <input  onChange={(e)=>handleSearch(e.target.value)} id='search' placeholder='KhOJO...' className='w-64 ml-3 self-center px-2 py-0 flex-1 ring-2 rounded-full ring-gray-400 focus:outline-none focus:ring-blue-300 focus:border-0 search' type="text" />
                    </div>
                    {
                       
                    
                       autoCompleteValues.length ?   <ul className={`absolute w-full  translate-y-full  rounded-b-md py-2 bottom-0 left-0 ring-1 ring-gray-400   bg-gray-100 shadow-md`}>
                            {
                                autoCompleteValues.map(val=>{return <li onClick={(e)=>handelSearchVideo(e.target.innerText)} className='cursor-pointer py-1 px-2 hover:font-medium hover:bg-slate-100 '>{val}</li>})
                            }
                        </ul> : false
                    }
                </div>
            </div>
        </nav>
    </header>
    {/* mb for element show below fixed header  */}
    <div className='h-12 md:h-16'></div>
    </>
    
  )
}


function Sidebar({sectionShown , toggleSidebar}){
    
    return (
    <> 
    <aside className= {`w-42  p-1 sm:p-2 md:p-4  ${sectionShown && '-translate-x-48' }  transition-transform duration-300 bg-gray-200  bg-opacity-95  absolute top-0 left-0 h-screen`} >
        {/* logo and toogle-menu */}
        <div className='flex mt-0.5 lg:mt-0 items-center'>
                <div className='w-8 h-8  p-1 text-center rounded-full hover:bg-slate-300'
                onClick={toggleSidebar}
                
                >
                    <i className="fa-solid fa-bars fa-lg"></i>
                </div>
                <img className='h-5 ml-1 md:h-6 md:ml-4' src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="logo-Yt" />
        </div>
        {/* menu options */}
        <ul className='mt-4'>
            <li className="hover:bg-slate-300 px-1 py-1 rounded-lg transition-all duration-200"  ><Link to="/" className='flex items-center'><span className="material-symbols-rounded">home</span> <p className='ml-3 md:ml-5'>Home</p> </Link></li>


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