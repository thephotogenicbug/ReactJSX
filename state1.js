// state used to maintain status of variable and array
// render is a callback function 
import React, {Component} from 'react';
class StateOne extends Component{

     constructor(){
         super();
         this.state ={
             counter:5
         }
     }

     One = ()=>{
         this.setState({
             counter:this.state.counter + 5
         })
       
     }

        Two = ()=>{
        this.setState({
            counter:this.state.counter - 5,
          
        })
    }
    render(){
        //alert("Render Called");
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="text-success m-3">
                            The Counter is <br/> {this.state.counter}
                            </h1>
                       
                            <button className="btn btn-primary m-2" onClick={this.One}> + The {this.state.counter} By 5</button>
                            <button className="btn btn-danger m-2" onClick={this.Two}> - The {this.state.counter} By 5</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default StateOne;
