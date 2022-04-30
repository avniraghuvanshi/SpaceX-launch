import axios from 'axios';
import { useState , useEffect } from 'react';

const useSpaceX = (url) =>{
    const [launches , setLaunches] = useState([]);
    useEffect(()=>{
        const getLaunches = async () =>{
            const response = await axios.get(url);
            setLaunches(response.data);
        }
        getLaunches();
    },[url]);

    return launches;
}

export default useSpaceX;