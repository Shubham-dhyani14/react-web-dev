// context is centeral place to store our var and use in multiple places without passing prop


import { createContext } from "react";

const UserContext = createContext({
    user:{
        name : "Pappu" , 
        mail : "goomail.com"
    } ,
})

export default UserContext ;