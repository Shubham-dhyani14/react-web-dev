

const Title = ()=>{
    return (<a id="logo" href="/">
              <img id="logo-img" src='https://rb.gy/wb9gt'></img>     
              <h1>Khana Khao</h1>  
           </a>)
}

export default Header =()=>{ 
    return    (<div className='navbar'>
                <Title/>
                <ul>
                    <li className="nav-link"> <a href="/">About us</a> </li>
                    <li className="nav-link"> <a href="/">Help & Support</a> </li>
                    <li className="nav-link"> <a href="/">Offers</a> </li>
                    <li className="nav-link"> <a href="/">Cart</a> </li>
                </ul>
              </div>)
}

