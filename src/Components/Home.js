import React,{useState , useEffect, useRef} from "react";
import { useSearchParams } from "react-router-dom";
import './Home.css';
import useSpaceX from "../useSpacex";
import LaunchCards from "./LaunchCards";

let url = `https://api.spaceXdata.com/v3/launches?limit=100`;

const Home = () =>{
    const[searchParams , setSearchParams] = useSearchParams(); //initializing URLSearchParameter

    const [launchYear , setLaunchYear] = useState('');
    const [successfulLaunch , setSuccessfulLaunch] = useState('');
    const [successfulLand , setSuccessfulLand] = useState('');

    const filterEl = useRef();
    const result = useSpaceX(`${url}&launch_year=${launchYear}&launch_success=${successfulLaunch}&land_success=${successfulLand}`); //calling the custom hook

    let optionYear = []; //pushing the list of launch years in the array programatically
    for(let i=2006 ; i<=2020 ; i++){
        optionYear.push(i);
    }

    return (
        <section className="home">
            <section className="top">
                <div className="logo">
                    <p className="heading-big">SpaceX</p>
                    <p className="heading-small">Launch Programs</p>
                </div>
                <button onClick={()=>{filterEl.current.style.display = "flex"}}>Filter</button>
            </section>
            {/* filter modal */}
            <section ref={filterEl} className="filter">
                <span className="icon material-symbols-outlined" onClick={()=>{filterEl.current.style.display = "none"}}>close</span>
                <div className="list-group">
                    <span>Launch<br></br>Year</span>
                    <select defaultValue='default' onChange={(e)=>{
                        setLaunchYear(e.target.value)
                        searchParams.set('launch_year',e.target.value);
                        setSearchParams(searchParams);
                        }}>
                        <option hidden disabled value='default'>Select Year</option>
                        {optionYear.map((year , index) =>{
                            return(
                                <option key={index} value={year}>{year}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="list-group">
                    <span>Successful<br></br>Launch</span>
                    <select defaultValue='default' onChange={(e)=>{
                        setSuccessfulLaunch(e.target.value)
                        searchParams.set('launch_success',e.target.value);
                        setSearchParams(searchParams);
                        }}>
                        <option hidden disabled value='default'>Select an Option</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </div>
                <div className="list-group">
                    <span>Successful<br></br>Land</span>
                    <select defaultValue='default' onChange={(e)=>{
                        setSuccessfulLand(e.target.value)
                        searchParams.set('land_success',e.target.value);
                        setSearchParams(searchParams);
                        }}>
                        <option hidden disabled value='default'>Select an Option</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </div>
            </section>
            <LaunchCards result={[result]}/>
        </section>
    );
}

export default Home;