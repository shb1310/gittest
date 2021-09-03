import React from 'react';
import './App.css';
import './css/logoF.css';
import './css/Nav.css';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
function Nav() {
  
  return (
    <div className="Nav">
     <input id="menuBox" type="checkbox" /><label for="menuBox">&equiv;</label>
  <nav>
    <ul id="menuList">
      <Link to='/loc'><li>Loc</li></Link>
      <Link to='/list'> <li>List</li></Link>  
    </ul>
  </nav>
  <div id="content">
    <Link to='/loc'><img src={logo} id="logo" alt="logo"/></Link>
    <Link to='/loc'>    <span id="logoword"> 안심식당</span></Link>
    <hr/>
  </div>
  </div>
  );
}

export default Nav;
