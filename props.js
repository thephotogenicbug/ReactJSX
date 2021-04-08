import React, {useState, useEffect}from 'react';
import CustomerList from './customerlist';
const MyProps = ()=>{
    const[user, updateUser]= useState([]);
    const[carlist, updateCar]=useState([]);

    const getUser = ()=>{
        fetch("user.json")
        .then(response=>response.json())
        .then(result=> updateUser(result))
    }

    const getCar = ()=>{
        fetch("http://firstenquiry.com/api/car.json")
        .then(response=>response.json())
        .then(result=> updateCar(result))
    }

    useEffect(()=>{
        getUser();
        getCar();
    },[true])
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2> Reactjs, Props, Component Reuse, Intraction</h2>
                    <h1>{user.length} </h1>
                </div>
                {
                user.map((xuser, index)=>{
                   return(
                       <CustomerList
                       key={index}
                       fullname={xuser.name}
                       mobileno={xuser.mobile}
                       cityname={xuser.city}
                       pic={xuser.photo}
                       />
                   )
                })
            }
            </div>

            <hr/>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Available Cars</h2>
                    Car List-: {carlist.length}
                </div>
                {
                    carlist.map((mycar, index)=>{
                        return(
                            <div className="col-md-4 form-group" key={index}>
                                <h5 className="text-primary">{mycar.model}</h5>
                                <img src={`http://firstenquiry.com/api/img/${mycar.image}`} 
                                height="140" 
                                width="100%" 
                                alt=""/>
                                <p>Price -: {mycar.price}</p>
                                <p>Fuel -: {mycar.fuelType}</p>
                                <p>Mileage -: {mycar.mileage}</p>
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    )
}
export default MyProps;