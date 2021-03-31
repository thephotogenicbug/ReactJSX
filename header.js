
import React from 'react';
import {Link} from 'react-router-dom';
const Header = ()=>{
       
    return(
        <nav>
            <ul>
                <li><Link to="/state1" className="pagelink">State1</Link></li>
                <li><Link to="/state2" className="pagelink">State2</Link></li>
                <li><Link to="/state3" className="pagelink">State3</Link></li>
                <li><Link to="/state4" className="pagelink">State4</Link></li>
                <li><Link to="/state5" className="pagelink">State5</Link></li>
                <li><Link to="/state6" className="pagelink">State6</Link></li>
                <li><Link to="/state7" className="pagelink">State7</Link></li>
                <li><Link to="/stateapi1" className="pagelink">StateApiOne</Link></li>
                <li><Link to="/stateapi2" className="pagelink">StateApiTwo</Link></li>
                <li><Link to="/stateapi3" className="pagelink">StateApiThree</Link></li>
            </ul>
            
        </nav>
        
    )
}

export default Header;