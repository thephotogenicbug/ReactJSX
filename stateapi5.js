import React, {Component} from 'react';
import axios from 'axios';

class StateApiFive extends Component
{
    constructor()
    {
        super();
        this.state={
            contactlist:[],
            fullname:"",
            emailid:"",
            mobile:"",
            msg:""

        }
    }

    getContact=()=>
    {
        
        let url="http://firstenquiry.com/api/react/crud/list.php";
        axios.get(url).then(response=>{
            if(response.data.length>0)
            {
                this.setState({
                    contactlist:response.data
                   })
            }
          
        })
    }

    save=()=>{
        let url="http://firstenquiry.com/api/react/crud/save.php";
        let input=new FormData();
        //formData create a json. append is javascript function 
        input.append("name",this.state.fullname);
        input.append("email",this.state.emailid);
        input.append("mobile",this.state.mobile);
        axios.post(url, input).then(response=>{
            this.setState({
                msg:response.data
            })
            this.getContact(); //to reload list after saving data
        })
    }

    componentDidMount(){
        this.getContact();
    }

    processName=(obj)=>{
        this.setState({
            fullname:obj.target.value,
            
        })
    }

    processEmail=(obj)=>
    {
        this.setState({
            emailid:obj.target.value
        }) 
    }

    processMobile=(obj)=>
    {
        this.setState({
            mobile:obj.target.value
        }) 
    }

    

    render()
    {
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="bg-light p-2">
                            <h3>Add New Record</h3>
                            <div className="from-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" onChange={this.processName} value={this.state.fullname}/>
                            </div>
                            <div className="from-group">
                                <label>Mobile</label>
                                <input type="text" className="form-control" onChange={this.processMobile} value={this.state.mobile}/>
                            </div>
                            <div className="from-group">
                                <label>E-mail</label>
                                <input type="text" className="form-control" onChange={this.processEmail} value={this.state.emailid}/>
                            </div>
                            <br/>
                           <button className="btn btn-primary btn-block" onClick={this.save}>Save Record</button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h3>Available Records:- {this.state.contactlist.length}</h3>
                        <table className="table table-bordered table-sm">
                            <thead> 
                                <tr className="text-center text-primary">
                                    <th>Record Id</th>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.contactlist.map((xitem,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{xitem.id}</td>
                                                <td>{xitem.name}</td>
                                                <td>{xitem.email}</td>
                                                <td>{xitem.mobile}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default StateApiFive;