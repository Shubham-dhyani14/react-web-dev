import { useEffect, useState } from 'react';
import { Img_url , restaurantList } from '../config';
import ResturantCard from './RestaurantCard';


function filterRestaurant(text, restaurants)
{

    return restaurants.filter((restaurant)=>
    {
        return restaurant.data.name.toLowerCase().includes(text.toLowerCase()) ;
    })
}



export default Body = ()=>{
    // this is a hook , here restaurants is using restaurantList as def value and 
    // setRestaurants is used to change it 

    // here desturing of returned arr is used 
    const [restaurants , setRestaurants] = useState(restaurantList) ;
    const [searchText, setSearchText] = useState("") ;


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