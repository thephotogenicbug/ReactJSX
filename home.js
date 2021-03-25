
import React from 'react';
const citylist=["Pune", "Delhi", "Chennai", "Patna", "Bhopal", "Kolkata"];
const Home = ()=>{
    
    return(
        <section>
            <h1 align="center">Available City : {citylist.length}</h1>
            {
                citylist.map((city, index)=>{
                    return(
                        <p align="center">{index} . {city} </p>
                    )
                })
            }
        </section>
    )
}

export default Home;
