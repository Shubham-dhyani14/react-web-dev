import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { Outlet , RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import About from "./components/About";
import OtherMenuLinks from "./components/OtherMenuLinks";

import {store} from "./utils/store" ;
import { Provider } from "react-redux";
const App = () => {
    return (
        <>  
            <Provider store={store}>
                <Header/>
                <Outlet/>
            </Provider>
        </>
    )
}

const myRouter = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
           { 
                path : '/' , 
                element : <Body/>
            } ,
            {
                path : '/watch',
                element : <WatchPage/>
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/lol',
                element : <OtherMenuLinks/>
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<WatchPage/>)
root.render(<RouterProvider router={myRouter}/>)