import {Link} from 'react-router-dom'
import {useContext} from "react"; // used to use defined context

import UserContext from '../utils/UserContext' ;
// just like vars we can't use a tag in react el. as this will make our page
// reloads completely so we use Link from react router to avoid reloading 
// it is just like state vars to tell react to keep a track on it

const Title = ()=>{
    return (<a id="logo" href="/">
              <img id="logo-img" src='https://rb.gy/wb9gt'></img>     
              <h1>Khana Khao</h1>  
           </a>)
}

export default Header =()=>{ 

    const {user} = useContext(UserContext) ; //used desturing as we got bundeled with object
    return    (<div className='navbar'>
                <Title/>
                <ul>
                    <li className="nav-link"> <Link to={"/about"}>About us</Link> </li>
                    <li className="nav-link"> <Link to="/">Help & Support</Link> </li>
                    <li className="nav-link"> <Link to="/offers">Offers</Link> </li>
                    <li className="nav-link"> <Link to="/">Cart</Link> </li>
                    <button className="login-btn">Login - {user.name} </button> {/*used here*/}
                </ul>
              </div>)
}

