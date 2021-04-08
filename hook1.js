
import React, {useState} from 'react';
import CustomerList from './customerlist';
const HookOne = ()=>{
   // const[currentValue, updatedValue]=userState(initialValue);
   // const[array/VariableName, functionName]= userState(initialValue);
   const[counter, updateCounter]= useState(5);
   const[message, updateMessage]=useState();
   const[a, updatea]= useState(0);
   const[b, updateb]=useState(0);
  
   const one =()=>{
       updateCounter(counter+5);
       updateMessage("Hi, Your are Clicking on + Button, i know that !");
       updatea(a+1);
   }

   const two=()=>{
       updateCounter(counter-5);
       updateMessage("Hi, Your are Clicking on - Button, i seen that !");
       updateb(b+1);
   }

   return(
       <div className="container mt-3">
           <div className="row">
               <div className="col-md-12 text-center">
                   <h2 className="text-success">Hooks userState Simple Example</h2>
                   <h1 className="text-danger">{counter}</h1>
                   <button className="btn btn-success m-2"onClick={one}> + The {counter} By 5</button>
                   <button className="btn btn-danger m-2"onClick={two}> - The {counter} By 5</button>

                   <p className="text-center p-4">{message}</p>
                   <h3>The Plus Was Clicked {a} Times</h3>
                   <h3>The Minus Was Clicked {b} Times</h3>
               </div>
           </div>
           <div className="row">
               <CustomerList
               fullname="Naveen" 
               mobileno="9008006228" 
               cityname="Bangalore" 
               pic="1.jpg"/>
               
           </div>
       </div>
   )
}
export default HookOne;