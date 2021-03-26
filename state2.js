import React, {Component} from 'react';
class StateTwo extends Component{
    constructor(){
        super();
        this.state={
            loc:"Bangalore",
            citylist: ["Pune", "Delhi"]
        }
    }
    processValue=(obj)=>{
        this.setState({
            loc: obj.target.value
        })
      //  alert(obj.target.value);
       // alert("ok");
    }

    save =()=>{
        this.setState({
            citylist: this.state.citylist.concat(this.state.loc)
        })
    }
    render(){
        return(
            <div className="container" mt-4>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1 className="text-success text-center">{this.state.loc}</h1>
                        <p className="mt-3">
                            Enter City Name<input type="text" className="form-control" onChange={this.processValue}/>
                        </p>

                        <button className="btn btn-primary" onClick={this.save}>Save</button>
                        <hr/>
                        {
                            this.state.citylist.map((xcity, index)=>{
                                return(
                                    <p key={index}>{xcity}</p>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}
export default StateTwo;