import React from "react";
import ReactDOM  from "react-dom/client";

// let header = React.createElement('h1' , {} , "Heading") ;


// ***Jsx : From now we will use jsx, as createElement will cause: readablity problem , complicate to code etc
// jsx -->(transpiled by babel, uses createElement api) ---> js Object ---> html dom

// What is Jsx ?
// so jsx is JavaScript syntax extension which will enable to use html like syntax in js
// we must wrap jsx elements in one parent el because at the end jsx is used in function where each jsx called to createElement which will return only one value i.e object
// to use js in jsx use {}
// more info* : https://www.telerik.com/blogs/how-jsx-react-works-under-hood




// Now this is react functional component basically it is a js function which returns react Element
const Header = ()=>{
    return (
        <>  
            <h1 id="title" key="title">Text</h1>
            <InnerComponent/>
        </>
    )
}
// React components vars must start with capital letters
// because if use them in jsx even in js it will be considered as Html tags like <div/> i.e part of jsx

const InnerComponent = ()=>
{ 
    return (<div>this is jsx but i will include it in another jsx syntax even i can run js inside jsx within curly brackets like now i will do aritmatic of 3+44 =
     <nbsp></nbsp> { 3+44}
    </div>) ;
}



  let root = ReactDOM.createRoot(document.querySelector('.root')) ;
console.log(Header()) ;
root.render(<Header/>) ;
