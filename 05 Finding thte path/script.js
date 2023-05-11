import React from 'react' ;
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Header from './components/Header';

// createBrowserRouter is a fun() , RouterProvider is a component
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import About from './components/About';


/*
navbar
    -Title logo a>img
    -Header ul>li
*/

const App = ()=>{
    return (
        <>
            <Header></Header>
            <Body></Body>
        </>
    )
}

// 

const appRouter = createBrowserRouter([
    {
        path: '/', 
        element: <App/>
    } ,
   { 
    path: '/about' , 
    element: <About/> 
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

