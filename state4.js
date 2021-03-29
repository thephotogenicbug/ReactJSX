import React, {Component} from 'react';
class StateFour extends Component{
    constructor(){
        super();
        this.state={
            name: "",
            Email: "",
            Mobile: "",
            Address: ""

        }
    }
    processName=(obj)=>{
        this.setState({
            name:obj.target.value,
            
            
        })
    }
    processMobile=(obj)=>{
        this.setState({
            mobile:obj.target.value,
            
        })
    }

    processEmail=(obj)=>{
        this.setState({
            email:obj.target.value,
        })
    }  
    
    processAddress=(obj)=>{
        this.setState({
            address:obj.target.value
        })
    }
    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="">
                            <h1 className="text-center">My Information</h1>
                            <label>Name</label>
                            <input type="text" className="form-control" onChange={this.processName}/>
                            <label>Mobile</label>
                            <input type="number" className="form-control"onChange={this.processMobile}/>
                            <label>Email</label>
                            <input type="email " className="form-control"onChange={this.processEmail}/>
                            <label>Address</label>
                            <input type="text" className="form-control"onChange={this.processAddress}/>
                        </div>
                    </div>

                    <div className="col-md-6 mt-3">
                        <div className="">
                            <h2 className="text-center">My Preview </h2>
                             <p>Name:{this.state.name}</p>
                             <p>Mobile:{this.state.mobile}</p>
                             <p>Email:{this.state.email}</p>
                             <p>Address:{this.state.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default StateFour;