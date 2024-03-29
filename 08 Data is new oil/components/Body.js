// custom context was passed via provider and used in input to change its value

import { useEffect, useState ,useContext} from 'react';
import { Img_url , restaurantList , api_url} from '../config';
import ResturantCard from './RestaurantCard';
import { features } from 'process';
import Sheemer  from "./sheemerUi";
import { Link } from 'react-router-dom';
import {filterRestaurant , useOnlineStatus} from "../utils/helper"
import UserContext from '../utils/UserContext';
// filedterRestaurent moved  to utils 



export default Body = ()=>{

    // sytax hooks : 
    // const varName [stateVar , setStateFun] = useState ;
    const [filteredRestaurants , setFilteredRestaurants] = useState([]) ;
    //used as copy to fileter on search 
    const [allRestaurants , setAllRestaurants] = useState([]) ; 
    const [searchText, setSearchText] = useState("") ;

    //destructured values from cutom context passed by provider from script.js
    const {user , setUser} = useContext(UserContext) 
     console.log("user" , user) ;
    

    // useEffect : 
    /*
        * it is used to run a fun() whenever state of st. var got change 
        * the fun. runs after rendering.
        * if dependent vars is not given then it will always run once 
        * syn: useEffect( funToRun , [dependent state vars on changing them it will run the fun()])
    */ 

    // Rendering of component is always done on state change of any var.
    // in this case even if serchText was changed in a single char, whole body will re-render

    useEffect(()=>fetchResturantsAndRender() , []) ;

    const fetchResturantsAndRender = ()=>
    {
        // using ifie to call main fun() to fix navgation break and remove warning
        (async ()=>
        {
            const data = await fetch(api_url) ;
            const response = await data.json() ;
            const fetchedRestaurants = response.data.cards[2].data.data.cards ;
            setFilteredRestaurants(fetchedRestaurants) ; 
            setAllRestaurants(fetchedRestaurants) ;
        })()
    }
    console.log("Rendering...") ;
    
    const isOnline = useOnlineStatus() ; // always use 'hooks' to declare useEffect and state vars inside it
    if(!isOnline)  return(<h1>Offline gaya beee....</h1>) ; 
    if(filteredRestaurants.length === 0 && allRestaurants.length) return(<h1>Searched out of aukat...</h1>)
    return (allRestaurants.length === 0 ) ? (<Sheemer/>) :
    
    (
            <>
             <div className="search-container">
                <input className='search-input' type="text" placeholder='Restaurants...' value={searchText} 
                onChange={
                    (e)=>
                    {
                        setSearchText(e.target.value) ;
                        if(e.target.value == "") 
                        setFilteredRestaurants(allRestaurants) ;
                    }
                }
                onKeyDown={ //extra
                    (e)=>
                    {
                        if(e.key === "Enter")//same as serch-btn pressed
                        setFilteredRestaurants(filterRestaurant(searchText, allRestaurants)) ;
                    }
                }
                />
                <button className='search-btn' onClick={
                    ()=>
                    {
                        let data = filterRestaurant(searchText, allRestaurants); 
                        setFilteredRestaurants(data) ;
                        return;
                    }}>
                    Go
                </button>
            </div>

            <input type="text" value={user.name} onChange={
                    (e)=>{  //going to chang user name via input
                        setUser({ 
                         name: e.target.value , mail : "kallu@challu"
                        })
                    }
                }/>
                <div className="resturant-list">
                    { 
                    // looping the json and returnig component for each item / obj
                        filteredRestaurants.map((restaurant)=>{
                            return <ResturantCard key={restaurant.data.id} {...restaurant.data}/>
                        }) 
                    }
                </div>


                {/* <ResturantCard {...restaurantList[0].data}/>

                 if we passing attr. to react comp. then it will recieve all attr. as key in obj. say props

                <ResturantCard {...restaurantList[1].data}/>
                <ResturantCard {...restaurantList[2].data}/>
                <ResturantCard {...restaurantList[3].data}/> */}
            </>
    )
}