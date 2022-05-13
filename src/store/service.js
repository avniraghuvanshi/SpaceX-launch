import axios from 'axios';
import { useState , useEffect } from 'react';

export const getService = async (url) =>{
    //---GETTING THE RESPONSE FROM SPACEX API USING AXIOS---//
    const response = await axios.get(url);
    return(response.data);
}