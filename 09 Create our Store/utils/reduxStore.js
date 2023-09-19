import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
// npm i @reduxjs/toolkit

// store have some slices which will have actions and reducers that will subscribed by ui

// store will be passed as prop from Provider component by 'react-redux'
// Provider will wrap whole app just like  useContext to use store into app
const reduxStore = configureStore({
    reducer : {
        cart : cartSlice ,
    }
}) ;

export default reduxStore ;