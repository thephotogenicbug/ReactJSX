import React, {Component}from 'react';
const product = [
   {name: "Apple", price:200, qty:3},
   {name: "Mobile", price:2000, qty:3},
   {name: "Car", price:200000, qty:1},
   {name: "Laptop", price:20000, qty:2},
   {name: "Mouse", price:300, qty:5},
   {name: "House", price:2000000000, qty:1}
];
class Register extends Component{
     render(){
         return(
             <div className="container mt-3">
               <div className="row">
                   <div className="col-md-2"></div>
                   <div className="col-md-8">
                       <h1 className="text-center text-success">Static Multi Array</h1>
                       <table className="table table-bordered mt-3 table-hover table-sm">
                           <thead>
                                <tr className="text-primary">
                                    <th>Sl No</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                           </thead>
                           <tbody>
                               {
                                   product.map((mypro, index)=>{
                                       return(
                                           <tr key={index}>
                                                <td>{index}</td>
                                                <td>{mypro.name}</td>
                                                <td>{mypro.price}</td>
                                                <td>{mypro.qty}</td>
                                                <td>{mypro.price * mypro.qty}</td>
                                           </tr>
                                       )
                                   })
                               }
                           </tbody>
                       </table>
                   </div>
                   <div className="col-md-2"></div>
               </div>
             </div>
         )
     }
}
export default Register;