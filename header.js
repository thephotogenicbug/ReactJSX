
import React from 'react';
import {Link} from 'react-router-dom';
const Header = ()=>{
       
    return(
        <nav>
            <ul>
                <li><Link to="/" className="pagelink">Home</Link></li>
                <li><Link to="/about.html" className="pagelink">About us</Link></li>
                <li><Link to="/userlist.html" className="pagelink">Users</Link></li>
                <li><Link to="" className="pagelink">Contact</Link></li>
                <li><Link to="" className="pagelink">Login</Link></li>
                <li><Link to="" className="pagelink">Signup</Link></li>
                <li><Link to="" className="pagelink">Products</Link></li>
            </ul>
        </nav>
    )
}

export default Header;