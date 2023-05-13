import {useRouteError} from 'react-router-dom' ;
// useRouteError is a hook that return info related to error in a obj 
const Error = ()=>{

    const err = useRouteError();
    console.log("err" , err) ;
    return (
        <>
            <h1>Error {err.status + " : " + err.statusText}</h1>
        </>
    )
}

export default Error ;