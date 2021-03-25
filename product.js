import React, {Component} from 'react';
const productlist=["Apple", "Mobile", "Laptop", "Mouse", "Keyboard", "Mango"];
class Product extends Component{
    
    render(){
        return(
            <section>
                <h1 align="center" className="text-danger">Product</h1>
                <p align="center">Product List</p>
                {
                    productlist.map((xitem, index)=>{
                        // it used to make unique element = key
                        return<div className="myproduct" key={index}>
                                 {index} . {xitem}
                                 </div>
                    })
                }
            </section>
        )
    }

}
export default Product;
