import React, {Component} from 'react';

class CustomerList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col-md-3 form-group">
                <h3 className="text-success"></h3>
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <b>{this.props.fullname}</b>
                    </div>
                    <div className="card-body">
                        <img src={this.props.pic} className="img-fluid rounded" alt=""/>
                        <p className="text-center">
                        <label className="badge badge-danger p-3 mt-2">
                             From - {this.props.cityname}
                        </label>
                        </p>
                    </div>
                    <div className="card-footer text-center">
                        Mobile No -: {this.props.mobileno}
                    </div>
                </div>
            </div>
        )
    }
}
export default CustomerList;