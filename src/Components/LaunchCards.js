import React from "react";
import './LaunchCards.css';

const LaunchCards = ({result}) =>{
    const launch_cards = result[0];
    const cards = launch_cards.map(card=>{
        const missionId = card.mission_id ? [...card.mission_id] : "-" ;
        const launchYear = card.launch_year ? card.launch_year : '-';
        const launchSuccess = card.launch_success ? 'True' : 'False';
        const landSuccess = card.rocket.first_stage.cores[0].land_success ? 'True' : 'False';
        return(
            <div key={card?.flight_number} className="card">
                <div className="img-container">
                    <img alt={card?.mission_name} src={card?.links.mission_patch}></img>
                </div>
                <div className="card-content">
                    <h1 className="content-title">{card?.mission_name}</h1>
                    <div className="details">
                        <span>Mission Id</span>
                        <ul>
                            {" "}
                            {missionId.map((id , index)=>{
                                return <li key={index}>{id}</li>
                            })}
                        </ul>
                    </div>
                    <div className="details">
                        <span>Launch Year</span>
                        <span>{launchYear}</span>
                    </div>
                    <div className="details">
                        <span>Successful Launch</span>
                        <span>{launchSuccess}</span>
                    </div>
                    <div className="details">
                        <span>Successful Land</span>
                        <span>{landSuccess}</span>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <section className="grid-container">
            {launch_cards.length > 0 ? cards : <h1 style={{fontSize: "2.5rem" , placeSelf:"center" , fontWeight:"300"}}>No Results Found</h1>}
        </section>
    );
}

export default LaunchCards;