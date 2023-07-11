// this util and helper file is used to add extra fun() which are used inside components 
// and may be required multiple time also used to make code cleaner , testable
// like : filterRestaurents , show offline . online etc

import { useEffect, useState } from "react";
export function filterRestaurant(text, restaurants)
{

    return restaurants.filter((restaurant)=>
    {
        return restaurant.data.name.toLowerCase().includes(text.toLowerCase()) ;
    })
}


export function useOnlineStatus()
{
    
    const [isOnline , setIsOnline] = useState(true) ;
    
    useEffect(()=>{
        window.addEventListener('online',   updateOnlineStatus);
        window.addEventListener('offline',  updateOnlineStatus);
        
       function updateOnlineStatus(event) 
       {
           setIsOnline(navigator.onLine) ; 
       }

       return ()=>{ 
        window.removeEventListener('online' ,updateOnlineStatus) ; 
        window.removeEventListener('offline' ,updateOnlineStatus) ; 

    }
   }, [])
    return isOnline ;
}

