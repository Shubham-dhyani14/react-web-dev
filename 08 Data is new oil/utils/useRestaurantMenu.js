// it is custom hook 
// normal fun() not used because it can't have state vars , useEffect hook etc and may give error
import {menu_api, Img_url} from '../config' ;

import { useState , useEffect } from "react";
const useMenu = (resid)=>
{
    const [menuItems , setMenuItems]  = useState([]) ;

    useEffect(()=>
    {
        // fetch menu
        fetchMenus() ;
    } , [])
    
    
    function fetchMenus()
    {
        (async ()=>
        {
            const url = menu_api + resid + "&submitAction=ENTER" ;
            console.log(url) ;
            const data = await fetch(url) ;
            const json = await data.json() ;
            console.log(json) ;
            setMenuItems(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards) ;
            console.log(menuItems) ;

        })()
    }
    return menuItems;
}

export default useMenu ;

