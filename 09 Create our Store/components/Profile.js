import { useEffect, useState } from "react"

export default Profile = ()=>{

    const [count , setCount] = useState(0) ;
    const [count1 , setCount1] = useState(1) ;

    useEffect(()=>
    {
        const timer = setInterval(()=>console.log("**Timer inside Fun() component\n"), 1000) ;
        
        // return behaves like unmounting in class compnent for cleaning up
        return ()=>{clearInterval(timer)} ;

    } , [])


    return (
    <>
        <h3>Profile Function Based Component</h3>
        <p>Nested inside class base component </p>
        <br />
        <p>counts are {count} and {count1}</p>
        <button onClick={()=>{
            setCount(1) ;
            setCount1(2) ;
        }}>set counts</button>
       

    </>)
}