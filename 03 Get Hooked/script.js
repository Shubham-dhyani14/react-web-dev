import React from 'react' ;
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Header from './components/Header';

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
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App/>);

/*

react hooks are used to change states of js vars as they can't chnged withoud hooks because react
will not able to find when var got changed and when to render it 

hooks return arr of default value to our var and a function which will set new value to var

syntax: let [my_var, fn_to_chg_my_var] = useState("def val")


*/ 

