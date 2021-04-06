
import React from 'react';
import {Link} from 'react-router-dom';
const Header = ()=>{
       
    return(
        <nav>
            <ul>
              
                <li><Link to="/stateapi1" className="pagelink">ApiOne</Link></li>
                <li><Link to="/stateapi2" className="pagelink">ApiTwo</Link></li>
                <li><Link to="/stateapi3" className="pagelink">ApiThree</Link></li>
                <li><Link to="/stateapi4" className="pagelink">ApiFour</Link></li>
                <li><Link to="/stateapi5" className="pagelink">ApiFive</Link></li>
                <li><Link to="/hook1" className="pagelink">HookOne</Link></li>
                <li><Link to="/hook2" className="pagelink">HookTwo</Link></li>
                <li><Link to="/1/hook3" className="pagelink">HookThree</Link></li>
                <li><Link to="/0/Bangalore/hook4" className="pagelink">HookFour</Link></li>
            </ul>
            
        </nav>
        
    )
}

export default Header;