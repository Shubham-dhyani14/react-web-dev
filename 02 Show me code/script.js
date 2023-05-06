import React from 'react' ;
import ReactDOM  from 'react-dom/client';

/*
navbar
    -Title logo a>img
    -Header ul>li
*/
const Title = ()=>{
    return (<a id="logo" href="/">
              <img id="logo-img" src='https://rb.gy/wb9gt'></img>     
              <h1>Khana Khao</h1>  
           </a>)
}
const Header =()=>{ 
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

const restaurantList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "386417",
            "name": "Sticky Rice",
            "uuid": "6db1dc67-e25f-4ede-93ee-b5a8806f5179",
            "city": "4",
            "area": "Punjabi Bagh",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "rbaqe1fhtq3cyq8gycpj",
            "cuisines": [
                "Japanese",
                "Asian"
            ],
            "tags": [],
            "costForTwo": 100000,
            "costForTwoString": "₹1000 FOR TWO",
            "deliveryTime": 56,
            "minDeliveryTime": 55,
            "maxDeliveryTime": 65,
            "slaString": "55-65 MINS",
            "lastMileTravel": 7.599999904632568,
            "slugs": {
                "restaurant": "sticky-rice-punjabi-bagh-punjabi-bagh",
                "city": "delhi"
            },
            "cityState": "4",
            "address": "P. NO. 28, CENTRAL MARKET, SECTOR-2, WEST AVENUE ROAD, GROUND FLOOR, PUNJABI BAGH, West (Delhi) -110026",
            "locality": "Sector 2",
            "parentId": 16240,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "Flat ₹125 off",
                "shortDescriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 6800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "6800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6655695~p=1~eid=00000187-e231-98e5-233c-526f00da0130",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "386417",
                "deliveryTime": 56,
                "minDeliveryTime": 55,
                "maxDeliveryTime": 65,
                "lastMileTravel": 7.599999904632568,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "622616",
            "name": "Domino's Pizza",
            "uuid": "b73848c7-da30-4300-8a77-c45245d22405",
            "city": "4",
            "area": "Rohini",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "hsb5yt3qhechxockrbut",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 0,
            "slugs": {
                "restaurant": "dominos-pizza-sector-3-dominos-delhi",
                "city": "delhi"
            },
            "cityState": "4",
            "address": "Ground Floor, H. No -5, Sector-3,Rohini-110085, Delhi",
            "locality": "3rd Sector",
            "parentId": 2456,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "hasSurge": false,
            "sla": {
                "restaurantId": "622616",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "lastMileTravel": 0,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "427301",
            "name": "PJs Italian Kneads",
            "uuid": "e4b3049e-cea1-4f79-8620-67c4a01cd533",
            "city": "4",
            "area": "Punjabi Bagh",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "xdjbhnjh0ac9ipz1fgzp",
            "cuisines": [
                "Italian",
                "Pizzas",
                "American",
                "Pastas",
                "European"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 52,
            "minDeliveryTime": 50,
            "maxDeliveryTime": 60,
            "slaString": "50-60 MINS",
            "lastMileTravel": 5.699999809265137,
            "slugs": {
                "restaurant": "pjs-italian-kneads-paschim-vihar-paschim-vihar",
                "city": "delhi"
            },
            "cityState": "4",
            "address": "House no. 11, Rohtak Rd, Paschim Vihar Extension, Paschim Vihar, Delhi, 110063, India",
            "locality": "Rohtak Road",
            "parentId": 237775,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "10% off",
                "shortDescriptionList": [
                    {
                        "meta": "10% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "10% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "5.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "427301",
                "deliveryTime": 52,
                "minDeliveryTime": 50,
                "maxDeliveryTime": 60,
                "lastMileTravel": 5.699999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "387953",
            "name": "Aioli Bistro",
            "uuid": "770845e3-9aa2-4478-bfc6-1a3293baf2c9",
            "city": "4",
            "area": "Punjabi Bagh",
            "totalRatingsString": "500+ ratings",
            "cloudinaryImageId": "hbyqx9yhzburf1muvu7u",
            "cuisines": [
                "Italian",
                "American",
                "Lebanese"
            ],
            "tags": [],
            "costForTwo": 100000,
            "costForTwoString": "₹1000 FOR TWO",
            "deliveryTime": 55,
            "minDeliveryTime": 55,
            "maxDeliveryTime": 65,
            "slaString": "55-65 MINS",
            "lastMileTravel": 7.599999904632568,
            "slugs": {
                "restaurant": "aioli-punjabi-bagh-punjabi-bagh",
                "city": "delhi"
            },
            "cityState": "4",
            "address": "Building No. 31, Central Market, Punjabi Bagh West, West, Delhi-110026",
            "locality": "Punjabi Bagh",
            "parentId": 240401,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "Flat ₹125 off",
                "shortDescriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6800,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 6800,
                "message": "",
                "title": "Delivery Charge",
                "amount": "6800",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6693120~p=4~eid=00000187-e231-98e5-233c-527000da047b",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "387953",
                "deliveryTime": 55,
                "minDeliveryTime": 55,
                "maxDeliveryTime": 65,
                "lastMileTravel": 7.599999904632568,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 500,
            "new": false
        },
        "subtype": "basic"
    },
]

const ResturantCard = (
    {
     // used destructuring to get these key-values
        name, cuisines , avgRating , totalRatingsString , deliveryTime , cloudinaryImageId
    }
    )=>{
    return (<>   
        <div className="restaurant-card">

            <img  src= {`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt="resturant"></img>

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

const Body = ()=>{
    return (
            <>
                <div className="resturant-list">
                    { 
                    // looping the json and returnig component for each item / obj
                        restaurantList.map((restaurant)=>{
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


const App = ()=>{
    return (
        <>
            <Header></Header>
            <Body></Body>
        </>
    )
}
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App/>);



