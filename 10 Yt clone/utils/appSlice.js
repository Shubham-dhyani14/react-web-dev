import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name : 'app' , 
    initialState : {
        videos : [],
        lruCache : {},
    },
    reducers : {
        setVideos : (state , action)=>{
            state.videos = action.payload ;
        } ,
        setLruCache : (state , action)=>{
            state.lruCache = Object.assign(state.lruCache , action.payload) ;
        }
    }
})

export const {setVideos , setLruCache} = appSlice.actions ;

export default appSlice.reducer ;