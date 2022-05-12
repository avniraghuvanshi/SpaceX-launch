import { getService } from "./service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//---ASYNC THUNK METHOD (to dispatch launchSlice action)---//
export const getLaunchesThunk = createAsyncThunk(
    'launch/getLaunchesThunk',
    async (url) =>{
        try{
            return await getService(url);
        }catch(err){
            console.log(err);
        }
    }
);

//---SLICE TO MAINTAIN THE STATE(array of object response from the api)---//
export const launchSlice = createSlice({
    name: 'launch',
    initialState: {launches: []},
    extraReducers:{
        [getLaunchesThunk.pending]:(state , action)=>{
            state.launches = [];
        },
        [getLaunchesThunk.fulfilled]:(state , action)=>{
            state.launches = action.payload;
        }
    }
});

export const launchSliceActions = launchSlice.actions;
