import {Img_url} from '../config' ;
import { Fragment, useState} from 'react' ;

import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearCart, removeItem } from '../utils/cartSlice';
import { UseSelector } from 'react-redux';

const Cart = ()=>
{
    const cartItems = useSelector((store)=>store.cart.items)
    
    const dispatch = useDispatch() ;
    console.log(cartItems) ;

    const handelDeleteItem = (id)=>{
        dispatch(removeItem(id)) ;
    } ;

    const handelYampteeCart = ()=>{
        dispatch(clearCart()) ;
    }
    if (!cartItems) return ;
    return (!cartItems.length) ? (
        <>
        <h1 style={{textAlign:"center"}}>Yampteeee</h1>
        <div style={{width:"100vw" , height:"80vh", display:"flex" , justifyContent:"center" ,}}>
        <iframe src="https://giphy.com/embed/giXLnhxp60zEEIkq8K" width="480" height="480" frameBorder="0" >
        </iframe>
        </div>
    </>
    ) :(
        <>
        <div className="menu-cont" >
        <button  className="buy-btn" style={{width:"5rem" , backgroundColor:"Red"}} onClick={handelYampteeCart}>Yampteee Cart</button>
        {
        cartItems.map((item)=>
        {
            return (
                <Fragment key={item.card.info.id}>  
               
                    <div className="item-menu-card" key={item.card.info.id}>

                        <img src={Img_url + item.card.info?.imageId}/>
                    
                        <div className="menu-info">
                                <div className="basic">
                                <h2>{item.card.info.name}</h2>
                                <p>{item.card.info.description}</p>
                                <button className='buy-btn' 
                                onClick={()=>handelDeleteItem(item.card.info.id)}
                                >Remove</button>
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

export default Cart ;