import React, {Component} from 'react';
class StateSeven extends Component{
    constructor(){
        super();
        this.state = {
            itemlist:["Apple", "Orange"],
            newitem:"",
        };
    }
    deleteUser= (index)=>{
        this.state.itemlist.splice(index, 1)
        this.setState({
            itemlist: this.state.itemlist,
        });
    };
    saveuser=()=>{
        this.setState({
            itemlist:this.state.itemlist.concat(this.state.newitem),
            newitem:"",
        });
    };
    processName=(obj)=>{
        this.setState({
            newitem:obj.target.value,
        });
    };
    render(){
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" onChange={this.processName} value={this.state.newitem}/>
                        <p className="text-center">
                         Available Items {this.state.itemlist.length}
                        </p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary btn-sm" onClick={this.saveuser}>Save Item</button>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.itemlist.map((xuser, index)=>{
                            return(
                                <div className="col-md-3 text-center">
                                    <div className="card p-2">
                                        <p>{xuser}</p>
                                        <button className="btn btn-danger btn-sm"onClick={this.deleteUser.bind(this, index)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default StateSeven