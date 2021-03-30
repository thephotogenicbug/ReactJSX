import React, {Component} from 'react';
class StateSix extends Component{

    constructor(){
        super();
        this.state={
            userlist:["Naveen", "Kumar"],
            newuser:''
        }
    }
    deleteUser = (index)=>{
      //  alert(index);
        this.state.userlist.splice(index, 1)
        this.setState({
            userlist:this.state.userlist
        })
    }
    saveuser=()=>{
        this.setState({
            userlist:this.state.userlist.concat(this.state.newuser),
            newuser:''
        })
    }
    processName=(obj)=>{
      this.setState({
          newuser: obj.target.value
      })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Array Operation</h2>
                        <p>Available Users- {this.state.userlist.length}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center bg-light p-3">
                            <label>Enter User Name</label>
                            <input type="text" className="form-control" onChange={this.processName} value={this.state.newuser}/>
                            <br/><br/>
                            <button className="btn btn-success btn-block" onClick={this.saveuser}>Save User</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <table className="table table-bordered table-sm">
                         <thead>
                             <tr className="text-info text-center">
                                 <th>Item Index</th>
                                 <th>Item Name</th>
                                 <th>Action</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 this.state.userlist.map((xuser, index)=>{
                                     return(
                                         <tr key={index}>
                                             <td>{index}</td>
                                             <td>{xuser}</td>
                                             <td><button className="btn btn-danger btn-sm" onClick={this.deleteUser.bind(this,index)}>Delete</button></td>
                                         </tr>
                                     )
                                 })
                             }
                         </tbody>
                        </table>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}
export default StateSix;

// bind function used to bind parameters to function
// splice used to delete 