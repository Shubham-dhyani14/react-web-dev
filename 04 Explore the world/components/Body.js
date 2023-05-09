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

    // sytax hooks : 
    // const varName [stateVar , setStateFun] = useState ;
    const [restaurants , setRestaurants] = useState(restaurantList) ;
    const [searchText, setSearchText] = useState("") ;

    // useEffect : 
    /*
        it is used to run a fun() whenever state of st.var got change 
        the fun. run after rendering.
        syn: useEffect( funToRun , [state vars of which it should run the fun()])
    */ 

    // Rendering of component is always done on state change of any var.
    // in this case even serchText was changed in single char whole body will re-render
    useEffect(()=>console.log("UseState Fun !") , [searchText]) ;

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