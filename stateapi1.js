import React, {Component} from 'react';
class StateApiOne extends Component{
        constructor(){
            super();
            this.state={
            citylist:[]
            }
        } 
        getData = ()=>{
            fetch("http://firstenquiry.com/api/react/live/allcity.php")
            .then(response=>response.json())
            .then(result=>this.setState({citylist:result}))
        }
        render(){
            return(
                <div className="container mt-3">
                    <div className="row">
                        <div  className="col-md-12 text-center">
                            <button className="btn btn-primary" onClick={this.getData}>Load City List</button>
                            <h2>{this.state.citylist.length} - State Managment Using Fetch</h2>
                        </div>
                    </div>{// row ends here
                                                }

                    <div className="row text-center mt-2">
                        {
                            this.state.citylist.map((xcity, index)=>{
                                return(
                                    <div className="col-md-3 form-group" key={index}>
                                        <div className="border p-3">
                                            <p>{xcity.id}. {xcity.name}</p>
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
export default StateApiOne;