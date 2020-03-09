import React from 'react';
import { Link } from 'react-router-dom';

export default  () => 
<nav>
    <div className="nav-wrapper">
        <Link to="/"><a href="#" className="brand-logo">Notes</a></Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Setting</a></li>
    </ul>
    </div>
</nav>