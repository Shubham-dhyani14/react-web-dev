import {menu_api, Img_url} from '../config' ;
import {useEffect , useEffect, useState} from 'react' ;
import {useParams} from 'react-router-dom' ;//this will used to get last dynamic path value like /menu/:id
import useMenu from '../utils/useRestaurantMenu.js' ;


const Menu = ()=>
{
    const params = useParams() ; //useHook inside component
    const {resid} = params ;
    console.log("resid " , resid) ;

    // const [menuItems , setMenuItems]  = useState([]) ;
    // logic is extracted to hook in util folder
    const menuItems = useMenu(resid) ;
    
    

    if (!menuItems) return ;
    return (!menuItems.length) ? (<h1>Loading items...</h1>) :(
        <>
        <div className="menu-cont">
        {
        menuItems.map((item)=>
        {
            return (
                <>
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
                            </div>
                            
                            <div className="cta-sec">
                                <p>{item.card.info.price/100} Rs</p>
                                <button className='buy-btn'>Buy</button>
                            </div>
                        </div>

                    </div>

                    <hr />
                 </>
                )
            })
            }
        </div>

    </>
    )
}

export default Menu ;