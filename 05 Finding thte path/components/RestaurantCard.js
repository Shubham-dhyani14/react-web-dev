import { Img_url , restaurantList } from '../config';


export default ResturantCard = (
    {
     // used destructuring to get these key-values
        name, cuisines , avgRating , totalRatingsString , deliveryTime , cloudinaryImageId
    }
    )=>{
    return (<>   
        <div className="restaurant-card">

            <figure>
                <img  src= {`${Img_url}${cloudinaryImageId}`} alt="resturant"></img>
            </figure>

            {/* first chk without using prop or param. using directly restaurantList[0].data.name  */}
            <div className="restaurant-info">
                <h2>{name}</h2>  
                <h3>{cuisines.join(", ")}</h3>
                <div className="rating-delv-info">
                    <div className="rating"> {`⭐${avgRating} (${totalRatingsString})`} </div>
                    <div className="del-time"> {deliveryTime} min </div>
                </div>
            </div>

        </div>
    </>)
}