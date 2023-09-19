import {menu_api, Img_url} from '../config' ;
import {useEffect , useEffect, useState , Fragment} from 'react' ;
import {useParams} from 'react-router-dom' ;//this will used to get last dynamic path value like /menu/:id
import useMenu from '../utils/useRestaurantMenu.js' ;

import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const Menu = ({addToCart})=>
{
    const params = useParams() ; //useHook inside component
    const {resid} = params ;
    console.log("resid " , resid) ;

    // const [menuItems , setMenuItems]  = useState([]) ;
    // logic is extracted to hook in util folder
    const menuItems = useMenu(resid) ;
    const dispatch = useDispatch() ;

    // const [addToCart , setAddToCart] = useState("Add to Cart") ;

    const handeladdToCart = (item)=> //error was comin when using function declaration 
    {
        dispatch(addItem(item));
        // setAddToCart("Added") ;
        console.log(item);
    }
 
    // console.log(menuItems) ;

    if (!menuItems) return ;
    return (!menuItems.length) ? (<h1>Loading items...</h1>) :(
        <>
        <div className="menu-cont">
        {
        menuItems.map((item)=>
        {
            return (
                <Fragment key={item.card.info.id}>  
                {/* key error was occuring after calling handeladdToCart fun 
                fixed by using key in fragment itself(outermost) */}
                    {/* <div className="item-menu-card" key={item.card.info.id}>
                        
                        <div className="menu-info">
                            <h2>{item.card.info.name}</h2>
                            <p>{item.card.info.description}</p>
                            <p>{item.card.info.price/100 + " Rs"}</p>
                        </div>

                        <div className="item-img">
                            <img src={Img_url + item.card.info?.imageId}  />
                        </div>

                    </div> */}
                
                    <div className="item-menu-card" key={item.card.info.id}>

                        <img src={Img_url + item.card.info?.imageId}/>
                    
                        <div className="menu-info">
                                <div className="basic">
                                <h2>{item.card.info.name}</h2>
                                <p>{item.card.info.description}</p>
                                <button className='buy-btn' 
                                onClick={()=>handeladdToCart(item)}
                                >Add to Cart{addToCart}</button>
                            </div>
                            
                            <div className="cta-sec">
                                <p>{item.card.info.price/100} Rs</p>
                                <button className='buy-btn'>Buy</button>
                            </div>
                        </div>

                    </div>

                    <hr />
                 </Fragment>
                )
            })
            }
        </div>

    </>
    )
}

export default Menu ;