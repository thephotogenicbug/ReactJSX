import React, {useState} from 'react';
const HookTwo =()=>{
 
    const[city, updateCity]=useState([""]);
    const[message, updateMessage]=useState();
    const[newcity, processCity]=useState();
    const save=()=>{
        updateCity(city =>[...city, newcity]);   
        updateMessage(newcity + " Added Successfully !");
        processCity("");
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                <h2 className="text-success">Array Read Write Using Hooks</h2>    
                <h1 className="text-danger text">{city.length}</h1>
                <p className="text-success">{message}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3 pt-2 ml-5">
                <input 
                type="text" 
                className="form-control"
                onChange={obj=>processCity(obj.target.value)}
                value={newcity}
                />
                <small>{newcity}</small>
                </div>
                <div className="col-md-3 ">
                    <button className="btn btn-primary" onClick={save}>Save City</button>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row text-center mt-3">
                {
                    city.map((xcity, index)=>{
                        return(
                            <div className="col-md-3 " key={index}>
                                <p className="p-3 border">{xcity}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default HookTwo;