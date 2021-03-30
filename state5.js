import React, {Component} from 'react';
class StateFive extends Component{
     constructor(){
         super();
         this.state={
             customer:"",
             product:"",
             vendor:"",
             sales:"",
             income:""

         }

     }

     processCustomer=(obj)=>{
         this.setState({
          customer:obj.target.value,
         })
     }

     processProduct=(obj)=>{
         this.setState({
             product:obj.target.value,
         })
     }
     processVendor=(obj)=>{
        this.setState({
            vendor:obj.target.value,
        })
     }
     processSales=(obj)=>{
        this.setState({
            sales:obj.target.value,
        })
     }
     processIncome=(obj)=>{
        this.setState({
            income:obj.target.value,
        })
     }
     render(){
         return(
             <div className="container mt-4">
                 <div className="row text-center ml-5">
                     <div className="col-lg-2">
                     <label>Customer</label>
                     <input type="text" className="form-control"onChange={this.processCustomer}/>
                     </div>
                     <div className="col-lg-2">
                     <label>Product</label>
                     <input type="text" className="form-control"onChange={this.processProduct}/>
                     </div>
                     <div className="col-lg-2">
                     <label>Vendor</label>
                     <input type="text" className="form-control"onChange={this.processVendor}/>
                     </div>
                     <div className="col-lg-2">
                     <label>Sales</label>
                     <input type="text" className="form-control"onChange={this.processSales}/>
                     </div>
                     <div className="col-lg-2">
                     <label>Income</label>
                     <input type="text" className="form-control"onChange={this.processIncome}/>
                     </div>        
                 </div>

                 <div className="row" id="sales">
                 <div className="col-lg-12 mt-4">
                 <h2 className="text-center text-primary ">Dashboard of 2010 Sales</h2>
                </div>
                <div className="col-lg-3 ml-5">
                <div className="card" id="card1">
                    <div className="card-body text-center text-white">
                      <label>Customers</label>
                      <p>({this.state.customer})</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 ml-5">
                <div className="card bg-danger" id="border">
                    <div className="card-body text-center text-white">
                      <label>Product</label>
                      <p>({this.state.product})</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 ml-5">
                <div className="card bg-success"  id="border">
                    <div className="card-body text-center text-white">
                      <label>Vendor</label>
                      <p>({this.state.vendor})</p>
                    </div>
                </div>
                </div>
                 </div>

                 <div className="row mt-4">
                
                <div className="col-lg-6 ">
                <div className="card bg-primary"  id="border">
                    <div className="card-body text-center text-white">
                      <label>Sales of 2010</label>
                      <p>{this.state.sales}</p>
                    </div>
                </div>
                </div>
         
                <div className="col-lg-6 ">
                <div className="card bg-info"  id="border">
                    <div className="card-body text-center text-white">
                      <label>Income in 2010</label>
                      <p>{this.state.income}</p>
                    </div>
                </div>
                </div>
                
                 </div>

              
             </div>
         )
     }
     


}
export default StateFive;