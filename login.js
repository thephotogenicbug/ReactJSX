import React , {Component} from 'react';
class UserLogin extends Component{
    constructor(){
        super();
        // first constructor (constructor execute first)
        //alert("one")
        // this state comes from Component
        this.state = {
            counter : 100,
            user : ["Ramesh", "Ganesh", "Mohit"]
        }; // to define the variable in a state
    }

     render(){
         //second contructor
         //alert("two")
         return(
            <section>
                <h1 align="center">Login</h1>
                <p align="center">Please Enter Login Details</p>   
                <h1 className="text-center text-danger">{this.state.counter}</h1> 
                {
                    this.state.user.map((xuser, index)=>{
                        return(
                            <p key={index} className="p-3 border">{xuser}</p>
                        )
                    })
                }     
            </section>
         );
     }
}
export default UserLogin;