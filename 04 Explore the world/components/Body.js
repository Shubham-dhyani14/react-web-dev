import { useEffect, useState } from 'react';
import { Img_url , restaurantList } from '../config';
import ResturantCard from './RestaurantCard';
import { features } from 'process';

const api_url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING" ;

function filterRestaurant(text, restaurants)
{

    return restaurants.filter((restaurant)=>
    {
        return restaurant.data.name.toLowerCase().includes(text.toLowerCase()) ;
    })
}



export default Body = ()=>{

    // sytax hooks : 
    // const varName [stateVar , setStateFun] = useState ;
    const [restaurants , setRestaurants] = useState(restaurantList) ;
    const [searchText, setSearchText] = useState("") ;

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

    async function fetchResturantsAndRender()
    {
        const data = await fetch(api_url) ;
        const response = await data.json() ;
        const allResturants = response.data.cards[2].data.data.cards ;
        setRestaurants(allResturants) ;
    }
    console.log("Rendering...") ;
    return (
            <>
                <div className="search-container">
                    <input className='search-input' type="text" placeholder='Restaurants...' value={searchText} 
                    onChange={
                        (e)=>
                        {
                            setSearchText(e.target.value) ;
                            if(e.target.value == "") 
                            setRestaurants(restaurantList) ;
                        }
                    }
                    onKeyDown={ //extra
                        (e)=>
                        {
                            if(e.key === "Enter")//same as serch-btn pressed
                            setRestaurants(filterRestaurant(searchText, restaurants)) ;
                        }
                    }
                    />
                    <button className='search-btn' onClick={
                        ()=>
                        {
                            let data = filterRestaurant(searchText, restaurants); 
                            setRestaurants(data) ;
                            return;
                         }}>
                        Go
                    </button>
                </div>

                <div className="resturant-list">
                    { 
                    // looping the json and returnig component for each item / obj
                        restaurants.map((restaurant)=>{
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