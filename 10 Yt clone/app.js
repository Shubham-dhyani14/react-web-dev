import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { Outlet , RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
const App = () => {
    return (
        <>
            <Header/>
            <Outlet/>
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
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={myRouter}/>)