
import React from 'react';
import {Link} from 'react-router-dom';
const Header = ()=>{
       
    return(
        <nav>
            <ul>
                <li><Link to="/" className="pagelink">Home</Link></li>
                <li><Link to="/about.html" className="pagelink">About us</Link></li>
                <li><Link to="/userlist.html" className="pagelink">Users</Link></li>
                <li><Link to="/contact" className="pagelink">Contact</Link></li>
                <li><Link to="/login" className="pagelink">Login</Link></li>
                <li><Link to="/signup" className="pagelink">Signup</Link></li>
                <li><Link to="/product" className="pagelink">Products</Link></li>
                <li><Link to="/state1" className="pagelink">State1</Link></li>
                <li><Link to="/state2" className="pagelink">State2</Link></li>
                <li><Link to="/state3" className="pagelink">State3</Link></li>
                <li><Link to="/state4" className="pagelink">State4</Link></li>
                <li><Link to="/state5" className="pagelink">State5</Link></li>
                <li><Link to="/state6" className="pagelink">State6</Link></li>

            </ul>
            
        </nav>
        
    )
}

export default Header;