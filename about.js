
import React from 'react';
const servicelist=[
    "Software Services", "Marketing Services", "BPO Process",
    "RealState", "Employment"
];
const About = ()=>{
    return(
        <section>
            <h1 align="center">About Us</h1>
            <p align="center">
               aa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaaa aaa
               aa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaaa aaa
               aa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaaa aaa
               aa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaaa aaa
            </p>

            <h2 align="center">
               ServiceList
            </h2 >

            {
                servicelist.map((servicelist, index )=>{
                  return(
                      <label align="center">{index}. {servicelist},</label>
                  )  
                })
            }
        </section>
    )
}

export default About;