import React from 'react';
import Headerbottun from './Button';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="App-header">
            <Link to='/'><Headerbottun title="About"/></Link>
            <Link to='/Skills'><Headerbottun title="Skills"/></Link>
            <Link to='/Works'><Headerbottun title="Works"/></Link>
        </div>
    );
  }

export default Header;
