import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name : 'app' , 
    initialState : {
        videos : [],
        // lruCache : {},
    },
    reducers : {
        setVideos : (state , action)=>{
            state.videos = action.payload ;
        } ,
        setLruCache : (state , action)=>{
            state.lruCache = {...state , ...action.payload} ;
        }
    }
})

export const {setVideos} = appSlice.actions ;

export default appSlice.reducer ;