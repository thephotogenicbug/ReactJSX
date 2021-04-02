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
        this.setState({
            msg: "Please wait Processing....",
            contactlist:[]
        })
        let url="http://firstenquiry.com/api/react/crud/save.php";
        let input=new FormData();
        //formData create a json. append is javascript function 
        input.append("name",this.state.fullname);
        input.append("email",this.state.emailid);
        input.append("mobile",this.state.mobile);
        axios.post(url, input).then(response=>{
            this.setState({
                msg:response.data,
                fullname:'',
                emailid:'',
                mobile:''
            })
            this.getContact(); //to reload list after saving data
        })
    }



    deleteRecord=(recordid)=>{
        this.setState({
            msg: "Please wait Processing....",
            contactlist:[]
        })
        let url="http://firstenquiry.com/api/react/crud/delete.php";
        let input=new FormData();
        //formData create a json. append is javascript function 
        input.append("id", recordid);
     
        axios.post(url, input).then(response=>{
            this.setState({
                msg:response.data.status
              
            })
            this.getContact(); //to reload list after saving data
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
                        <h3 className="text-center">Available Records:- {this.state.contactlist.length}</h3>
                       <p className="text-center text-danger">{this.state.msg}</p>
                        <table className="table table-bordered table-sm">
                            <thead> 
                                <tr className="text-center text-primary">
                                    <th>Action</th>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.contactlist.map((row,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td className="text-center"><button className="btn btn-danger btn-sm" onClick={this.deleteRecord.bind(this, row.id)}>Delete</button></td>
                                                <td>{row.name}</td>
                                                <td>{row.email}</td>
                                                <td>{row.mobile}</td>
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