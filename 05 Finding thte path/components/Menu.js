import {menu_api, Img_url} from '../config' ;
import {useEffect , useEffect, useState} from 'react' ;
import {useParams} from 'react-router-dom' ;//this will used to get last dynamic path value like /menu/:id


const Menu = ()=>
{
    const params = useParams() ; //useHook inside component
    const {resid} = params ;
    console.log("resid " , resid) ;

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