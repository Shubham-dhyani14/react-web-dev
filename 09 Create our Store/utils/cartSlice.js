import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        // name of slice
        name: 'cart' ,

        // all sate vars defined here
        initialState : {
            items : [] ,
        } , 

        //reducers used to change initial state
        reducers : { 
            // 'action' : 'reducer function'  //keyword names
                        // :  (state , action) state is refrence to initialState and action provide
                        // data therw payload that will used in initial state
            addItem : (state , action)=>{
                state.items.push(action.payload) ;
            } , 

            removeItem : (state , action)=>{
                state.items = state.items.filter(item => item.card.info.id != action.payload) ;
            } ,

            clearCart : (state)=>{
                state.items = [] ;
            }
        }
    }
    )


    // note : actions and reducer keyword are not seen anywhere in slice because it is 
    // pre-defined and they must not be changed while exporting 

    export const {addItem , clearCart , removeItem} = cartSlice.actions
    export default cartSlice.reducer ;