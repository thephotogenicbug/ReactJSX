import React, {Component} from 'react';
class StateThree extends Component{
    constructor(){
        super();
        this.state={
            price:0,
            qty:0,
            total:0
        }
    }
    processQty=(obj)=>{
        this.setState({
            qty:obj.target.value,
            total:this.state.price * obj.target.value
        })
    }
    processPrice=(obj)=>{
        this.setState({
            price:obj.target.value,
            total:this.state.qty * obj.target.value
        })
    }

    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="bg-light p-3 text-danger">
                            <p>Quantity: {this.state.qty}</p>
                            <p>Price / Unit: {this.state.price}</p>
                            <p>Total Price: {this.state.total}</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <h3>State Managment</h3>
                        <p>Total Price {this.state.total}</p>
                        <p>
                            <label>Item Price</label>
                            <input type="number" className="form-control" onChange={this.processPrice}/>
                        </p>
                        <p>
                            <label>Item Quantity</label>
                            <input type="number" className="form-control" onChange={this.processQty}/>
                        </p>
                        
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}
export default StateThree
