import React, {Component} from 'react';
import axios from 'axios';

class StateApiFour extends Component{
    constructor(){
        super();
        this.state={
            citylist:[]
        }
    }
    getCity = ()=>{
        let url = "http://firstenquiry.com/api/react/live/allcity.php";
        axios.get(url).then(response=>{
            this.setState({
                citylist:response.data
            })
        })
    }
    componentDidMount(){
        this.getCity();
    }
    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12 text-center">
                       <h2>{this.state.citylist.length} -: API Call Using Axios</h2>
                    </div>
                </div>
                <div className="row mt-3">
                    {
                        this.state.citylist.map((xcity, index)=>{
                            return(
                                <div className="col-md-3 form-group" key={index}>
                                    <p className="p-3 border">{xcity.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}
export default StateApiFour;