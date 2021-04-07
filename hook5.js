import React,{useState, useEffect}from 'react';
import {Link, useParams}from 'react-router-dom';

const HookFive = ()=>{
    const temp = {
        "name": "Naveen",
         "mobile": "9008006228", 
         "city": "Bangalore", 
         "photo": "1.jpg"
        };
    const[user, updateUser]=useState([temp]);
   const{id}=useParams();
    const getUser =()=>{
        fetch("user.json")
        .then(response=>response.json())
        .then(result=>updateUser(result))
    }

    useEffect(()=>{
        getUser();
    },[true])
  return(
      <div className="container">
          <div className="row">
              <div className="col-md-12 text-center">
                  <h2 className="text-success">ReactJS Hooks useEffect Example</h2>
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <h3>{id} = Total Users Are -:{user.length}</h3>
              </div>
          </div>
          <div className="row">
              <div className="col-md-3">
                  <ul className="list-group">
                    <li className="list-group-item active">Customer List</li>
                    {
                        user.map((xuser, index)=>{
                            return(
                                <li className="list-group-item"key={index}>
                                <Link to={`/${index}/hook5`}> {xuser.name}</Link>  
                                </li>
                            )
                        })
                    }
                  </ul>
              </div>
              <div className="col-md-6">
                  <div className="p-4 border">
                <h4 className="text-success">About {user[id].name}</h4>
                <p>Mobile: {user[id].mobile}</p>
                <p>Email : {user[id].email}</p>
                <p>City : {user[id].city}</p>
                </div>
              </div>
              <div className="col-md-3">
                  <img src={user[id].photo} className="img-fluid rounded-circle" alt=""/>
              </div>
          </div>
      </div>
  )
}
export default HookFive