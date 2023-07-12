import React , {lazy , Suspense}from 'react' ; 
// lazy is fun() used to load component in another js file to reduse load in one file
// suspense is another component provided by react to use lazy loaded components
// reason to use suspanse : lazy loading js file first time will not render to ui as code not exist 
// being single page app it will load next time
// fallback prop can be used for sheemers
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
// import Menu from './components/Menu';  //loading lazy
import Error from './components/Error'
import ProfileClassBase from './components/ProfileClassBase';
import Offers from './components/Offers';
import UserContext from './utils/UserContext';
import { useContext , useState} from 'react';

// createBrowserRouter is a fun() , RouterProvider is a component
import {createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom'


const Menu = lazy(()=>import('./components/Menu')) ; //this use another js bundel load 
// must use suspanse component
// don't lazy  load inside component just load at top like default import


/*
navbar
    -Title logo a>img
    -Header ul>li
*/

const App = ()=>{
    // will be passed as cutomised context to modify existing using .provider
    const [user, setUser] = useState({ name:"lallu" , mail : "kallu@challu"})
    return (
        <>
        {/* myContext.Provider it is used as component have value prop passed to set 
        default value to defined context. 
        Note : it will only applied to its inner child wrapped inside .Provider 
        try setting Header outside this component
        */}
            <UserContext.Provider value={{user: user , setUser : setUser}}>
            <Header></Header> 

            <Outlet></Outlet>
            </UserContext.Provider>
            {/* <Body></Body> */}
        </>
    )
}

//  createBrowserRouter takes [arr of obj] as input inside one obj we define 
// a. path key as key and the routing link to the path e.g '\'
// b. element key will take component as its value to the corresponding path

const appRouter = createBrowserRouter([
    {
        path: '/', 
        element: <App/>, // use app inside parent ----currently have header and outlet
        errorElement: <Error/> , // used custom component to a undefined routing path

        // this children will be used inside outlet, the outlet use children to deside deside
        // what to render inside it
        children: [   
            { 
                path: '/' , 
                element: <Body/> 
            },
            { 
                path: '/about' , 
                element: <About/> ,
                // this is nested path using children
                children: [
                    {
                        path : "profile" ,// to use 'localHost/about/profile' as url
                        // --don;t use "/profile" in path key as this will be  'localhost/profile' in url

                        element: <ProfileClassBase name = "Gangsta"/> //outlet was give to about to render profile as its child
                    }
                ]
            },
            {
                // id is not hard code but using with : define that any path inplace of id will make it 
                // use pre-defined element instead of error
                path: '/restaurant/:resid' , 
                element: (<Suspense fallback={<h1> Fallback Loading... </h1>}> <Menu/> </Suspense> )
            },
            {
                path: '/menu' ,
                element: (<Suspense fallback={<h1> Fallback Loading... </h1>}> <Menu/> </Suspense> )
            }, 
            {
                path: '/offers' ,
                element: <Offers/>
            }
        ]
    } 
])



const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(<App/>);

// now we have to render our component as the path suggest so for it we will use 
// routerProvider component this will render the components as per path

// it takes props where we defined path and element using createBrowserRouter
root.render(<RouterProvider router={appRouter} />) ;


/*

react hooks are used to change states of js vars as they can't chnged withoud hooks because react
will not able to find when var got changed and when to render it 

hooks return arr of a.)default value to our var and b.) a function which will set new value to var

syntax: let [my_var, fn_to_chg_my_var] = useState("def val")

*/ 

