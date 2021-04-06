import React, {useState} from 'react';
import {Link, useParams}from 'react-router-dom';
const userlist=[
    {name:"Naveen", mobile:9008006228, city:"Bangalore", age:"24 Years"},
    {name:"Suresh", mobile:9008106221, city:"Chennai", age:"31 Years"},
    {name:"Ganesh", mobile:9008206222, city:"Mangalore", age:"32 Years"},
    {name:"Ramesh", mobile:9008306223, city:"Delhi", age:"33 Years"},
    {name:"Sabnam", mobile:9008406224, city:"Kolkata", age:"34 Years"},
];
const HookThree =()=>{
   const{userid}=useParams(); // useParams(); used to capture input from the browser url

   return(
       <div className="container mt-3">
           <div className="row">
               <div className="col-md-12 text-center">
                   <h3>Hooks userParam(), userState() Example</h3>
                   <h1>Your User Id is : {userid}</h1>
               </div>
           </div>
           <div className="row">
               <div className="col-md-3">
                   <ul className="list-group">
                    <li className="list-group-item active"> Available Users</li>
                    {
                        userlist.map((xuser, index)=>{
                            return(
                               <li className="list-group-item"> 
                               <Link to={`/${index}/hook3`}>
                               {xuser.name}</Link> 
                               </li>
                            )
                        })
                    }
                   </ul>
               </div>
               <div className="col-md-7">
                   <table className="table table-bordered table-hover">
                       <thead className="text-primary">
                           <tr>
                               <th>Full Name</th>
                               <td>{userlist[userid].name}</td>
                           </tr>
                           <tr>
                               <th>Age</th>
                               <td>{userlist[userid].age}</td>
                           </tr>
                           <tr>
                               <th>Mobile Number</th>
                               <td>{userlist[userid].mobile}</td>
                           </tr>
                           <tr>
                               <th>City</th>
                               <td>{userlist[userid].city}</td>
                           </tr>
                       </thead>
                   </table>
               </div>
           </div>
       </div>
   )
}
export default HookThree;